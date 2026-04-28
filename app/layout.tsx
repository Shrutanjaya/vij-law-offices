import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vij Law Offices | Advocates & Solicitors, New Delhi",
  description:
    "A litigation chamber with committed practitioners representing clients in the Supreme Court, Delhi High Court & Tribunals. Practice areas include Civil-Commercial, Constitutional, Criminal, Service and Arbitration Law.",
  keywords:
    "Vij Law Offices, Shivani Vij, Advocate on Record, Supreme Court, Delhi High Court, litigation, constitutional law, criminal law",
  openGraph: {
    title: "Vij Law Offices",
    description: "Litigation chamber based in New Delhi, practising before the Supreme Court and Delhi High Court.",
    url: "https://vijlawoffices.in",
    siteName: "Vij Law Offices",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
