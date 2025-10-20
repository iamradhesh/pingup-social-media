import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import FeedPage from "./pages/FeedPage";
import ProfilePage from "./pages/ProfilePage";
import MessagesPage from "./pages/MessagesPage";
import AuthPage from "./pages/AuthPage";

function App() {
  return (
    <Routes>
      {/* Auth routes */}
      <Route path="/signup" element={<AuthPage />} />
      <Route path="/signin" element={<AuthPage />} />

      {/* Main app routes */}
      <Route
        path="/"
        element={
          <MainLayout>
            <FeedPage />
          </MainLayout>
        }
      />
      <Route
        path="/profile"
        element={
          <MainLayout>
            <ProfilePage />
          </MainLayout>
        }
      />
      <Route
        path="/messages"
        element={
          <MainLayout>
            <MessagesPage />
          </MainLayout>
        }
      />
    </Routes>
  );
}

export default App;
