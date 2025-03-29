"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getAuth, signOut } from "firebase/auth";

export default function Navbar() {
  const pathname = usePathname();
  const isDashboard = pathname.startsWith("/dashboard");

  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      window.location.href = "/auth";
    });
  };

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid #ccc",
        padding: "1rem 0",
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
        {isDashboard ? (
          <button className="navBtnStyle" onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <Link href="/auth">
            <button className="navBtnStyle">Login</button>
          </Link>
        )}
        <Link href="/contact">
          <button className="navBtnStyle">Contact</button>
        </Link>
      </div>
    </header>
  );
}
