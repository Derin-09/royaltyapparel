import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
// import SectionTitle from "@/components/SectionTitle";
import GalleryGrid from "@/components/GalleryGrid";
import Footer from "@/components/Footer";
import About from "./about/page";
import Contact from "./contact/page";
import Portfolio from "./portfolio/page";
import Services from "./services/page";

export default function Home() {
  const galleryImages = [
    "/images/pic6.jpg",
    "/images/pic1.jpg",
    "/images/pic2.jpg",
    "/images/pic3.jpg",
    "/images/pic4.jpg",
    "/images/pic5.jpg",
  ];

  return (
    <div className="min-h-screen">
      <section id="home" className="scroll-mt-24">
        <Hero
          title="Royalty Apparel - Toyin&apos;s Styles"
          subtitle="Where African roots kiss modern silhouettes."
          image="/images/hero.jpg"
        />
      </section>
      <section id="portfolio" className="py-20  bg-ivory">
        <div className="container mx-auto px-6">
          <GalleryGrid images={galleryImages} />
        </div>
      </section>

      <section id="services" className="bg-gray-400">
        <Services />
      </section>
      <div className="md:flex  md:justify-center  mx-auto gap-4">
        <section id="about" className="scroll-mt-24">
          {/* <About /> */}
        </section>
        <section id="contact" className="scroll-mt-24">
          <Contact />
        </section>
      </div>
      <Footer />
    </div>
  );
}
