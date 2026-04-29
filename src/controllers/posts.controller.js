const postsService = require("../services/posts.service");

async function getAllPosts(req, res, next) {
  try {
    const posts = await postsService.getAllPosts();

    res.status(200).json({
      status: "success",
      results: posts.length,
      data: {
        posts,
      },
    });
  } catch (error) {
    next(error);
  }
}

async function getPostById(req, res, next) {
  try {
    const post = await postsService.getPostById(req.params.id);

    if (!post) {
      return res.status(404).json({
        status: "fail",
        message: "Post not found",
      });
    }

    res.status(200).json({
      status: "success",
      data: {
        post,
      },
    });
  } catch (error) {
    next(error);
  }
}

async function createPost(req, res, next) {
  try {
    const createdPost = await postsService.createPost(req.body);

    res.status(201).json({
      status: "success",
      data: {
        post: createdPost,
      },
    });
  } catch (error) {
    next(error);
  }
}

async function updatePostById(req, res, next) {
  try {
    const updatedPost = await postsService.updatePostById(
      req.params.id,
      req.body,
    );

    if (!updatedPost) {
      return res.status(404).json({
        status: "fail",
        message: "Post not found",
      });
    }

    res.status(200).json({
      status: "success",
      data: {
        post: updatedPost,
      },
    });
  } catch (error) {
    next(error);
  }
}

async function deletePostById(req, res, next) {
  try {
    const deletedPost = await postsService.deletePostById(req.params.id);

    if (!deletedPost) {
      return res.status(404).json({
        status: "fail",
        message: "Post not found",
      });
    }

    res.status(200).json({
      status: "success",
      message: "Post deleted successfully",
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  createPost,
  deletePostById,
  getAllPosts,
  getPostById,
  updatePostById,
};
