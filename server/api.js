const fs = require("fs");

const moverFILE = "./server/forms/movers.json";
const propertyFILE = "./server/forms/property.json";
const submissionFILE = "./server/submission.json";

function postSubmission(submission) {
  fs.writeFile(submissionFILE, JSON.stringify(submission, null, 2), (err) => {
    if (err) throw err;
  });
  return;
}

const getPropertyReport = async (req, res) => {
  fs.readFile(propertyFILE, "utf8", (err, jsonString) => {
    if (err) {
      console.log("Error reading file from disk:", err);
      return null;
    }
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
  fs.readFile(moverFILE, "utf8", (err, jsonString) => {
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
