import { useState, useEffect } from 'react';

// Simple password for admin access - you can change this
const ADMIN_PASSWORD = 'cjai2025';

export const useAdmin = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if admin session exists on component mount
    const checkAdminSession = () => {
      try {
        const adminSession = localStorage.getItem('cjai-admin-session');
        if (adminSession) {
          const sessionData = JSON.parse(adminSession);
          // Check if session is less than 24 hours old
          if (Date.now() - sessionData.timestamp < 24 * 60 * 60 * 1000) {
            setIsAdmin(true);
          } else {
            // Session expired, clean up
            localStorage.removeItem('cjai-admin-session');
          }
        }
      } catch (error) {
        console.error('Error checking admin session:', error);
        localStorage.removeItem('cjai-admin-session');
      } finally {
        setIsLoading(false);
      }
    };

    checkAdminSession();
  }, []);

  const login = (password) => {
    if (password === ADMIN_PASSWORD) {
      setIsAdmin(true);
      try {
        localStorage.setItem('cjai-admin-session', JSON.stringify({
          timestamp: Date.now()
        }));
        return { success: true };
      } catch (error) {
        console.error('Error saving admin session:', error);
        return { success: false, error: 'Failed to save session' };
      }
    }
    return { success: false, error: 'Invalid password' };
  };

  const logout = () => {
    setIsAdmin(false);
    try {
      localStorage.removeItem('cjai-admin-session');
    } catch (error) {
      console.error('Error removing admin session:', error);
    }
  };

  const checkPassword = (password) => {
    return password === ADMIN_PASSWORD;
  };

  return { 
    isAdmin, 
    isLoading, 
    login, 
    logout, 
    checkPassword 
  };
};