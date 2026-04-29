const mongoose = require("mongoose");
const Post = require("../models/Post");

async function getAllPosts() {
  return Post.find().populate("author").sort({ createdAt: -1 });
}

async function getPostById(postId) {
  if (!mongoose.Types.ObjectId.isValid(postId)) {
    return null;
  }

  return Post.findById(postId).populate("author");
}

async function createPost(postData) {
  const createdPost = await Post.create(postData);
  await createdPost.populate("author");
  return createdPost;
}

async function updatePostById(postId, updates) {
  if (!mongoose.Types.ObjectId.isValid(postId)) {
    return null;
  }

  const updatedPost = await Post.findByIdAndUpdate(postId, updates, {
    new: true,
    runValidators: true,
  }).populate("author");

  return updatedPost;
}

async function deletePostById(postId) {
  if (!mongoose.Types.ObjectId.isValid(postId)) {
    return null;
  }

  return Post.findByIdAndDelete(postId);
}

module.exports = {
  createPost,
  deletePostById,
  getAllPosts,
  getPostById,
  updatePostById,
};
