const express = require("express");
const app = express();

const postRouter = require("./routes/posts.routes");

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Blogify API is running!");
});

// 👇 THIS IS THE KEY LINE
app.use("/api/v1/posts", postRouter);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});