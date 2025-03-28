import Link from "next/link";
import { orbitron } from "../layout";
import Navbar from "../components/navbar";

export default function PrivacyPage() {
  return (
    <div
      className={orbitron.className}
      style={{
        backgroundColor: "white",
        color: "black",
        minHeight: "100vh",
        padding: "1rem 2rem",
      }}
    >
      <Navbar />

      <main style={{ maxWidth: "800px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
          Privacy Policy
        </h1>
        <p>
          <strong>Last Updated:</strong>{" "}
          <span style={{ color: "#f97316" }}>March 27, 2025</span>
        </p>
        <p>
          Welcome to Mango, a webapp designed to help landlords manage rent,
          utilities, mortgage costs, insurance, and other rental metrics. At
          Mango, <span style={{ color: "#f97316" }}>we value your privacy</span>{" "}
          and are committed to protecting your personal information.
        </p>

        <h2>1. Who We Are</h2>
        <p>
          Mango is operated by Helios LLC, based in California, USA. We provide
          tools exclusively for landlords. Contact:{" "}
          <span style={{ color: "#f97316" }}>heliosbayarea@gmail.com</span>
        </p>

        <h2>2. Information We Collect</h2>
        <ul>
          <li>
            <strong>Landlord Info:</strong> name, email, banking data, property
            addresses
          </li>
          <li>
            <strong>Tenant Info:</strong> payment details, proof of income
          </li>
          <li>
            <strong>Auto Data:</strong> login credentials, usage analytics (not
            sold)
          </li>
        </ul>

        <h2>3. How We Use Your Info</h2>
        <ul>
          <li>Provide and improve Mango features</li>
          <li>Process landlord-tenant transactions</li>
          <li>Communicate with you and improve service</li>
        </ul>
        <p style={{ color: "#f97316" }}>
          We don’t sell your data or use it for advertising. Your privacy is our
          priority.
        </p>

        <h2>4. Sharing Your Information</h2>
        <p>
          We currently do not share your info with any third parties. In the
          future, if we do:
        </p>
        <ul>
          <li>
            It will be{" "}
            <span style={{ color: "#f97316" }}>only what's necessary</span>
          </li>
          <li>
            We will ensure{" "}
            <span style={{ color: "#f97316" }}>strict privacy compliance</span>
          </li>
          <li>This policy will be updated accordingly</li>
        </ul>

        <h2>5. Data Storage & Protection</h2>
        <p>
          We store data on a test server for now. Plans for secure cloud storage
          are in the works.
        </p>
        <ul>
          <li>
            <span style={{ color: "#f97316" }}>All data is encrypted</span> in
            transit and at rest
          </li>
          <li>Retention aligned with usage or legal reasons</li>
        </ul>

        <h2>6. Cookies & Analytics</h2>
        <p>
          Cookies are used only to keep you signed in and collect anonymous
          usage stats.{" "}
          <span style={{ color: "#f97316" }}>No tracking across the web</span>.
        </p>

        <h2>7. California Rights</h2>
        <p>If you're in California, under the CCPA:</p>
        <ul>
          <li>Right to know, delete, or opt out (we don’t sell data anyway)</li>
          <li>
            Email{" "}
            <span style={{ color: "#f97316" }}>heliosbayarea@gmail.com</span> to
            request your rights
          </li>
        </ul>

        <h2>8. Managing Your Data</h2>
        <p>
          You can update or delete your info by contacting us. We’ll comply
          unless required to retain it legally.
        </p>

        <h2>9. U.S.-Only Service</h2>
        <p>Mango is only for landlords operating in the U.S.</p>

        <h2>10. Policy Changes</h2>
        <p>
          This policy may change as Mango evolves. We'll notify you via email or
          in-app notice.
        </p>

        <h2>11. Contact</h2>
        <p>
          Email us at{" "}
          <span style={{ color: "#f97316" }}>heliosbayarea@gmail.com</span> with
          any privacy questions.
        </p>
      </main>
    </div>
  );
}
