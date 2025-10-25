// src/layouts/MainLayout.tsx
import React, { ReactNode } from "react";
import Sidebar from "./Sidebar";

type Props = {
  children: ReactNode;
};

export default function MainLayout({ children }: Props) {
  return (
    <div className="flex min-h-screen bg-gray-100 overflow-x-hidden">
      <Sidebar />
      <main className="flex-1 p-4 md:ml-0">
        {children}
      </main>
    </div>
  );
}
