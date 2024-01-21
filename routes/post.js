const express = require("express");
const router = express.Router();
const Post = require("./models/postSchema");

//query all post
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

//getting a specific post
router.get("/:postId", async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    res.json(post);
    console.log(post);
  } catch (err) {
    res.json(err);
  }
});

//deleting a specific post
router.delete("/:postId", async (req, res) => {
  try {
    const removedPost = await Post.remove({ _id: req.params.postId });
    res.json(removedPost);
    console.log(removedPost);
  } catch (err) {
    res.json(err);
  }
});

//updating a specific post
router.patch("/:postId", async (req, res) => {
  try {
    const updatedPost = await Post.updateOne(
      { _id: req.params.postId },
      { $set: { title: req.body.title } }
    );
    res.json(updatedPost);
    console.log(updatedPost);
  } catch (err) {
    res.json(err);
  }
});

//sending a post
router.post("/", async (req, res) => {
  res.send("this is a post request");
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });

  try {
    const savedPost = await post.save();
    const formartedPost = res.json(savedPost);
    console.log(formartedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get("/specific", (req, res) => {
  res.send("we are on specific post");
});

module.exports = router;
