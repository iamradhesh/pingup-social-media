import { useState } from "react";
import { Link } from "react-router-dom";
import profilepic from "../assets/profilepic.jpg";
import logoutButton from "../assets/logoutButton.png";
export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);
  const handleCreatePost = () => {};
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    window.location.href = "/signin"; // Redirect to signin page
  };

  return (
    <>
      {/* 1. Hamburger Button 
          - HIDDEN on screens larger than or equal to 'lg' (desktop)
          - VISIBLE on all smaller screens (sm, md) 
          - fixed position is necessary when main sidebar is fixed/absolute on mobile
      */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden fixed top-4 right-4 z-50 p-2 rounded-lg bg-white shadow-md hover:bg-gray-50"
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6 text-gray-700"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isOpen ? (
            <path d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* 2. Overlay 
          - VISIBLE when open, but HIDDEN on screens larger than or equal to 'lg'
      */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-transparent bg-opacity-30 z-40"
          onClick={toggleSidebar}
        />
      )}

      {/* 3. Sidebar
          - BASE (mobile): fixed, off-screen (-translate-x-full)
          - OPEN (mobile): fixed, on-screen (translate-x-0)
          - LARGE (desktop): static (in document flow), always visible (translate-x-0)
      */}
      <aside
        className={`
          fixed top-0 left-0 z-50 h-[600px] w-[288px]  mb-6
          bg-white border-r border-gray-200 overflow-y-auto 
          transition-transform duration-300 ease-in-out
          
          ${isOpen ? "translate-x-0" : "-translate-x-full"} 
          
          lg:static 
          lg:translate-x-0 
          lg:block
        `}
      >
        <nav className="flex flex-col space-y-4 p-4 mt-17 md:mt-10 md:ml-3 mb-[130px]">
          {["/", "/connections", "/profile", "/messages"].map((path, i) => (
            <Link
              key={i}
              to={path}
              className="hover:text-blue-500 transition-colors text-gray-700 font-medium"
              onClick={() => setIsOpen(false)}
            >
              {path === "/"
                ? "Feed"
                : path.replace("/", "").charAt(0).toUpperCase() + path.slice(2)}
            </Link>
          ))}
        </nav>

        {/* Create Post Button */}
        <div className="absolute bottom-[69px] w-full px-4 pb-4">
          <button
            onClick={handleCreatePost}
            className="w-full max-w-[239px] h-[44px] mx-auto rounded-lg text-white font-semibold flex items-center justify-center bg-gradient-to-r from-[#615FFF] to-[#9810FA] hover:shadow-lg active:scale-95 transition-all"
          >
            ➕ Create Post
          </button>
        </div>

        {/* Footer */}
        <div className="absolute bottom-0 w-full border-t border-gray-200 h-[69px] flex items-center justify-center">
          <span className="flex justify-between items-center text-xs text-gray-500 p-4">
            <div className="flex gap-3 items-center">
              {/* 1. Profile Picture */}
              <img
                src={profilepic}
                alt="profile pic"
                className="w-8 h-8 rounded-full"
                // Removed: opacity-100, top-[19px], left-[28px]
              />

              {/* 2. Name and Username Container */}
              <div className="flex flex-col">
                <h3
                  className="text-sm font-medium leading-5 text-black"
                  // Removed: w-[80.63px], h-5, opacity-100, absolute, top-[17px], left-[68px]
                >
                  Name
                </h3>
                <p
                  className="text-xs font-normal leading-4 text-gray-400"
                  // Removed: w-[76.4px], h-[15px], opacity-100, absolute, top-[37px], left-[68px]
                >
                  @username
                </p>
              </div>
            </div>

            {/* 3. Logout Button */}
            <div className="absolute right-1">
              <button className="text-blue-500 hover:underline" onClick={handleLogout}>
                <img
                  src={logoutButton}
                  alt="logout button"
                  className="w-6 h-6"
                />
              </button>
            </div>
          </span>
        </div>
      </aside>
    </>
  );
}
