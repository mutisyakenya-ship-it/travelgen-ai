import Navbar from "../../components/landing/Navbar";
import Hero from "../../components/landing/Hero";
import Features from "../../components/landing/Features";
import ExampleTrips from "../../components/landing/ExampleTrips";
import PopularDestinations from "../../components/landing/PopularDestinations";
import Testimonials from "../../components/landing/Testimonials";
import CTA from "../../components/landing/CTA";
import Footer from "../../components/landing/Footer";

function LandingPage() {
  return (
    <main className="overflow-x-hidden bg-white">
      <Navbar />

      <Hero />

      <Features />

      <ExampleTrips />

      <PopularDestinations />

      <Testimonials />

      <CTA />

      <Footer />
    </main>
  );
}

export default LandingPage;