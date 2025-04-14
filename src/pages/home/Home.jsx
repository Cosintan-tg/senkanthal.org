import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar/Navbar";
import { FaSun, FaMoon } from "react-icons/fa";
import styles from "./Home.module.css";

function Home() {
  const [theme, setTheme] = useState("light");

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = savedTheme || (prefersDark ? "dark" : "light");
    setTheme(initialTheme);
    document.documentElement.setAttribute("data-theme", initialTheme);
  }, []);

  // Toggle theme and persist
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  // Button handlers
  const handleExploreCode = () => {
    window.open("https://github.com/senkanthal", "_blank", "noopener,noreferrer");
  };

  const handleStartContributing = () => {
    window.open("https://discord.gg/senkanthal", "_blank", "noopener,noreferrer");
  };

  return (
    <div className={styles.container}>
      <Navbar />
      <button
        className={styles.themeToggle}
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
      >
        {theme === "light" ? <FaMoon size={18} /> : <FaSun size={18} />}
      </button>
      <main className={styles.main}>
        <section className={styles.hero}>
          <h1>Senkanthal</h1>
          <p>Open-Source Tamil Innovation for All</p>
          <button className={styles.ctaButton} onClick={handleExploreCode}>
            Explore Our Code
          </button>
        </section>
        <section className={styles.features}>
          <h2>Our Open-Source Vision</h2>
          <div className={styles.featureGrid}>
            <div className={styles.feature}>
              <h3>Tamil Tech</h3>
              <p>Building open tools inspired by Tamil heritage.</p>
            </div>
            <div className={styles.feature}>
              <h3>Global Collaboration</h3>
              <p>Inviting Tamils worldwide to contribute and grow.</p>
            </div>
            <div className={styles.feature}>
              <h3>Cultural Code</h3>
              <p>Fusing Tamil traditions with open-source innovation.</p>
            </div>
          </div>
        </section>
        <section className={styles.connect}>
          <h2>Contribute to Senkanthal</h2>
          <p>Join our open-source community to shape Tamil excellence.</p>
          <button
            className={styles.ctaButton}
            onClick={handleStartContributing}
          >
            Start Contributing
          </button>
        </section>
      </main>
      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} Senkanthal. Openly Tamil, Openly Free.</p>
      </footer>
    </div>
  );
}

export default Home;