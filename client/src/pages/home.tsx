import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Projects from "@/components/sections/projects";
import Services from "@/components/sections/services";
import Contact from "@/components/sections/contact";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      
      if (anchor) {
        e.preventDefault();
        const targetId = anchor.getAttribute("href");
        
        if (targetId === "#") return;
        
        const targetElement = document.querySelector(targetId as string);
        
        if (targetElement) {
          window.scrollTo({
            top: (targetElement as HTMLElement).offsetTop - 80,
            behavior: "smooth",
          });
        }
      }
    };

    // Scroll reveal animation
    const revealOnScroll = () => {
      const reveals = document.querySelectorAll(".reveal");
      
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);
    window.addEventListener("scroll", revealOnScroll);
    
    // Initial reveal check
    setTimeout(revealOnScroll, 100);

    return () => {
      document.removeEventListener("click", handleAnchorClick);
      window.removeEventListener("scroll", revealOnScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background font-sans antialiased text-foreground">
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideUp {
          from { transform: translateY(30px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        html {
          scroll-behavior: smooth;
        }
        
        .reveal {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease-out;
        }
        
        .reveal.active {
          opacity: 1;
          transform: translateY(0);
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float 8s ease-in-out 1s infinite;
        }
        
        .animate-fade-in {
          animation: fadeIn 1s ease-in-out;
        }
        
        .animate-slide-up {
          animation: slideUp 0.8s ease-out;
        }

        .hero-shape {
          position: absolute;
          z-index: -1;
        }
        
        .hero-shape-1 {
          top: 15%;
          right: 10%;
          width: 300px;
          height: 300px;
          border-radius: 53% 47% 52% 48% / 36% 41% 59% 64%;
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.3), rgba(37, 99, 235, 0.1));
          animation: float 12s infinite alternate;
        }
        
        .hero-shape-2 {
          bottom: 10%;
          left: 5%;
          width: 200px;
          height: 200px;
          border-radius: 63% 37% 54% 46% / 55% 48% 52% 45%;
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(37, 99, 235, 0.05));
          animation: float 10s infinite alternate-reverse;
        }
      `}</style>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
