// src/pages/FeedPage.tsx
import React, { useEffect, useState } from "react";
import StorySection from "../components/StorySection";
import PostCard from "../components/PostCard";
import { getAllPostsService } from "../service/postServices";
import type { PostType } from "../types/post";
import logoImage1 from "../assets/logo1.png";
import logoImage2 from "../assets/logo2.png";
import logoImage3 from "../assets/logo3.png";
import Ads_Cards from "../components/Ads_Cards";

const recentMessages = [
  { id: 1, name: "Richard Hendricks", avatar: "https://i.pravatar.cc/150?img=12", message: "I seen your profile", time: "3 hours ago", unread: 0 },
  { id: 2, name: "John Warren", avatar: "https://i.pravatar.cc/150?img=13", message: "This is a Samsung Tablet", time: "8 days ago", unread: 0 },
  { id: 3, name: "Alexa james", avatar: "https://i.pravatar.cc/150?img=45", message: "how are you", time: "15 days ago", unread: 1 },
];

const FeedPage: React.FC = () => {
  const [posts, setPosts] = useState<PostType[]>([]);
  const token = localStorage.getItem("authToken");

  useEffect(() => {
    if (!token) return;
    const fetchPosts = async () => {
      try {
        const data = await getAllPostsService(token);
        setPosts(data);
      } catch (err) {
        console.error("Error fetching posts:", err);
      }
    };
    fetchPosts();
  }, [token]);

  return (
    <div className="w-full min-h-screen flex gap-4 mx-auto p-4 pt-16 md:pt-4 items-start">
      {/* Logo Section */}
      <div className="absolute flex items-center z-[100] top-4 left-4 space-x-1 mb-8 md:mb-16">
        <div className="flex items-center">
          <img src={logoImage3} alt="Logo 3" className="w-5 h-5 flex-shrink-0" />
          <img src={logoImage2} alt="Logo 2" className="w-5 h-5 flex-shrink-0 -ml-1" />
        </div>
        <img src={logoImage1} alt="pingup logo" className="h-6 md:h-8" />
      </div>

      {/* Main Content */}
      <div className="w-full gap-2 flex flex-col items-start">
        <div className="w-[412px] md:w-[672px] h-auto md:left-[374px]">
          <StorySection />
        </div>
        <div className="w-95 md:w-[672px] h-auto rounded-xl bg-white shadow-sm top-[236px] left-4 md:left-[390px]">
          <PostCard posts={posts} />
        </div>
      </div>

      {/* Ads & Recent Messages */}
      <div className="w-full gap-1 min-h-[200px] bg-transparent hidden md:flex flex-col items-center p-4 pt-4 space-y-4 mt-1 ml-4">
        <div className="w-80 h-80 rounded-md bg-white shadow-sm p-2">
          <p className="font-outfit font-semibold text-xs leading-4 align-middle text-[#1D293D] mb-1">Sponsored Content</p>
          <Ads_Cards />
        </div>

        <div className="w-80 h-52 rounded-md bg-white shadow-sm p-2 flex flex-col gap-1">
          <p className="font-outfit font-semibold text-xs leading-4 align-middle text-[#1D293D]">Recent Messages</p>
          <div className="w-72 h-36">
            {recentMessages.map((msg) => (
              <div key={msg.id} className="flex items-start space-x-2 mb-2">
                <img src={msg.avatar} alt={msg.name} className="w-8 h-8 rounded-full" />
                <div className="flex-1">
                  <p className="font-semibold text-xs">{msg.name}</p>
                  <p className="text-xs text-gray-500">{msg.message}</p>
                </div>
                <div className="text-xs text-gray-400">{msg.time}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedPage;
