import Link from "next/link";
import { orbitron } from "../layout";

export default function LoginPage() {
  return (
    <div className={orbitron.className} style={{ backgroundColor: "white", color: "black", minHeight: "100vh", padding: "1rem 2rem", display: "flex", flexDirection: "column" }}>
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #ccc", paddingBottom: "1rem", marginBottom: "2rem" }}>
        <Link href="/">
          <button style={{ fontFamily: "inherit", fontSize: "1.5rem", padding: "0.5rem 1rem", border: "none", backgroundColor: "black", color: "white", borderRadius: "6px", cursor: "pointer" }}>mango</button>
        </Link>
        <div style={{ display: "flex", gap: "1rem" }}>
          <Link href="/about"><button style={navBtnStyle}>About</button></Link>
          <Link href="/contact"><button style={navBtnStyle}>Contact</button></Link>
          <Link href="/privacy"><button style={navBtnStyle}>Privacy</button></Link>
        </div>
      </header>

      <main style={{ display: "flex", justifyContent: "center", alignItems: "center", flexGrow: 1 }}>
        <div style={{ width: "100%", maxWidth: "400px", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <h1 style={{ fontSize: "2rem", textAlign: "center" }}>Login</h1>

          <input
            type="text"
            placeholder="Username or Email"
            style={inputStyle}
            disabled
          />

          <input
            type="password"
            placeholder="Password"
            style={inputStyle}
            disabled
          />

          <button style={submitStyle} disabled>Login</button>
        </div>
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
  cursor: "pointer"
};

const inputStyle = {
  fontFamily: "inherit",
  fontSize: "1rem",
  padding: "0.75rem 1rem",
  borderRadius: "8px",
  border: "1px solid black",
  backgroundColor: "transparent",
  color: "black",
  outline: "none"
};

const submitStyle = {
  fontFamily: "inherit",
  backgroundColor: "#f97316",
  color: "black",
  border: "none",
  borderRadius: "8px",
  padding: "0.75rem 1.5rem",
  fontSize: "1rem",
  cursor: "pointer"
};