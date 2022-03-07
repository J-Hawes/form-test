const fs = require("fs");

const MOVERS = "./server/movers.json";
const PROPERTY = "./server/property.json";

const getPropertyReport = async () => {
  fs.readFile(PROPERTY, "utf8", (err, jsonString) => {
    if (err) {
      console.log("Error reading file from disk:", err);
      return null;
    }
    try {
      const propertyFrom = JSON.parse(jsonString);
      console.log(propertyFrom);
      return propertyFrom;
    } catch (err) {
      console.log("Error parsing JSON string:", err);
    }
  });
};

const getMovers = async () => {
  fs.readFile(MOVERS, "utf8", (err, jsonString) => {
    if (err) {
      console.log("Error reading file from disk:", err);
      return null;
    }
    try {
      const moversForm = JSON.parse(jsonString);
      console.log(moversForm);
      return moversForm;
    } catch (err) {
      console.log("Error parsing JSON string:", err);
    }
  });
};

module.exports = {
  getPropertyReport,
  getMovers,
};
