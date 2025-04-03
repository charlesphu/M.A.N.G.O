import { orbitron } from "../obitronStyle";
import Navbar from "../components/navbar";

export default function ContactPage() {
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
          flexGrow: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <form
          style={{
            width: "100%",
            maxWidth: "500px",
            display: "flex",
            flexDirection: "column",
            gap: "1.25rem",
          }}
        >
          <h1
            style={{
              fontSize: "2rem",
              textAlign: "center",
              marginBottom: "1rem",
            }}
          >
            Contact Us
          </h1>

          <input type="text" placeholder="Name" className="inputStyle" />
          <input type="email" placeholder="Email" className="inputStyle" />
          <input
            type="tel"
            placeholder="Phone Number (optional)"
            className="inputStyle"
          />
          <textarea
            placeholder="Concern / Comment"
            rows={4}
            className="inputStyle"
            style={{ resize: "none" }}
          />

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "1rem",
              marginTop: "1rem",
            }}
          >
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
  cursor: "pointer",
};

const attachIcon = {
  fontSize: "1.25rem",
  marginBottom: "0.25rem",
};

const attachLabel = {
  fontSize: "0.875rem",
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
  cursor: "pointer",
};

const sendIcon = {
  fontSize: "1.25rem",
  marginBottom: "0.25rem",
};

const sendLabel = {
  fontSize: "0.875rem",
};
