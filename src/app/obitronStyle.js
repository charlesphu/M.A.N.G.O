import "./globals.css";
import { Orbitron } from "next/font/google";

export const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["600"],
});

// export const metadata = {
//   title: "MANGO",
//   description: "Property metric manager",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={orbitron.className}>{children}</body>
//     </html>
//   );
// }
