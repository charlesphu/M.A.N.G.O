import Link from "next/link";
import { orbitron } from "../layout";

export default function AboutPage() {
  return (
    <div
      className={orbitron.className}
      style={{
        backgroundColor: "white",
        color: "black",
        minHeight: "100vh",
        padding: "1rem 2rem",
        display: "flex",
        flexDirection: "column",
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
          <Link href="/contact">
            <button style={navBtnStyle}>Contact</button>
          </Link>
          <Link href="/privacy">
            <button style={navBtnStyle}>Privacy</button>
          </Link>
        </div>
      </header>

      <main style={{ maxWidth: "800px", margin: "0 auto", textAlign: "left" }}>
        <h1
          style={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            marginBottom: "1rem",
          }}
        >
          About Mango
        </h1>

        <p style={{ fontSize: "1.125rem", marginBottom: "1.5rem" }}>
          <strong>Mango</strong> is your property metrics — simplified. Designed
          for anyone managing a home, renting out rooms, or juggling multiple
          properties, Mango replaces the clunky spreadsheets and complicated
          financial tracking tools with one clean, visual dashboard.
        </p>

        <p style={{ fontSize: "1.125rem", marginBottom: "1.5rem" }}>
          The idea for Mango was born from a real-life headache. When my dad
          left me and my brother in charge of a shared home in South San
          Francisco, I ended up managing most of the operations — from
          collecting rent to calculating how much it cost to run the place every
          month. Mortgage, insurance, utilities... it added up fast, and
          searching through statements and spreadsheets became a monthly
          frustration.
        </p>

        <p style={{ fontSize: "1.125rem", marginBottom: "1.5rem" }}>
          So I thought: what if tracking your property's performance was as easy
          as checking a stock graph on Robinhood? Are we green this month, or
          red? And by how much? That’s it.
        </p>

        <p style={{ fontSize: "1.125rem", marginBottom: "1.5rem" }}>
          Mango was built on that simple, frustrating question — and it’s here
          to give others the tool I wish I had. Friendly, focused, and genuinely
          useful. Mango exists now. And it’s only getting better.
        </p>

        <p style={{ fontSize: "1rem", color: "#888", marginTop: "2rem" }}>
          Built with heart. Inspired by necessity.
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
