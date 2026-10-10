import TopAdminBar from "./components/TopAdminBar";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FeaturedDestinations from "./components/FeaturedDestinations";
import SelectedWork from "./components/SelectedWork";
import BlogGrid from "./components/BlogGrid";
import NewsletterBanner from "./components/NewsletterBanner";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fbf9f5] text-[#1c1917] font-sans antialiased">
      <TopAdminBar />
      <Header />
      <HeroSection />
      <FeaturedDestinations />
      <SelectedWork />
      <BlogGrid />
      <NewsletterBanner />
      <ContactSection />
      <Footer />
      <BackToTop />
    </main>
  );
}