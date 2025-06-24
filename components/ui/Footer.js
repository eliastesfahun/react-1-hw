import React from "react";
import Link from "next/link";
import styles from "./Footer.module.css"; // Import the CSS module

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContent}>
        {/* Company Info */}
        <div className={styles.companyInfo}>
          <h3 className={styles.companyTitle}>MyCompany, Inc.</h3>
          <p className={styles.companyText}>
            123 React Lane, Component City, RC 12345
          </p>
          <p className={styles.companyText}>Email: info@mycompany.com</p>
          <p className={styles.companyText}>Phone: (123) 456-7890</p>
        </div>

        {/* Navigation Links */}
        <nav className={styles.navbarNav}>
          <ul className={styles.navList}>
            <li>
              <Link href="/" className={styles.navLink}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about_us" className={styles.navLink}>
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className={styles.navLink}>
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className={styles.navLink}>
                Contact
              </Link>
            </li>
            {/* TASK - React 1 week 1 */}
            {/* Add a new list item for LINKEDIN */}
            <li>
              <a
                href="https://www.linkedin.com/company/hackyourfuturebelgium/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.navLink}
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </nav>

        {/* Social Media / Copyright */}
        <div className={styles.socialCopyright}>
          <p>
            &copy; {new Date().getFullYear()} MyCompany, Inc. All rights
            reserved.
          </p>
          <div className={styles.socialLinks}>
            {/* Replace with actual social media icons/links if available */}
            <a href="#" className={styles.socialLink}>
              Facebook
            </a>
            <a href="#" className={styles.socialLink}>
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
