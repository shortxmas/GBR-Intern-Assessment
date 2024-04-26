import express from "express";
import bodyParser from "body-parser";
import todoRouter from "./routes/todos";

// Create Express app
const app = express();

// Use body parser in express app
app.use(bodyParser.json());

// Use todos router in express app
app.use("/todos", todoRouter);

// Define home route
app.get("/", (req, res) => {
  res.status(200).send("Hello world!");
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
