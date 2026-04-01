import { ReactNode } from "react";
import Navbar from "./Navbar";
import InstagramSection from "./InstagramSection";
import Footer from "./Footer";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <InstagramSection />
      <Footer />
    </div>
  );
};

export default Layout;
