const express = require("express");

// Use environment variable if configured, otherwise use port 3000
const PORT = process.env.PORT || 3001;

// Instantiate express app
const app = express();

// parses incoming requests with JSON payloads
app.use(express.json());

// reference to api controllers
const api = require("./api");

// define http functions, routing paths and call api functions
app.get("/property-report", api.getPropertyReport);

app.get("/movers", api.getMovers);

app.post("/submit", (req, res) => {
  api.writeSubmission(req.body.data);
  res.json({ message: "Success" });
});

// Run Server
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
