// src/layouts/Sidebar.tsx
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-64 bg-white p-4 shadow-md min-h-screen">
      <nav className="flex flex-col space-y-4">
        <Link to="/" className="hover:text-blue-500">Feed</Link>
        <Link to="/connections" className="hover:text-blue-500">Connections</Link>
        <Link to="/profile" className="hover:text-blue-500">Profile</Link>
        <Link to="/messages" className="hover:text-blue-500">Messages</Link>
      </nav>
    </div>
  );
}
