import React from "react";

import { AiFillGitlab } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaBitcoin } from "react-icons/fa6";
import { AiFillGithub } from "react-icons/ai";
import { MdOutlineAlternateEmail } from "react-icons/md";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={`${styles.containerHelper}`}>
      <nav className={styles.styledNavbar}>
        <a
          href="https://linkedin.com/company/senkanthal"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.styledLink}
        >
          <FaLinkedinIn size={25} />
        </a>
        <a
          href="https://gitlab.com/senkanthal"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.styledLink}
        >
          <AiFillGitlab size={25} />
        </a>
        <a
          href="https://github.com/senkanthal"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.styledLink}
        >
          <AiFillGithub size={25} />
        </a>
        <a
          href="/crypto"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.styledLink}
        >
          <FaBitcoin size={25} />
        </a>
        <a
          href="/contact"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.styledLink}
        >
          <MdOutlineAlternateEmail size={25} />
        </a>
      </nav>
    </div>
  );
};

export default Navbar;