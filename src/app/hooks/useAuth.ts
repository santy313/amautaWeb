'use client';

import { handleGetAccessToken } from '@/components/auth/logto';
import { useEffect, useState } from 'react';


export const useAuth = () => {
  const [isLogged, setIsLogged] = useState<boolean | null>(null);
  useEffect(() => {
    const checkSession = async () => {
      try {
        const token = await handleGetAccessToken();
        setIsLogged(!!token); // true si hay token
      } catch {
        setIsLogged(false);
      }
    };

    checkSession();
  }, []);
  
  return isLogged;
};
