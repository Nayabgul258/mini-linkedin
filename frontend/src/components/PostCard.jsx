import { Link } from "react-router-dom";

export default function PostCard({ post }) {
  return (
    <div className="bg-white p-4 rounded shadow mb-4">
      <Link to={`/profile/${post.author._id}`}>
        <h2 className="font-bold">{post.author.name}</h2>
      </Link>
      <p className="text-gray-700 mt-1">{post.content}</p>
      <p className="text-xs text-gray-400 mt-2">{new Date(post.createdAt).toLocaleString()}</p>
    </div>
  );
};
