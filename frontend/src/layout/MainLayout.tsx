// src/layouts/MainLayout.tsx
import React, { ReactNode } from "react";
import Sidebar from "./Sidebar";

type Props = {
  children: ReactNode; // this will be FeedPage, ProfilePage, or MessagesPage
};

export default function MainLayout({ children }: Props) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <main className="flex-1 p-4">
        {children}
      </main>
    </div>
  );
}
