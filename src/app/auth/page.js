"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../components/navbar";
import { orbitron } from "../layout";
import { signUp, signIn, googleSignIn } from "../hooks/firebase/auth";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoginOrSignUp, setIsLoginOrSignUp] = useState("Login");
  const [signInOrSignUpText, setSignInOrSignUpText] = useState(
    "New User? Sign up here!"
  );
  const router = useRouter();

  useEffect(() => {
    setSignInOrSignUpText(
      isLoginOrSignUp === "Sign Up"
        ? "Already have an account? Login here!"
        : "New User? Sign up here!"
    );
  }, [isLoginOrSignUp]);

  const handleAuth = async () => {
    setError(null);
    try {
      if (isLoginOrSignUp === "Login") {
        await signIn(username, password);
      } else {
        await signUp(username, password);
      }
      router.push("/dashboard");
    } catch (err) {
      setError(err.message || "An unexpected error occurred.");
    }
  };

  const handleGoogle = async () => {
    setError(null);
    try {
      await googleSignIn();
      router.push("/dashboard");
    } catch (err) {
      setError(err.message || "Google sign-in failed.");
    }
  };

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
      <Navbar />
      <main
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexGrow: 1,
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "400px",
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
          }}
        >
          <h1 style={{ fontSize: "2rem", textAlign: "center" }}>
            {isLoginOrSignUp}
          </h1>

          <input
            type="text"
            placeholder="Username or Email"
            className="inputStyle"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="inputStyle"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && (
            <p style={{ color: "red", textAlign: "center", fontSize: "0.9rem" }}>
              {error}
            </p>
          )}

          <button className="submitStyle" onClick={handleAuth}>
            {isLoginOrSignUp}
          </button>

          <button
            onClick={handleGoogle}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
              fontFamily: "inherit",
              backgroundColor: "white",
              color: "black",
              border: "1px solid black",
              borderRadius: "8px",
              padding: "0.75rem 1.5rem",
              fontSize: "1rem",
              cursor: "pointer",
            }}
          >
            <img
              src="https://www.gstatic.com/images/branding/product/1x/gsa_512dp.png"
              alt="Google Logo"
              style={{ width: "20px", height: "20px" }}
            />
            Sign in with Google
          </button>

          <div style={{ textAlign: "center" }}>
            <span
              style={{
                color: "#f97316",
                textDecoration: "underline",
                cursor: "pointer",
              }}
              onClick={() =>
                setIsLoginOrSignUp(
                  isLoginOrSignUp === "Login" ? "Sign Up" : "Login"
                )
              }
            >
              {signInOrSignUpText}
            </span>
          </div>
        </div>
      </main>
    </div>
  );
}
