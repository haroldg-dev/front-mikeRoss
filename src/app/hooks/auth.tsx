'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Replace this with your actual authentication check logic
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    } else {
      console.log("token null")
      setIsAuthenticated(false);
      router.push('/');
    }
  }, [router]);

  return isAuthenticated;
}