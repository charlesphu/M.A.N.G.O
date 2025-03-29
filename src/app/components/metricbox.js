export default function Metricbox({ label, value }) {
    return (
      <div
        style={{
          flex: "1 1 30%",
          padding: "1rem",
          border: "1px solid #ccc",
          borderRadius: "8px",
          backgroundColor: "#f9f9f9",
        }}
      >
        <h3 style={{ marginBottom: "0.5rem" }}>{label}</h3>
        <p style={{ fontSize: "1.25rem", fontWeight: "bold" }}>{value}</p>
      </div>
    );
  }
  