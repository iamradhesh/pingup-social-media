import { Routes, Route, useLocation } from "react-router-dom";
import Sidebar from "./layout/Sidebar";
import FeedPage from "./pages/FeedPage";
import ProfilePage from "./pages/ProfilePage";
import MessagesPage from "./pages/MessagesPage";
import AuthPage from "./pages/AuthPage";
import ProtectedRoute from "./components/ProtectedRoute";


function App() {
  const location = useLocation();
  const hideSidebar = ["/signin", "/signup"].includes(location.pathname);

  return (
    <div className="flex gap-2 min-w-screen md:w-[1536px] min-h-screen md:h-[2772px]">
     

      {!hideSidebar && <Sidebar />}

      {/* MAIN CONTENT: 
          Added pt-16 (padding-top) to push content below the logo in the top-left corner.
          The conditional class for margin-left is also applied correctly here.
      */}
      <main
        className={`flex-1 p-4 pt-16 ${
          hideSidebar ? "w-full" : "md:ml-[70px]"
        }`}
      >
        <Routes>
          {/* Auth routes */}
          <Route path="/signup" element={<AuthPage />} />
          <Route path="/signin" element={<AuthPage />} />

          {/* Protected routes */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <FeedPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/messages"
            element={
              <ProtectedRoute>
                <MessagesPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
