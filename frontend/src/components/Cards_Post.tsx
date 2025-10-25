import React, { useState } from "react";
import {
  FavoriteBorder,
  ChatBubbleOutline,
  ShareOutlined,
  Verified,
  ExpandMore,
} from "@mui/icons-material";

type Post = {
  id: number;
  username: string;
  avatar: string;
  content: string;
  image?: string;
  hashtags?: string[];
  date?: string;
};

const MAX_CHAR = 90; // how much text to show before trimming

const Cards = ({ post }: { post: Post }) => {
  const [showMore, setShowMore] = useState(false);

  const trimmedContent =
    post.content.length > MAX_CHAR && !showMore
      ? post.content.slice(0, MAX_CHAR) + "..."
      : post.content;

  return (
   <div className="w-full sm:max-w-[672px] bg-white rounded-xl border border-[#D0D7DE] shadow-sm p-4">
    <div className="flex gap-1 items-start">
      <img src={post.avatar} alt={post.username} className="w-10 h-10 rounded-full" />
      
      <div className="flex flex-col items-center justify-between mb-2">
        <div className="flex gap-1 items-center">
          <p className="font-semibold">{post.username}</p>
          <Verified className="text-[#2B7FFF]" />
        </div>
        <div className="flex gap-1">
          <p className="text-xs text-gray-500">@{post.username}.</p>
          <p className="text-xs text-gray-500">{post.date}</p>
        </div>
        
      </div>
    </div>

    {/* //Post Caption */}
    <div className="mt-2 mb-2"> 
      <p className="text-sm">
        {trimmedContent}
        {post.content.length > MAX_CHAR && (
          <button
            className="text-blue-500 ml-1"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? " Show Less" : " Read More"}
          </button>
        )}
      </p>
    </div>
    {/* Post Image */}
    {post.image && (
      <div className="mt-2 mb-2">
        <img src={post.image} alt={post.content} className="w-full rounded-lg" />
      </div>
    )}
    {/* Post Actions */}
    <div className="flex items-start gap-3 justify-aroundmt-4 text-gray-500">
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
