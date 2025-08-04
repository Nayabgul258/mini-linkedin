import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../api.js";
import PostCard from "../components/PostCard";


export default function Profile() {
  const { id } = useParams();
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await API.get(`/auth/profile/${id}`);
      setUser(res.data);
      const postRes = await API.get(`/posts/user/${id}`);
      setPosts(postRes.data);
    })();
  }, [id]);

  return (
    <div>
      <h1 className="text-xl font-bold">{user.name}</h1>
      <p>{user.bio}</p>
      <hr className="my-4" />
      {posts.map(posts => <PostCard key={posts._id} post={posts} />)}
    </div>
  );
}

