import ScrollProgress from "@/components/ScrollProgress";
import FloatingButtons from "@/components/FloatingButtons";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Packages from "@/components/Packages";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import WhyChoose from "@/components/WhyChoose";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTop from "@/components/ScrollToTop";
import LoadingScreen from "@/components/LoadingScreen";
import Stats from "@/components/Stats";
import BookingForm from "@/components/BookingForm";
import Reviews from "@/components/Reviews";
import GoogleReviews from "@/components/GoogleReviews";

export default function Home() {
  return (
    <>
     <LoadingScreen />
     <ScrollProgress />
      <Header />

      <main>
        <Hero />
        <About />
        <Services />
        <Packages />
        <Stats />
        <Gallery />
        <Testimonials />
        <GoogleReviews />
        <WhyChoose />
        <Reviews />
        <Contact />
        <BookingForm />
      </main>

      <Footer />
      <FloatingButtons />


      <WhatsAppButton />
      <ScrollToTop />
    </>
  );
}