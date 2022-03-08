const fs = require("fs");

const MOVERS = "./server/forms/movers.json";
const PROPERTY = "./server/forms/property.json";

const getPropertyReport = async (req, res) => {
  fs.readFile(PROPERTY, "utf8", (err, jsonString) => {
    if (err) {
      console.log("Error reading file from disk:", err);
      return null;
    }
    try {
      const propertyFrom = JSON.parse(jsonString);
      console.log(propertyFrom[0]);
      res.status(200).json({
        status: "success",
        data: {
          page_label: propertyFrom[0].page_label,
          fields: propertyFrom[0].fields,
        },
      });
    } catch (err) {
      console.log("Error parsing JSON string:", err);
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
      console.log(moversForm[0]);
      res.status(200).json({
        status: "success",
        data: {
          page_label: moversForm[0].page_label,
          fields: moversForm[0].fields,
        },
      });
    } catch (err) {
      console.log("Error parsing JSON string:", err);
    }
  });
};

module.exports = {
  getPropertyReport,
  getMovers,
};
