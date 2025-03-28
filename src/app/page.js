import Link from "next/link";
import { orbitron } from "./layout";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <div
      className={orbitron.className}
      style={{
        backgroundColor: "white",
        minHeight: "100vh",
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div>
        <Navbar />

        <main
          style={{
            textAlign: "left",
            maxWidth: "800px",
            marginLeft: "1rem",
            marginTop: "3rem",
          }}
        >
          <p
            style={{
              color: "#f97316",
              fontWeight: "600",
              fontSize: "1rem",
              marginBottom: "1rem",
            }}
          >
            Property Metrics Software
          </p>
          <h1
            style={{
              fontSize: "2.75rem",
              fontWeight: "800",
              color: "#171717",
              marginBottom: "1.25rem",
              lineHeight: "1.2",
            }}
          >
            Your property metrics, simplified.
          </h1>
          <p
            style={{
              fontSize: "1.125rem",
              color: "#555",
              marginBottom: "2rem",
            }}
          >
            Manage, track, and optimize your properties' financial data — all in
            one sleek dashboard.
          </p>
          <button
            style={{
              fontFamily: "inherit",
              backgroundColor: "black",
              color: "white",
              border: "none",
              borderRadius: "8px",
              padding: "0.75rem 1.5rem",
              fontSize: "1rem",
              cursor: "pointer",
            }}
          >
            Try it now
          </button>
        </main>
      </div>

      <footer
        style={{
          borderTop: "1px solid #ccc",
          padding: "2rem 1rem",
          marginTop: "4rem",
          textAlign: "center",
          fontSize: "0.875rem",
          color: "#666",
        }}
      >
        <div style={{ marginBottom: "1rem" }}>
          <Link href="/" style={{ marginRight: "1rem" }}>
            Home
          </Link>
          <Link href="/about" style={{ marginRight: "1rem" }}>
            About
          </Link>
          <Link href="/contact" style={{ marginRight: "1rem" }}>
            Contact
          </Link>
          <Link href="/auth">Login</Link>
        </div>
        <div style={{ marginBottom: "0.5rem" }}>
          <Link href="/terms" style={{ marginRight: "1rem" }}>
            Terms
          </Link>
          <Link href="/privacy">Privacy</Link>
        </div>
        <div>© {new Date().getFullYear()} MANGO. All rights reserved.</div>
      </footer>
    </div>
  );
}
