"use client";
import Link from "next/link";
import { orbitron } from "../layout";
import { useEffect, useState } from "react";
import { signUp, signIn, googleSignIn } from "../hooks/firebase/auth";
import Navbar from "../components/navbar";
export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoginOrSignUp, setIsLoginOrSignUp] = useState("Login");
  const [signInOrSignUpText, setSignInOrSignUpText] = useState(
    "New User? Sign up here!"
  );

  useEffect(() => {
    if (isLoginOrSignUp === "Sign Up") {
      setSignInOrSignUpText("Already have an account? Login here!");
    } else {
      setSignInOrSignUpText("New User? Sign up here!");
    }
  }, [isLoginOrSignUp]);

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
            style={inputStyle}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            style={inputStyle}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            style={submitStyle}
            onClick={() => {
              if (isLoginOrSignUp === "Login") {
                signIn(username, password);
              } else {
                signUp(username, password);
              }
            }}
          >
            {isLoginOrSignUp}
          </button>
          <button
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
            onClick={() => googleSignIn()}
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
                textAlign: "center",
              }}
              onClick={() => {
                if (isLoginOrSignUp == "Login") {
                  setIsLoginOrSignUp("Sign Up");
                } else {
                  setIsLoginOrSignUp("Login");
                }
              }}
            >
              {signInOrSignUpText}
            </span>
          </div>
        </div>
      </main>
    </div>
  );
}

const inputStyle = {
  fontFamily: "inherit",
  fontSize: "1rem",
  padding: "0.75rem 1rem",
  borderRadius: "8px",
  border: "1px solid black",
  backgroundColor: "transparent",
  color: "black",
  outline: "none",
};

const submitStyle = {
  fontFamily: "inherit",
  backgroundColor: "#f97316",
  color: "black",
  border: "none",
  borderRadius: "8px",
  padding: "0.75rem 1.5rem",
  fontSize: "1rem",
  cursor: "pointer",
};
