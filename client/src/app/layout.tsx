import { Nav } from "@/widgets/Nav/Nav";
import type { Metadata } from "next";
import "./styles";
import { Footer } from "@/widgets/Footer/Footer";

export const metadata: Metadata = {
  title: "СимбирСофт",
  description:
    "Интернет магазин СимбирСофт. Любой программный продукт дешево и быстро!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ru'>
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
