import Post from "../models/Post.js";

export const createPost = async (req, res) => {
  const { content } = req.body;
   if (!content) {
    return res.status(400).json({ message: "Post content is required" });
  }
  try {
    const post = new Post({ content, author: req.user._id });
    await post.save();
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ message: "server error" });
  }
};

export const getAllPost = async (req, res) => {
  try {
    const posts = await Post.find()
      .populate("author", "name")
      .sort({ createdAt: -1 });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

export const postByUserId = async(req ,res) =>{
  try {
    const Posts = await Post.find({author:req.params._id}).sort({createdAt:-1});
    res.json(Posts);
  } catch (error) {
     res.status(500).json({message:"Server Error "});
  }
};
