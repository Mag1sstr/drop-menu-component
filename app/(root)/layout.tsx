import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Slider from "@/components/layout/Slider";

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <Slider />
      {children}
      <Footer />
    </>
  );
}

export default MainLayout;
