"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Graphbox from "../components/graphbox"; // 👈 your new chart
import Navbar from "../components/navbar";
import metricbox from "../components/metricbox";


export default function dashboardpage() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (!firebaseUser) {
        router.push("/auth");
      } else {
        setUser(firebaseUser);
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, [router]);

  if (loading) {
    return <p style={{ padding: "2rem" }}>Loading your dashboard...</p>;
  }

  return (
    <div style={{ padding: "2rem" }}>
      <Navbar />
      <h1 style={{ marginBottom: "1rem" }}>Welcome back, {user.email} 👋</h1>

      {/* Robinhood-style graph */}
      <Graphbox />

      {/* Metrics */}
      <section
        style={{
          display: "flex",
          gap: "1rem",
          flexWrap: "wrap",
          marginBottom: "2rem",
        }}
      >
        {metricbox({ label: "Total ROI", value: "12.4%" })}
        {metricbox({ label: "Rental Income", value: "$2,300/mo" })}
        {metricbox({ label: "Maintenance Cost", value: "$250/mo" })}
      </section>

      {/* Property List */}
      <section>
        <h2>Your Properties</h2>
        <div
          style={{
            marginTop: "1rem",
            border: "1px solid #ccc",
            padding: "1rem",
            borderRadius: "8px",
          }}
        >
          <p>🏠 123 Main St — $1,200/mo — 8.5% ROI</p>
          <p>🏠 456 Oak Ave — $1,100/mo — 7.2% ROI</p>
        </div>
      </section>

      {/* Add Property */}
      <div style={{ marginTop: "2rem" }}>
        <button
          style={{
            padding: "0.75rem 1.5rem",
            border: "none",
            borderRadius: "8px",
            backgroundColor: "#f97316",
            color: "white",
            fontSize: "1rem",
            cursor: "pointer",
          }}
        >
          ➕ Add Property
        </button>
      </div>
    </div>
  );
}
