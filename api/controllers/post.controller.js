const PostModel = require('../models/post.model');

exports.getPosts = async (req, res) => {
  try {
    const posts = await PostModel.find();
    console.log(posts);
    res.status(200).json(posts);
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}


exports.createPost = async (req, res) => {
  try {
    const newPost = await PostModel(req.body).save();
    newPost && res.status(201).json(newPost)
  } catch (error) {
    res.status(409).json({ message: error.message })
  }

}