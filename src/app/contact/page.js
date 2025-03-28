import Link from "next/link";
import { orbitron } from "../layout";

export default function ContactPage() {
  return (
    <div className={orbitron.className} style={{ backgroundColor: "white", color: "black", minHeight: "100vh", padding: "1rem 2rem", display: "flex", flexDirection: "column" }}>
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #ccc", paddingBottom: "1rem", marginBottom: "2rem" }}>
        <Link href="/">
          <button style={{ fontFamily: "inherit", fontSize: "1.5rem", padding: "0.5rem 1rem", border: "none", backgroundColor: "black", color: "white", borderRadius: "6px", cursor: "pointer" }}>mango</button>
        </Link>
        <div style={{ display: "flex", gap: "1rem" }}>
          <Link href="/about"><button style={navBtnStyle}>About</button></Link>
          <Link href="/login"><button style={navBtnStyle}>Login</button></Link>
          <Link href="/privacy"><button style={navBtnStyle}>Privacy</button></Link>
        </div>
      </header>

      <main style={{ flexGrow: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>
        <form style={{ width: "100%", maxWidth: "500px", display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          <h1 style={{ fontSize: "2rem", textAlign: "center", marginBottom: "1rem" }}>Contact Us</h1>

          <input type="text" placeholder="Name" style={inputStyle} />
          <input type="email" placeholder="Email" style={inputStyle} />
          <input type="tel" placeholder="Phone Number (optional)" style={inputStyle} />
          <textarea placeholder="Concern / Comment" rows={4} style={{ ...inputStyle, resize: "none" }} />

          <div style={{ display: "flex", justifyContent: "space-between", gap: "1rem", marginTop: "1rem" }}>
            <div style={attachBox}>
              <span style={attachIcon}>🔗</span>
              <span style={attachLabel}>Add Attachment</span>
            </div>
            <div style={sendBox}>
              <span style={sendIcon}>📨</span>
              <span style={sendLabel}>Send</span>
            </div>
          </div>
        </form>
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

const attachBox = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "8px",
  backgroundColor: "black",
  color: "white",
  padding: "0.75rem",
  cursor: "pointer"
};

const attachIcon = {
  fontSize: "1.25rem",
  marginBottom: "0.25rem"
};

const attachLabel = {
  fontSize: "0.875rem"
};

const sendBox = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "8px",
  backgroundColor: "#f97316",
  color: "black",
  padding: "0.75rem",
  cursor: "pointer"
};

const sendIcon = {
  fontSize: "1.25rem",
  marginBottom: "0.25rem"
};

const sendLabel = {
  fontSize: "0.875rem"
};
