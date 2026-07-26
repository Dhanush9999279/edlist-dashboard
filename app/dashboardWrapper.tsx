"use client";

import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";

const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen w-full bg-black text-white">
      <Sidebar />
      <main className="flex w-full flex-col md:pl-64">
        <Navbar />
        <div className="p-6">{children}</div>
      </main>
    </div>
  );
};

export default DashboardWrapper;