const express = require("express");

const routes = require("./router/urlroute.js");
const { connectToDB } = require("./mongodb.js");

const app = express();
const port = 5000;

// Middleware

app.use(express.json());

// Routes
app.use("/url", routes);

// Connect to MongoDB database
connectToDB();

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
