'use client';
import { useEffect } from 'react';
import { logout } from './actions';

const LogoutPage = () => {
  useEffect(() => {
    logout();
  }, []);

  return null;
};

export default LogoutPage;
