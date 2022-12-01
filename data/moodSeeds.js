// key 'promptFormat' needs to work in context of this question
// "What would you say to someone who was struggling with feelings of... ?".
// If left empty the prompt will use the regular 'bad' word

const seedMoods = [
  {
    good: "Hope",
    bad: "Fear",
  },
  {
    good: "Joy",
    bad: "Sadness",
  },
  {
    good: "Peace",
    bad: "Anger",
  },
  {
    good: "Pride",
    bad: "Shame",
  },
  {
    good: "Love",
    bad: "Hate",
  },
  {
    good: "Admiration",
    bad: "Disgust",
  },
  {
    good: "Interest",
    bad: "Boredom",
  },
  {
    good: "Fulfilled",
    bad: "Empty",
    promptFormat: "emptiness",
  },
  {
    good: "Optimistism",
    bad: "Pessimisism",
  },
  {
    good: "Altruistism",
    bad: "Selfishness",
  },
  {
    good: "Confident",
    bad: "Unconfident",
    promptFormat: "unconfidence",
  },
  {
    good: "Loved",
    bad: "Unloved",
    promptFormat: "being unloved",
  },
  {
    good: "Impressed",
    bad: "Underwhelmed",
    promptFormat: "being underwhelmed",
  },
  {
    good: "Successful",
    bad: "Innadequate",
    promptFormat: "innadequacy",
  },
  {
    good: "Acceptance",
    bad: "Resentment",
    promptFormat: "resentful",
  },
  {
    good: "Safe",
    bad: "Unsafe",
    promptFormat: "vulnerability",
  },
];

module.exports = seedMoods;
