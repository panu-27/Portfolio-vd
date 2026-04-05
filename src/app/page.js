import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Consultancy from "@/components/Consultancy";
import Events from "@/components/Events";
import JoinCommunity from "@/components/JoinCommunity";
import Blogs from "@/components/Blogs";
import ContactFaq from "@/components/ContactFaq";
import ContactForm from "@/components/ContactForm";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <About />
      <Stats />
      <Consultancy />
      <Events />
      <JoinCommunity />
      <Blogs />
      <ContactFaq />
      <ContactForm />
      <Contact />
    </main>
  );
}
