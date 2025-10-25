// src/components/Cards_Post.tsx
import React, { useState } from "react";
import { FavoriteBorder, ChatBubbleOutline, ShareOutlined, Verified } from "@mui/icons-material";

type CardProps = {
  post: {
    id: string;
    username: string;
    avatar: string;
    content: string;
    image?: string;
    hashtags?: string[];
    date?: string;
  };
};

const MAX_CHAR = 90;

const Cards: React.FC<CardProps> = ({ post }) => {
  const [showMore, setShowMore] = useState(false);

  const trimmedContent =
    post.content.length > MAX_CHAR && !showMore
      ? post.content.slice(0, MAX_CHAR) + "..."
      : post.content;

  return (
    <div className="w-full sm:max-w-[672px] bg-white rounded-xl border border-[#D0D7DE] shadow-sm p-4">
      {/* Post Header */}
      <div className="flex gap-2 items-start">
        <img src={post.avatar} alt={post.username} className="w-10 h-10 rounded-full" />
        <div className="flex flex-col flex-1">
          <div className="flex items-center gap-1">
            <p className="font-semibold">{post.username}</p>
            <Verified className="text-[#2B7FFF]" />
          </div>
          <p className="text-xs text-gray-500">@{post.username} · {post.date}</p>
        </div>
      </div>

      {/* Post Content */}
      <div className="mt-2 mb-2 text-sm">
        {trimmedContent}
        {post.content.length > MAX_CHAR && (
          <button className="text-blue-500 ml-1" onClick={() => setShowMore(!showMore)}>
            {showMore ? "Show Less" : "Read More"}
          </button>
        )}
      </div>

      {/* Post Image */}
      {post.image && (
        <div className="mt-2 mb-2">
          <img src={post.image} alt={post.content} className="w-full rounded-lg object-cover" />
        </div>
      )}

      {/* Post Actions */}
      <div className="flex items-center gap-4 text-gray-500 mt-2">
        <div className="flex items-center gap-1 cursor-pointer hover:text-blue-500">
          <ChatBubbleOutline />
          <p className="text-xs">12</p>
        </div>
        <div className="flex items-center gap-1 cursor-pointer hover:text-blue-500">
          <ShareOutlined />
          <p className="text-xs">4</p>
        </div>
        <div className="flex items-center gap-1 cursor-pointer hover:text-blue-500">
          <FavoriteBorder />
          <p className="text-xs">34</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
