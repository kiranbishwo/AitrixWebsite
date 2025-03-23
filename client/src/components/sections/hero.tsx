import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="pt-28 pb-20 min-h-screen flex items-center relative overflow-hidden">
      <div className="hero-shape hero-shape-1"></div>
      <div className="hero-shape hero-shape-2"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 md:pr-12 reveal">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-dark">
              Revolutionizing <span className="text-primary">Education</span> with AI
            </h1>
            <p className="text-lg text-gray-600">
              Innovative AI-powered solutions for the future of learning. Discover how our technology is transforming educational experiences worldwide.
            </p>
            <div className="flex space-x-4">
              <Button
                asChild
                size="lg"
                className="px-8 transform hover:-translate-y-1 shadow-lg duration-300"
              >
                <a href="#contact">Get Started</a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="px-8 transform hover:-translate-y-1 duration-300"
              >
                <a href="#about">Learn More</a>
              </Button>
            </div>
          </div>
          <div className="relative animate-float reveal">
            <svg 
              className="w-full h-auto rounded-xl shadow-xl"
              viewBox="0 0 600 400" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="600" height="400" rx="12" fill="#f8fafc" />
              <path d="M110,200 Q160,100 250,150 T350,120 T450,200" stroke="#3b82f6" strokeWidth="6" fill="none" />
              <circle cx="200" cy="200" r="80" fill="#eff6ff" />
              <circle cx="400" cy="200" r="100" fill="#dbeafe" />
              <path d="M200,150 L300,225 L250,325 L150,280 Z" fill="#2563eb" fillOpacity="0.2" />
              <path d="M300,170 L400,240 L350,320 L250,250 Z" fill="#2563eb" fillOpacity="0.3" />
              <circle cx="200" cy="230" r="30" fill="#2563eb" fillOpacity="0.5" />
              <circle cx="350" cy="260" r="20" fill="#2563eb" fillOpacity="0.6" />
              <path d="M150,120 L180,150 L150,180 L120,150 Z" fill="#2563eb" />
              <path d="M420,140 L440,160 L420,180 L400,160 Z" fill="#2563eb" />
              <circle cx="300" cy="100" r="15" fill="#2563eb" />
              <text x="280" y="320" fontSize="24" fontWeight="bold" fill="#1e293b">AI Learning</text>
            </svg>
            
            <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-lg p-4 animate-float-delayed">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-sm">Trusted by</p>
                  <p className="text-gray-600 text-xs">500+ Educational Institutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
