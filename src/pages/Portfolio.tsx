import Navbar from "@/components/Navbar";
import PortfolioSection from "@/components/Portfolio";
import Footer from "@/components/Footer";

const Portfolio = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <PortfolioSection />
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
