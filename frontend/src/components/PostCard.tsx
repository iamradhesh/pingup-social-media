// src/components/PostCard.tsx
import React from "react";
import Cards from "./Cards_Post";
import type { PostType } from "../types/post";

interface Props {
  posts: PostType[];
}

const PostCard: React.FC<Props> = ({ posts }) => {
  // Map backend post data to frontend display format
  const formattedPosts = posts.map((post) => ({
  id: post._id,
  username: post.user.name,
  avatar: post.user.profilePicture || "/default-profile.png",
  content: post.content,
  image: post.image
  ? `${import.meta.env.VITE_API_URL.replace('/api/v1','')}${post.image.startsWith('/') ? post.image : '/' + post.image}`
  : undefined,

  hashtags: post.hashtags,
  date: new Date(post.createdAt).toLocaleDateString(),
}));


  return (
    <div className="flex flex-col gap-4 p-2">
      {formattedPosts.map((post) => (
        <Cards key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostCard;
