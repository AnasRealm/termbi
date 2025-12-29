import Navbar from "../../components/navbar/Navbar";
import { Footer } from "../../components/footer/Footer";

export function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}