const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());

const apiController = require("../server/api/controllers");

app.get("/property-report", apiController.getPropertyReport);

app.get("/movers", apiController.getMovers);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
