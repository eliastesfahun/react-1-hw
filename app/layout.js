// import { Inter } from "next/font/google";
// import "./globals.css";

// import { Navbar } from "@/components/ui/Navbar";
// import { Footer } from "@/components/ui/Footer";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Galactica",
//   description: "Your space travel agency",
// };

// export const RootLayout = ({ children }) => {
//   return (
//     <html lang="en">
//       <body className={inter.className}>
//         <Navbar />
//         {children}
//         {/* TASK - React 1 week 1 */}
//         {/* Import and use the Footer component here */}
//         {/* Footer found in the ui/Footer.js folder */}
//       </body>
//     </html>
//   );
// }

// export default RootLayout;

"use client"; // This directive marks the component as a Client Component

import "./globals.css";
import Footer from "@/components/ui/Footer"; // Import the Footer component
import Navbar from "@/components/ui/Navbar"; // Import the Navbar component

// Removed: export const metadata = { ... }
// Metadata should be defined in a Server Component (e.g., page.js files)
// when the layout is a Client Component.

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Link for Inter font from Google Fonts */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        />
        {/* Tailwind CSS CDN, if not using PostCSS setup. Ensure it's correctly configured for your project. */}
        <script src="https://cdn.tailwindcss.com"></script>
        {/* Apply Inter font globally */}
        <style jsx global>{`
          body {
            font-family: "Inter", sans-serif;
          }
        `}</style>
      </head>
      <body className="flex flex-col min-h-screen bg-gray-50">
        <Navbar /> {/* Render the Navbar component */}
        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>
        {/* TASK - React 1 week 1 */}
        {/* Import and use the Footer component here */}
        <Footer /> {/* Render the Footer component */}
      </body>
    </html>
  );
}
