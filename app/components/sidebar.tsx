"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "Teams", href: "/teams" },
    { label: "Settings", href: "/settings" },
  ];

  return (
    <aside className="fixed left-0 top-0 flex h-full w-64 flex-col border-r border-gray-800 bg-black text-white">
      <div className="flex min-h-[64px] items-center px-6">
        <div className="text-2xl font-bold tracking-tight">EdList</div>
      </div>

      <nav className="mt-4 flex flex-1 flex-col gap-2 px-4">
        {navItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
                isActive
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-900 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;