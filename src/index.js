require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db");
const postRouter = require("./routes/posts.routes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Blogify API is running!");
});

app.use("/api/v1/posts", postRouter);

app.use((req, res) => {
  res.status(404).json({
    status: "fail",
    message: "Route not found",
  });
});

app.use((err, req, res, next) => {
  let statusCode = err.statusCode || 500;
  let message = err.message || "Internal Server Error";

  if (err.name === "ValidationError") {
    statusCode = 400;
  }

  if (err.code === 11000) {
    statusCode = 409;
    message = "Duplicate key error";
  }

  res.status(statusCode).json({
    status: "error",
    message,
  });
});

async function startServer() {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error.message);
    process.exit(1);
  }
}

startServer();
