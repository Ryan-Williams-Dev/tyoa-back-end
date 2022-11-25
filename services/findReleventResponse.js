const Response = require("../models/responseModel");
const mode = require("../utils/mode");

const findReleventResponse = async (userId, selectedMoods) => {
  const responses = [];

  // First check if user has a relevent piece of advice
  for (const moodId of selectedMoods) {
    const matchedResponses = await Response.find({
      user: userId,
      moods: moodId,
    });
    responses.push(...matchedResponses);
  }

  if (responses.length > 0) {
    return mode(responses);
  }

  // If user does not have relevent piece of advice, search all responses
  for (const moodId of selectedMoods) {
    const matchedResponses = await Response.find({
      moods: moodId,
    });
    responses.push(...matchedResponses);
  }

  return mode(responses);
};

module.exports = findReleventResponse;
