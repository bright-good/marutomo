import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { getLayout } from "./(site)/_layout/layout-cms";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

export async function generateMetadata(): Promise<Metadata> {
  const layout = await getLayout();
  return {
    title: layout.meta.title,
    description: layout.meta.description,
    icons: {
      icon: layout.meta.favicon,
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const layout = await getLayout();

  return (
    <html lang={layout.meta.lang}>
      <body className={notoSansJP.variable}>
        {children}
      </body>
    </html>
  );
}
