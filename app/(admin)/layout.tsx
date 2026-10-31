"use client";

import "../globals.css";
import { ReactNode, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/hooks/auth";

type NavItem = {
  label: string;
  href: string;
  icon: ReactNode;
};

const navItems: NavItem[] = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 576 512"
        className="w-4 h-4"
      >
        <path
          fill="currentColor"
          d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"
        />
      </svg>
    ),
  },
  {
    label: "Blogs",
    href: "/dashboard/blogs",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 640 640"
        className="w-4 h-4"
      >
        <path
          fill="currentColor"
          d="M542.6 286.7C540.8 278.7 535.8 271.3 530.1 268.2C528.3 267.2 517.1 266 505.1 265.5C485 264.6 482.8 264.2 476.4 260.5C466.3 254.6 463.6 248.2 463.5 231C463.4 198 449.7 167.3 422.6 139.7C403.3 120 381.7 106.7 357.1 99.2C351.2 97.4 338 96.8 293.8 96.3C224.4 95.5 209 96.9 185.4 106.3C141.9 123.5 110.7 160.1 99.3 206.9C97.2 215.7 96.7 229.8 96.2 310.8C95.6 412.3 96.3 427.2 102.6 447.3C118.2 496.9 162.5 533.6 207 541.6C221.8 544.3 404.3 544.9 423 542.4C455.5 538 481 524.9 504.9 500.5C522.2 482.8 533 463.7 540.1 438.4C545 420.8 544.6 295.6 542.6 286.7zM220.5 223.1C228.3 215.2 230.5 214.9 279.3 214.9C323.2 214.9 324.7 215 331.1 218.3C340.4 223 344.5 229.6 344.5 240.2C344.5 249.7 340.7 256.4 332.2 261.8C327.6 264.7 324.9 264.9 281.9 265.1C255.4 265.3 234.2 264.7 231.1 263.9C214.5 259.2 208.3 235.4 220.5 223.1zM412.3 422.9L397.4 425.3L319.9 426.2C251.8 427 232.6 425.8 229 424.2C221.9 421.1 215.2 412.5 214.1 404.8C213 397.5 216.7 387.5 222.3 382.4C229.4 376 232.5 375.8 319.6 375.7C409.2 375.6 408.7 375.6 417.2 383.5C429.3 394.8 426.7 414.7 412.3 422.9z"
        />
      </svg>
    ),
  },
  {
    label: "Socials",
    href: "/dashboard/socials",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 640 640"
        className="w-4 h-4"
      >
        <path
          fill="currentColor"
          d="M64 416L64 192C64 139 107 96 160 96L480 96C533 96 576 139 576 192L576 416C576 469 533 512 480 512L360 512C354.8 512 349.8 513.7 345.6 516.8L230.4 603.2C226.2 606.3 221.2 608 216 608C202.7 608 192 597.3 192 584L192 512L160 512C107 512 64 469 64 416z"
        />
      </svg>
    ),
  },
];

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const { user, logout } = useAuth({ middleware: "auth" });
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <html lang="en" className="w-full h-full overflow-x-hidden">
      <body>
        <div className="flex min-h-dvh w-full bg-gray-50">
          {/* Overlay untuk mobile saat sidebar terbuka */}
          <div
            onClick={() => setIsSidebarOpen(false)}
            className={`fixed inset-0 bg-black/40 z-30 md:hidden transition-opacity duration-300 ${
              isSidebarOpen
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }`}
          />

          {/* Sidebar */}
          <aside
            className={`fixed md:static top-0 left-0 h-dvh w-64 bg-white border-r border-gray-200 z-40 flex flex-col transition-transform duration-300 ${
              isSidebarOpen
                ? "translate-x-0"
                : "-translate-x-full md:translate-x-0"
            }`}
          >
            {/* Header sidebar */}
            <div className="h-16 flex items-center px-6 border-b border-gray-200">
              <span className="font-bold text-lg text-gray-900">Dashboard</span>
            </div>

            {/* Nav items */}
            <nav className="flex-1 overflow-y-auto py-4 px-3 flex flex-col gap-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsSidebarOpen(false)}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-gray-900 text-white"
                        : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                    }`}
                  >
                    {item.icon}
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* User info + tombol logout */}
            <div className="border-t border-gray-200 p-4">
              {user && (
                <div className="mb-3 px-1">
                  <p className="text-sm font-semibold text-gray-900 truncate">
                    {user.name}
                  </p>
                  <p className="text-xs text-gray-500 truncate">{user.email}</p>
                </div>
              )}

              <button
                onClick={logout}
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-4 h-4"
                >
                  <path
                    fill="currentColor"
                    d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-70.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-70.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"
                  />
                </svg>
                Logout
              </button>
            </div>
          </aside>

          {/* Konten utama */}
          <div className="flex-1 flex flex-col min-w-0">
            {/* Topbar mobile — tombol buka sidebar */}
            <header className="md:hidden h-16 flex items-center px-4 bg-white border-b border-gray-200">
              <button
                onClick={() => setIsSidebarOpen(true)}
                className="p-2 -ml-2 rounded-lg hover:bg-gray-100"
                aria-label="Buka menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="w-5 h-5"
                >
                  <path
                    fill="currentColor"
                    d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"
                  />
                </svg>
              </button>
              <span className="ml-3 font-bold text-gray-900">Dashboard</span>
            </header>

            <main className="flex-1 p-6 md:p-8 overflow-y-auto">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
