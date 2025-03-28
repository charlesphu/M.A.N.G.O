import Link from "next/link";
import { orbitron } from "../layout";

export default function TermsPage() {
  return (
    <div
      className={orbitron.className}
      style={{
        backgroundColor: "white",
        color: "black",
        minHeight: "100vh",
        padding: "1rem 2rem",
      }}
    >
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid #ccc",
          paddingBottom: "1rem",
          marginBottom: "2rem",
        }}
      >
        <Link href="/">
          <button
            style={{
              fontFamily: "inherit",
              fontSize: "1.5rem",
              padding: "0.5rem 1rem",
              border: "none",
              backgroundColor: "black",
              color: "white",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            mango
          </button>
        </Link>
        <div style={{ display: "flex", gap: "1rem" }}>
          <Link href="/auth">
            <button style={navBtnStyle}>Login</button>
          </Link>
          <Link href="/about">
            <button style={navBtnStyle}>About</button>
          </Link>
          <Link href="/contact">
            <button style={navBtnStyle}>Contact</button>
          </Link>
        </div>
      </header>

      <main style={{ maxWidth: "800px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
          Terms of Service
        </h1>
        <p>
          <strong>Last Updated:</strong>{" "}
          <span style={{ color: "#f97316" }}>March 27, 2025</span>
        </p>

        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing or using Mango, you agree to these Terms. If you don’t
          agree, do not use the service. These terms form a legal agreement
          between you and Helios LLC.
        </p>

        <h2>2. Eligibility</h2>
        <p>
          You must be at least 18 years old and a U.S. resident to use Mango.{" "}
          <span style={{ color: "#f97316" }}>
            This platform is strictly for property owners and managers
          </span>
          .
        </p>

        <h2>3. Account Registration</h2>
        <p>
          When you create a Mango account, you agree to provide accurate,
          up-to-date info and keep your login credentials secure.{" "}
          <span style={{ color: "#f97316" }}>
            You're responsible for all activity under your account
          </span>
          .
        </p>

        <h2>4. Permitted Use</h2>
        <p>
          You agree to use Mango only for lawful property management purposes.
          You may not attempt to exploit or interfere with the platform or other
          users.
        </p>

        <h2>5. Service Availability</h2>
        <p>
          We strive for 99% uptime but make no guarantees. We may limit or
          suspend services for maintenance, updates, or legal reasons.
        </p>

        <h2>6. Fees and Payments</h2>
        <p>
          Basic Mango features are free. Paid features will be clearly marked
          and billed accordingly.{" "}
          <span style={{ color: "#f97316" }}>
            You agree to any applicable charges and billing cycles if you
            subscribe to paid plans
          </span>
          .
        </p>

        <h2>7. Termination</h2>
        <p>
          We may suspend or terminate your access if you violate these terms or
          abuse the service. You can cancel your account anytime in the
          settings.
        </p>

        <h2>8. Data Responsibility</h2>
        <p>
          You are responsible for the legality and accuracy of any content you
          upload to Mango.{" "}
          <span style={{ color: "#f97316" }}>
            Do not upload sensitive tenant info without consent
          </span>
          .
        </p>

        <h2>9. Limitation of Liability</h2>
        <p>
          Mango is provided “as is.” Helios LLC is not liable for damages
          resulting from service interruption, data loss, or unauthorized
          access.
        </p>

        <h2>10. Modifications to Terms</h2>
        <p>
          We may update these terms at any time. We’ll notify you of major
          changes via email or in-app alert. Continued use means you accept the
          new terms.
        </p>

        <h2>11. Contact Us</h2>
        <p>
          Questions? Reach out to us at{" "}
          <span style={{ color: "#f97316" }}>heliosbayarea@gmail.com</span>.
        </p>
      </main>
    </div>
  );
}

const navBtnStyle = {
  fontFamily: "inherit",
  borderRadius: "6px",
  padding: "0.75rem 1.5rem",
  backgroundColor: "black",
  color: "white",
  border: "none",
  fontSize: "1rem",
  cursor: "pointer",
};
