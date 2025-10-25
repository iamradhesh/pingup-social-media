import React from "react";
import Cards from "./Cards_Post";
import profilepic from "../assets/profilepic.jpg";
import postImage from "../assets/postImage.jpg";

const dummyPosts = [
  {
    id: 1,
    username: "John Warren",
    avatar: "https://i.pravatar.cc/150?img=13",
    content:
      "We're a small #team with a big vision — working day and night to turn dreams into products.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
    hashtags: ["team", "products"],
    date: "9 days ago",
  },
  {
    id: 2,
    username: "Jane Smith",
    avatar: "https://i.pravatar.cc/150?img=45",
    content:
      "Unlock your potential — every small step counts. Stay focused and keep growing.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop",
    hashtags: ["motivation", "growth", "keepgoing"],
    date: "3 days ago",
  },
  {
    id: 3,
    username: "Alex Chen",
    avatar: "https://i.pravatar.cc/150?img=17",
    content:
      "Just launched our new feature! Couldn't be more excited to share this with the community. #innovation #tech",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    hashtags: ["innovation", "tech", "launch"],
    date: "5 hours ago",
  },
  {
    id: 4,
    username: "Sarah Miller",
    avatar: "https://i.pravatar.cc/150?img=27",
    content:
      "Coffee, code, and creativity. That's how we roll at the office. Building something amazing one line at a time.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
    hashtags: ["coding", "developer", "startup"],
    date: "2 days ago",
  },
  {
    id: 5,
    username: "Mike Johnson",
    avatar: "https://i.pravatar.cc/150?img=33",
    content:
      "Collaboration is key to success. Grateful to work with such an incredible #team that pushes boundaries every day.",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop",
    hashtags: ["team", "collaboration", "success"],
    date: "1 week ago",
  },
];

const PostCard = () => {
  return (
    <div className="w-full flex flex-col gap-4 h-auto">
      {dummyPosts.map((post) => (
        <Cards key={post.id} post={post} />
      ))}
    </div>
  );
};
export default PostCard;
