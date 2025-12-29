import DarkNavbar from "../components/navbar/DarkNavbar";
import { Footer } from "../components/footer/Footer";

export function MenuLayout({ children }) {
  return (
    <>
      <DarkNavbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
