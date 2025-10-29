import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DevOnce Technologies",
  description: "Innovating for tomorrow's web.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@100..800&display=swap"
          rel="stylesheet"
        />
      </head>

      <body
        className="antialiased"
        style={{
          fontFamily: "'Sora', sans-serif",
        }}
      >
        {children}
      </body>
    </html>
  );
}
