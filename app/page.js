import HomeNav from "@/components/LandingPage/HomeNav";
import Hero from "@/components/LandingPage/Hero";
import Services from "@/components/LandingPage/Services";
import HowItWorks from "@/components/LandingPage/HowItWorks";
import Testimonials from "@/components/LandingPage/Testimonials";
import WhyChooseUs from "@/components/LandingPage/WhyChooseUs";
import Stats from "@/components/LandingPage/Stats";
import Pricing from "@/components/LandingPage/Pricing";
import FAQ from "@/components/LandingPage/FAQ";
import Contact from "@/components/LandingPage/Contact";
import ScrollToTop from "@/components/LandingPage/ScrollToTop";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main className="min-h-screen bg-white">
            <HomeNav />
            <Hero />
            <Services />
            <WhyChooseUs />
            <Stats />
            <HowItWorks />
            <Pricing />
            <Testimonials />
            <FAQ />
            <Contact />
            <Footer />
            <ScrollToTop />
        </main>
    );
}
