import Link from "next/link";
export default function Navbar() {
  return (
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
        <Link href="/about">
          <button className="navBtnStyle">About</button>
        </Link>
        <Link href="/auth">
          <button className="navBtnStyle">Login</button>
        </Link>
        <Link href="/privacy">
          <button className="navBtnStyle">Privacy</button>
        </Link>
      </div>
    </header>
  );
}
