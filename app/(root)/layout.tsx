import Header from "@/components/layout/Header";
import Slider from "@/components/layout/Slider";

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <Slider />
      {children}
    </>
  );
}

export default MainLayout;
