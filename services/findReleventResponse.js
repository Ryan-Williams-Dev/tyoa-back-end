const Response = require("../models/responseModel");
const mongoose = require("mongoose");

const ObjectId = mongoose.Types.ObjectId;

const findReleventResponse = async (userId, selectedMoods) => {
  const selectedMoodsAsObjectIds = selectedMoods.map((id) => {
    return new ObjectId(id);
  });

  const userIdAsObjectId = new ObjectId(userId);

  console.log("meep");

  try {
    let responses = await Response.aggregate([
      { $match: { user: userIdAsObjectId } },
      {
        $addFields: {
          weight: {
            $size: { $setIntersection: ["$moods", selectedMoodsAsObjectIds] },
          },
        },
      },
      { $sort: { weight: -1 } },
    ]);

    if (responses.length === 0) {
      responses = await Response.aggregate([
        {
          $addFields: {
            weight: {
              $size: { $setIntersection: ["$moods", selectedMoodsAsObjectIds] },
            },
          },
        },
        { $sort: { weight: -1 } },
      ]);
    }
    return responses[0];
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = findReleventResponse;
