const Response = require("../models/responseModel");
const mongoose = require("mongoose");

const ObjectId = mongoose.Types.ObjectId;

const findReleventResponse = async (userId, selectedMoods) => {
  const selectedMoodsAsObjectIds = selectedMoods.map((id) => {
    return new ObjectId(id);
  });

  const userIdAsObjectId = new ObjectId(userId);

  let responses = [];

  try {
    // First check responses submitted by user for match
    responses = await Response.aggregate([
      { $match: { user: userIdAsObjectId } },
      {
        $addFields: {
          weight: {
            $size: { $setIntersection: ["$moods", selectedMoodsAsObjectIds] },
          },
        },
      },
      { $match: { weight: { $gt: 0 } } },
      { $sort: { weight: -1 } },
    ]);

    // Check for closest match amongst all users if no matches from user
    if (responses.length === 0) {
      responses = await Response.aggregate([
        {
          $addFields: {
            weight: {
              $size: { $setIntersection: ["$moods", selectedMoodsAsObjectIds] },
            },
          },
        },
        { $match: { weight: { $gt: 0 } } },
        { $sort: { weight: -1 } },
      ]);
    }
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }

  // Early return for one or empty response
  if (responses.length === 1) return responses[0];
  if (responses.length <= 0) {
    return { text: "" };
  }

  // Take only the tied closest matches, and pick randomly from the winners
  const bestMatches = [];
  if (responses.length > 1) {
    for (let i = 0; i < responses.length; i++) {
      const curr = responses[i];
      const next = responses[i + 1];
      bestMatches.push(curr);
      if (curr.weight > next.weight) {
        break;
      }
    }
  }

  const result = bestMatches[Math.floor(Math.random() * bestMatches.length)];
  return result;
};

module.exports = findReleventResponse;
