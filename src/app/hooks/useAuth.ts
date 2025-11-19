'use client';

import { useEffect, useState } from 'react';

export const useAuth = () => {
  const [isLogged, setIsLogged] = useState<boolean | null>(null);

  useEffect(() => {
    const checkSession = async () => {
      try {
        const res = await fetch('/api/auth-status', { cache: 'no-store' });
        const data = await res.json();

        setIsLogged(data.isAuthenticated);
      } catch (e) {
        setIsLogged(false);
      }
    };

    checkSession();
  }, []);

  return isLogged;
};
