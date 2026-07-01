import type { Metadata } from "next";
import { Fraunces, Work_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/content/theme-provider";
import { SiteHeader } from "@/content/site-header";
import { SiteFooter } from "@/content/site-footer";

/* Display face — variable Fraunces with optical sizing + italics. */
const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  variable: "--font-fraunces",
  display: "swap",
});

/* Body face — Work Sans. */
const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-work-sans",
  display: "swap",
});

const SITE_URL = "https://guarda-rios.pt";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Projeto Guarda-Rios · Ciência cidadã pelos rios de Portugal",
    template: "%s · Projeto Guarda-Rios",
  },
  description:
    "Estações open-source e solares que monitorizam a qualidade da água dos rios de Portugal em tempo real. Um projeto de alunos do Grupo Ribadouro, no Porto.",
  keywords: [
    "Guarda-Rios",
    "qualidade da água",
    "ciência cidadã",
    "open-source",
    "NB-IoT",
    "rios de Portugal",
    "Grupo Ribadouro",
  ],
  authors: [{ name: "Projeto Guarda-Rios · Grupo Ribadouro" }],
  icons: {
    icon: "/brand/PGR_Logo.png",
    shortcut: "/brand/PGR_Logo.png",
    apple: "/brand/PGR_Logo.png",
  },
  openGraph: {
    type: "website",
    locale: "pt_PT",
    url: SITE_URL,
    siteName: "Projeto Guarda-Rios",
    title: "Projeto Guarda-Rios · Ciência cidadã pelos rios de Portugal",
    description:
      "Estações open-source e solares que monitorizam a qualidade da água dos rios de Portugal em tempo real.",
    images: [{ url: "/brand/PGR_Logo-Full.png", alt: "Projeto Guarda-Rios" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-PT"
      suppressHydrationWarning
      className={`${fraunces.variable} ${workSans.variable}`}
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
