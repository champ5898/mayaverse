"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";

export default function Home() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterMsg, setNewsletterMsg] = useState("");

  const handleNewsletterSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    setNewsletterMsg("");
    const res = await fetch("/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: newsletterEmail }),
    });
    const data = await res.json();
    if (data.success) {
      setNewsletterMsg("Subscribed successfully!");
      setNewsletterEmail("");
    } else {
      setNewsletterMsg(data.error || "Subscription failed.");
      console.log(data.error);
    }
  };

  return (
    <div className={styles.page}>
      {/* Header with Logo */}
      <header className={styles.header}>
        <Image
          src="/mayaverse-logo.png"
          alt="MayaVerse Logo"
          width={56}
          height={56}
          className={styles.headerLogo}
          priority
        />
      </header>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <h1 className={styles.heroTitle}>MayaVerse</h1>
        <p className={styles.heroTagline}>Discover Your Next Favorite Film</p>
        <a href="#signup" className={styles.ctaButton}>
          Get Started
        </a>
      </section>

      {/* Features Highlight */}
      <section className={styles.featuresSection}>
        <h2>Why MayaVerse?</h2>
        <div className={styles.featuresGrid}>
          <div className={styles.featureCard}>
            <h3>Personalized Recommendations</h3>
            <p>
              Our AI tailors movie suggestions just for you, based on your
              unique tastes.
            </p>
          </div>
          <div className={styles.featureCard}>
            <h3>User-Friendly Interface</h3>
            <p>
              Enjoy a seamless and intuitive experience from the very first
              click.
            </p>
          </div>
          <div className={styles.featureCard}>
            <h3>Extensive Movie Database</h3>
            <p>
              Explore a vast collection of movies, from timeless classics to the
              latest releases.
            </p>
          </div>
          <div className={styles.featureCard}>
            <h3>Social Sharing</h3>
            <p>
              Share your favorite picks and connect with friends and fellow
              movie lovers.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className={styles.howItWorksSection}>
        <h2>How It Works</h2>
        <ol className={styles.howItWorksList}>
          <li>Sign Up</li>
          <li>Select Preferences</li>
          <li>Get Personalized Recommendations</li>
          <li>Watch & Enjoy!</li>
        </ol>
      </section>

      {/* Testimonials/Reviews */}
      <section className={styles.testimonialsSection}>
        <h2>What Our Users Say</h2>
        <div className={styles.testimonialsGrid}>
          <blockquote>
            <p>
              &#8220;MayaVerse helped me find movies I never would have
              discovered on my own!&#8221;
            </p>
            <footer>&#8212; Alex R.</footer>
          </blockquote>
          <blockquote>
            <p>
              &#8220;The recommendations are spot on. The interface is so easy
              to use!&#8221;
            </p>
            <footer>&#8212; Priya S.</footer>
          </blockquote>
        </div>
      </section>

      {/* Screenshots or Demo Video */}
      <section className={styles.screenshotsSection}>
        <h2>See MayaVerse in Action</h2>
        <div className={styles.screenshotsGrid}>
          <Image
            src="/window.svg"
            alt="App Screenshot"
            width={220}
            height={120}
          />
          <Image
            src="/globe.svg"
            alt="App Screenshot"
            width={220}
            height={120}
          />
        </div>
      </section>

      {/* About Us */}
      <section className={styles.aboutSection}>
        <h2>About Us</h2>
        <p>
          We are a passionate team of movie buffs and tech enthusiasts dedicated
          to making movie discovery fun and effortless. <br />
          <strong>Our Mission:</strong> To connect people with stories
          they&#39;ll love.
        </p>
      </section>

      {/* Newsletter Sign-Up */}
      <section className={styles.newsletterSection} id="signup">
        <h2>Stay Updated</h2>
        <form
          className={styles.newsletterForm}
          onSubmit={handleNewsletterSubmit}
        >
          <input
            type="email"
            placeholder="Your email address"
            required
            className={styles.newsletterInput}
            value={newsletterEmail}
            onChange={(e) => setNewsletterEmail(e.target.value)}
          />
          <button type="submit" className={styles.ctaButton}>
            Subscribe
          </button>
        </form>
        {newsletterMsg && <p>{newsletterMsg}</p>}
      </section>

      {/* FAQ Section */}
      <section className={styles.faqSection}>
        <h2>Frequently Asked Questions</h2>
        <details>
          <summary>Is MayaVerse free to use?</summary>
          <p>Yes! MayaVerse is free for all users.</p>
        </details>
        <details>
          <summary>How are recommendations generated?</summary>
          <p>
            We use advanced AI algorithms to analyze your preferences and
            viewing history.
          </p>
        </details>
        <details>
          <summary>Can I share my recommendations?</summary>
          <p>
            Absolutely! Share your favorite movies with friends via social
            media.
          </p>
        </details>
      </section>

      {/* Contact Information */}
      <section className={styles.contactSection}>
        <h2>Contact Us</h2>
        <p>
          Questions or feedback? Email us at{" "}
          <a href="mailto:support@mayaverse.com">support@mayaverse.com</a>
        </p>
      </section>

      {/* Social Media Links */}
      <section className={styles.socialSection}>
        <h2>Connect with Us</h2>
        <div className={styles.socialLinks}>
          <a
            href="https://x.com/verse_maya"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            🐦
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            📸
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            📘
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div>
          <a href="/privacy-policy" className={styles.footerLink}>
            Privacy Policy
          </a>{" "}
          |{" "}
          <a href="/terms-of-service" className={styles.footerLink}>
            Terms of Service
          </a>
        </div>
        <div>© {new Date().getFullYear()} MayaVerse. All rights reserved.</div>
      </footer>
    </div>
  );
}
