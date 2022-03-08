const fs = require("fs");

const MOVERS = "./server/forms/movers.json";
const PROPERTY = "./server/forms/property.json";
const SUBMISSION = "./submission.json";

const postSubmission = async (submission) => {
  await fs.writeFile(SUBMISSION, JSON.stringify(submission));
  return;
};

const getPropertyReport = async (req, res) => {
  fs.readFile(PROPERTY, "utf8", (err, jsonString) => {
    try {
      const propertyFrom = JSON.parse(jsonString);
      res.status(200).json({
        status: "success",
        data: {
          page_label: propertyFrom[0].page_label,
          fields: propertyFrom[0].fields,
        },
      });
    } catch (err) {
      console.log(err.message);
    }
  });
};

const getMovers = async (req, res) => {
  fs.readFile(MOVERS, "utf8", (err, jsonString) => {
    if (err) {
      console.log("Error reading file from disk:", err);
      return null;
    }
    try {
      const moversForm = JSON.parse(jsonString);
      res.status(200).json({
        status: "success",
        data: {
          page_label: moversForm[0].page_label,
          fields: moversForm[0].fields,
        },
      });
    } catch (err) {
      console.log(err.message);
    }
  });
};

module.exports = {
  getPropertyReport,
  getMovers,
  postSubmission,
};
