import React, { useState } from "react";
import profilepic from "../assets/profilepic.jpg";
import uploadImg from "../assets/uploadImg.png";
import { createPostService } from "../service/postServices";

const CreatePost = () => {
  const [content, setContent] = useState("");
  const [hashtags, setHashtags] = useState("");
  const [image, setImage] = useState<File | null>(null);

  const token = localStorage.getItem("authToken"); // get JWT token

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handlePost = async () => {
    if (!content || !image) {
      alert("Please provide content and image");
      return;
    }
    if (!token) {
      alert("You are not authenticated");
      return;
    }

    try {
      await createPostService(
        { content, hashtags: hashtags ? hashtags.split(",") : [], image },
        token
      );
      alert("Post created successfully!");
      setContent("");
      setHashtags("");
      setImage(null);
    } catch (err) {
      console.error(err);
      alert("Failed to create post");
    }
  };

  return (
    <div className="flex flex-col items-start gap-1 w-full max-w-[1152px] h-auto px-4 md:px-12 opacity-100">
      {/* Header */}
      <div className="w-full h-auto p-2">
        <h1 className="font-outfit font-bold text-[30px] leading-[36px] text-[#0F172B]">
          Create Post
        </h1>
        <p className="font-outfit font-normal text-base leading-6 text-[#45556C]">
          Share your thoughts with the world
        </p>
      </div>

      {/* Create post box */}
      <div className="w-full max-w-[576px] h-auto opacity-100 rounded-xl bg-white shadow-md">
        <div className="flex items-center gap-2 p-4">
          <img
            src={profilepic}
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
          <div className="flex flex-col">
            <h3 className="font-outfit font-medium text-sm leading-5 text-black">
              Name
            </h3>
            <p className="font-outfit font-normal text-xs leading-4 text-gray-400">
              @username
            </p>
          </div>
        </div>

        <div className="w-full px-4">
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full h-[100px] resize-none rounded-md p-2 font-outfit font-normal text-base leading-6 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="What's on your mind?"
          />
        </div>
        

        <footer className="flex justify-between items-center w-full p-4  border-t border-[#D1D5DC]">
          <input
            type="file"
            onChange={handleImageUpload}
            className="hidden"
            id="image-upload"
          />
          <label
            htmlFor="image-upload"
            className="font-outfit font-medium text-sm leading-5 p-2 rounded-md hover:cursor-pointer"
          >
            <img src={uploadImg} alt="Upload" className="w-6 h-6 opacity-100" />
          </label>

          <button
            onClick={handlePost}
            className="w-[138px] text-white h-9 opacity-100 rounded-md bg-gradient-to-r from-[#615FFF] to-[#9810FA] hover:shadow-lg active:scale-95 transition-all"
          >
            Post
          </button>
        </footer>
      </div>
    </div>
  );
};

export default CreatePost;
