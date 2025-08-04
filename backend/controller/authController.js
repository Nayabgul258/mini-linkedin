import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";



export const register = async (req, res) => {
  const { name, email, password, bio } = req.body;

  try {
    const userExists = await User.findOne({ email });
    if (userExists)
      return res.status(400).json({ message: "Email already in use" });

    const hashed = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashed, bio });
    await newUser.save();
    res.status(201).json({ message: "User Register Successfully" });
  } catch (error) {
    res.status(500).json({ message: "server Error" });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "User Not found" });

    const isMatch = bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid Credentials" });

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
    res.json({
      token,
      user: { id: user._id, name: user.name, email: user.email },
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};


export const ProfileID = async(req ,res )=>{
  try {
    const user = await User.findById(req.params.id).select("-password");
    if(!user) return res.status(404).json({message:"User Not found"});

    res.json(user);
  } catch (error) {
    res.status(500).json({message:"server Error"});
  }
};