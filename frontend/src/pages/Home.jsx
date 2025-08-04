import { useEffect, useState } from "react";
import API from "../api.js";
import PostCard from "../components/PostCard";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [content, setContent] = useState("");

  const fetchPosts = async () => {
    const res = await API.get("/posts");
    console.log(res.data); 
    setPosts(res.data);
  };

  const handlePost = async (e) => {
    e.preventDefault();
    await API.post("/posts", { content });
    setContent("");
    fetchPosts();
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      {localStorage.getItem("token") && (
        <form onSubmit={handlePost} className="space-y-2 mb-6">
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full border rounded p-2"
            placeholder="What's on your mind?"
          />
          <button className="bg-green-600 text-white px-4 py-2 rounded">Post</button>
        </form>
      )}

      {Array.isArray(posts) && posts.map(post => (
        <PostCard key={post._id} post={post} />
      ))}
    </>
  );
}
