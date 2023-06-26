import "./globals.css";
import { Navbar, Footer } from "../components"

export const metadata = {
  title: "Eller",
  description: "Show the world what you can do with your projects.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
