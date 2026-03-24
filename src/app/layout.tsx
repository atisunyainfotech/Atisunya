import type { Metadata } from "next";
import { Golos_Text, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

import Footer from "@/components/globals/footer";
import Navbar from "@/components/globals/header-nav";

/* Fonts */

const golosText = Golos_Text({
  weight: ["400", "500", "600", "700"],
  variable: "--font-primary",
  subsets: ["latin"],
});

const inter = Inter({
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-secondary",
  subsets: ["latin"],
});

/* SEO Metadata */

export const metadata: Metadata = {
  title: {
    default: "AtiSunya Infotech | ERP & Digital Transformation Company",
    template: "%s | AtiSunya Infotech",
  },

  description:
    "AtiSunya Infotech delivers end-to-end ERP implementation,Oracle Netsuite , NetSuite consulting, SAP, Microsoft Dynamics 365, Zoho, and digital transformation services for businesses across India.",

  keywords: [
    "Best ERP Company in Noida",
    "ERP Company in Delhi NCR",
    "NetSuite Implementation Partner",
    "Oracle NetSuite Partner India",
    "ERP Consulting Services",
    "ERP Implementation Company",
    "Cloud ERP Solutions",
    "Digital Transformation Company",
    "ERP Software Company in India",
    "SAP Implementation Services",
    "Microsoft Dynamics 365 Partner",
    "Zoho Implementation Services",
    "Business Automation Solutions",
    "ERP Support and Maintenance",
    "ERP Solutions for Manufacturing",
    "ERP for Retail Industry",
    "ERP for Healthcare",
    "Enterprise Resource Planning Solutions",
    "Best ERP Software Provider",
    "ERP Consultant in Noida",
    "ERP Services in India"
  ],

  openGraph: {
    title:
      "AtiSunya Infotech | ERP Implementation & Digital Transformation Company",

    description:
      "Leading ERP implementation partner providing NetSuite, SAP, Microsoft Dynamics 365, Zoho, and cloud ERP solutions.",

    url: "https://atisunyainfotech.com",

    siteName: "AtiSunya Infotech",

    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  /* Organization Schema */

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",

    name: "AtiSunya Infotech",

    url: "https://atisunyainfotech.com",

    logo: "https://atisunyainfotech.com/logo.png",

    description:
      "ERP implementation and digital transformation company providing Oracle NetSuite, SAP, Microsoft Dynamics 365, and Zoho services.",

    address: {
      "@type": "PostalAddress",
      addressLocality: "Noida",
      addressRegion: "Uttar Pradesh",
      addressCountry: "India",
    },

    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+ 91 9021023513",
      contactType: "Customer Service",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
    },

    sameAs: [
      "https://www.linkedin.com/company/atisunya-infotech-private-limited/?viewAsMember=true",
      "https://www.facebook.com",
      "https://www.instagram.com/atisunyainfotech/"
    ],
  };

  return (
    <html lang="en">
      <body
        className={`${golosText.variable} ${inter.variable} antialiased text-blue font-secondary`}
      >
        <Navbar />

        {children}

        <Footer />

        {/* Organization Schema */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

        {/* Tidio Chatbot */}
        <Script
          src="//code.tidio.co/nqifyiiawgxr4or0y0biybdnlhklgmys.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}