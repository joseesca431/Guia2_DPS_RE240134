"use client"
import React, { useState } from "react";
import LoginForm from '@/components/LoginForm';
import Welcome from '@/components/Welcome';
import styles from '@/app/page.module.css';

const Page = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className={styles.container}>
      {isAuthenticated ? (
        <Welcome></Welcome>
      ) : (
        <div className={styles.card}>
          <LoginForm setIsAuthenticated={setIsAuthenticated} />
        </div>
      )}
    </div>
  );
};

export default Page;

