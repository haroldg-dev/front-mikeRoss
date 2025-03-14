'use client';

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useAuthContext } from "../context/authContext";
import { Button } from "../components/ui/button";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { isAuthenticated, setIsAuthenticated } = useAuthContext();

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove the access token
    setIsAuthenticated(false); // Update the shared state
    router.push('/login'); // Redirect to the login page
  };

  return (
    <nav className="p-4 flex justify-between items-center shadow-md bg-gray-900 text-white">
      <div className="flex gap-6">
        <Link href="/" className={pathname === "/" ? "font-bold" : ""}>Home</Link>
        <Link href="/about" className={pathname === "/about" ? "font-bold" : ""}>About</Link>
      </div>
      <div className="flex gap-4">
        {isAuthenticated ? (
          <Button onClick={handleLogout} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md">
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