'use client';

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "../components/ui/button";

export default function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const pathname = usePathname();

  const toggleTheme = () => setIsDarkMode(!isDarkMode);
  const handleAuth = () => setIsAuthenticated(!isAuthenticated);

  return (
    <nav className={`p-4 flex justify-between items-center shadow-md ${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}>
      <div className="flex gap-6">
        <Link href="/" className={pathname === "/" ? "font-bold" : ""}>Home</Link>
        <Link href="/about" className={pathname === "/about" ? "font-bold" : ""}>About</Link>
      </div>
      <div className="flex gap-4">
        {/* <Button onClick={toggleTheme} className="px-4 py-2 border rounded-md">
          {isDarkMode ? "🌙 Dark" : "☀️ Light"}
        </Button> */}
        {isAuthenticated ? (
          <Button onClick={handleAuth} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md">
            Logout
          </Button>
        ) : (
          <Link href="/login">
            <Button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
              Login
            </Button>
          </Link>
        )}
      </div>
    </nav>
  );
}
