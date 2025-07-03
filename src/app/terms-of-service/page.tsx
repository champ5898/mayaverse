"use client";
export default function TermsOfService() {
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
        Terms of Service
      </h1>
      <h2 style={{ marginTop: "2rem", marginBottom: "1rem" }}>
        Acceptance of Terms
      </h2>
      <p style={{ marginBottom: "1.5rem" }}>
        By using MayaVerse, you agree to these terms.
      </p>
      <h2 style={{ marginTop: "2rem", marginBottom: "1rem" }}>
        Description of Service
      </h2>
      <p style={{ marginBottom: "1.5rem" }}>
        MayaVerse provides personalized movie recommendations based on your
        preferences.
      </p>
      <h2 style={{ marginTop: "2rem", marginBottom: "1rem" }}>
        User Responsibilities
      </h2>
      <ul style={{ marginBottom: "1.5rem", paddingLeft: "1.2em" }}>
        <li style={{ marginBottom: "0.75rem" }}>
          Provide accurate information.
        </li>
        <li style={{ marginBottom: "0.75rem" }}>
          Use the app in compliance with applicable laws.
        </li>
      </ul>
      <h2 style={{ marginTop: "2rem", marginBottom: "1rem" }}>
        Prohibited Activities
      </h2>
      <ul style={{ marginBottom: "1.5rem", paddingLeft: "1.2em" }}>
        <li style={{ marginBottom: "0.75rem" }}>
          No reverse engineering or misuse of the app.
        </li>
        <li style={{ marginBottom: "0.75rem" }}>
          Do not engage in harmful or illegal activities.
        </li>
      </ul>
      <h2 style={{ marginTop: "2rem", marginBottom: "1rem" }}>
        Intellectual Property
      </h2>
      <ul style={{ marginBottom: "1.5rem", paddingLeft: "1.2em" }}>
        <li style={{ marginBottom: "0.75rem" }}>
          All app content is owned by MayaVerse. Users retain rights to content
          they submit.
        </li>
      </ul>
      <h2 style={{ marginTop: "2rem", marginBottom: "1rem" }}>Termination</h2>
      <ul style={{ marginBottom: "1.5rem", paddingLeft: "1.2em" }}>
        <li style={{ marginBottom: "0.75rem" }}>
          We may suspend or terminate accounts that violate our terms.
        </li>
      </ul>
      <h2 style={{ marginTop: "2rem", marginBottom: "1rem" }}>
        Liability Limitations
      </h2>
      <ul style={{ marginBottom: "1.5rem", paddingLeft: "1.2em" }}>
        <li style={{ marginBottom: "0.75rem" }}>
          We are not liable for any indirect, incidental, or consequential
          damages arising from your use of the app.
        </li>
      </ul>
      <h2 style={{ marginTop: "2rem", marginBottom: "1rem" }}>
        Changes to the Terms
      </h2>
      <ul style={{ marginBottom: "1.5rem", paddingLeft: "1.2em" }}>
        <li style={{ marginBottom: "0.75rem" }}>
          We may update these terms. We will notify users of major changes.
        </li>
      </ul>
      <h2 style={{ marginTop: "2rem", marginBottom: "1rem" }}>
        Contact Information
      </h2>
      <ul style={{ marginBottom: "1.5rem", paddingLeft: "1.2em" }}>
        <li style={{ marginBottom: "0.75rem" }}>
          For questions about these terms, contact us at{" "}
          <a href="mailto:support@mayaverse.com">support@mayaverse.com</a>.
        </li>
      </ul>
    </main>
  );
}
