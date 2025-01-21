import "../../public/styles/styles.css";
import "../../public/styles/layout.css";
import "../../public/styles/default.css";
import "../../public/styles/magnific-popup.css";
import "../../public/styles/fonts.css";
import "../../public/styles/media-queries.css";
import "../../public/styles/fonts/font-awesome.css";
import { GTProvider } from "gt-next";
import { getLocale } from "gt-next/server";
export const metadata = {
  title: "Brian Lou's Portfolio",
  description: "Personal portfolio website",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const lang = await getLocale();
  return (
    <html lang={lang}>
      <body>
        <GTProvider>{children}</GTProvider>
      </body>
    </html>
  );
}
