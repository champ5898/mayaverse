"use client";
export default function PrivacyPolicy() {
  return (
    <main
      style={{
        maxWidth: 700,
        margin: "0 auto",
        padding: "48px 16px",
        fontFamily: "inherit",
      }}
    >
      <h1 style={{ marginBottom: "2rem", fontSize: "2.2rem", fontWeight: 800 }}>
        Privacy Policy
      </h1>
      <h2 style={{ marginTop: "2rem", marginBottom: "1rem" }}>Introduction</h2>
      <p style={{ marginBottom: "1.5rem" }}>
        Welcome to MayaVerse. We are committed to protecting your privacy. This
        Privacy Policy explains how we collect, use, and share your information.
      </p>
      <h2 style={{ marginTop: "2rem", marginBottom: "1rem" }}>
        Information We Collect
      </h2>
      <ul style={{ marginBottom: "1.5rem", paddingLeft: "1.2em" }}>
        <li style={{ marginBottom: "0.75rem" }}>
          <strong>Personal Information:</strong> Name, email address, and any
          other information you provide.
        </li>
        <li style={{ marginBottom: "0.75rem" }}>
          <strong>Usage Data:</strong> Information on how you use the app, such
          as interactions and preferences.
        </li>
      </ul>
      <h2 style={{ marginTop: "2rem", marginBottom: "1rem" }}>
        How We Use Your Information
      </h2>
      <ul style={{ marginBottom: "1.5rem", paddingLeft: "1.2em" }}>
        <li style={{ marginBottom: "0.75rem" }}>
          To create and manage your account.
        </li>
        <li style={{ marginBottom: "0.75rem" }}>
          To provide personalized movie recommendations.
        </li>
        <li style={{ marginBottom: "0.75rem" }}>
          To improve our services and user experience.
        </li>
      </ul>
      <h2 style={{ marginTop: "2rem", marginBottom: "1rem" }}>
        Sharing Your Information
      </h2>
      <ul style={{ marginBottom: "1.5rem", paddingLeft: "1.2em" }}>
        <li style={{ marginBottom: "0.75rem" }}>
          We do not share your personal information with third parties except to
          provide services you request or when required by law.
        </li>
      </ul>
      <h2 style={{ marginTop: "2rem", marginBottom: "1rem" }}>Data Security</h2>
      <ul style={{ marginBottom: "1.5rem", paddingLeft: "1.2em" }}>
        <li style={{ marginBottom: "0.75rem" }}>
          We use reasonable security measures to protect your data.
        </li>
      </ul>
      <h2 style={{ marginTop: "2rem", marginBottom: "1rem" }}>User Rights</h2>
      <ul style={{ marginBottom: "1.5rem", paddingLeft: "1.2em" }}>
        <li style={{ marginBottom: "0.75rem" }}>
          You may access, update, or delete your personal information by
          contacting us.
        </li>
      </ul>
      <h2 style={{ marginTop: "2rem", marginBottom: "1rem" }}>
        Changes to This Policy
      </h2>
      <ul style={{ marginBottom: "1.5rem", paddingLeft: "1.2em" }}>
        <li style={{ marginBottom: "0.75rem" }}>
          We may update this policy. Changes will be communicated via our app or
          email.
        </li>
      </ul>
      <h2 style={{ marginTop: "2rem", marginBottom: "1rem" }}>
        Contact Information
      </h2>
      <ul style={{ marginBottom: "1.5rem", paddingLeft: "1.2em" }}>
        <li style={{ marginBottom: "0.75rem" }}>
          For privacy-related inquiries, contact us at{" "}
          <a href="mailto:support@mayaverse.com">support@mayaverse.com</a>.
        </li>
      </ul>
    </main>
  );
}
