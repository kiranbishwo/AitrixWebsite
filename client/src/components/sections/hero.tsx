import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Brain, Zap, Sparkles, BookOpen, ChartBar, Clock } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-28 pb-20 min-h-screen flex items-center relative overflow-hidden">
      <div className="hero-shape hero-shape-1"></div>
      <div className="hero-shape hero-shape-2"></div>
      
      <div className="container mx-auto px-4">
        <div className="mb-4 flex justify-center">
          <Badge variant="outline" className="px-4 py-1 text-sm font-medium rounded-full bg-primary bg-opacity-10 text-primary">
            Transforming Educational Experiences with Advanced AI Technology
          </Badge>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 md:pr-12 reveal">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-dark">
              Revolutionizing <span className="text-primary">Education</span> with AI
            </h1>
            <p className="text-lg text-gray-600">
              Our AI-driven educational platform uses neural networks to understand how individual students learn, creating adaptive lesson plans that evolve in real-time based on performance, engagement, and comprehension metrics.
            </p>
            <p className="text-lg text-gray-600 mt-4">
              By combining machine learning with cognitive science, we're making education more effective, accessible, and engaging for learners of all ages and abilities.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-start space-x-2">
                <Zap className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold">AI Learning Paths</h3>
                  <p className="text-sm text-gray-600">Machine learning algorithms create custom learning journeys based on individual progress</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <Brain className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold">Neural Knowledge Mapping</h3>
                  <p className="text-sm text-gray-600">AI constructs comprehensive cognitive models of each student's knowledge</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <BookOpen className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold">Adaptive Content Engine</h3>
                  <p className="text-sm text-gray-600">Real-time content generation optimized for each learning style</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <ChartBar className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold">Predictive Analytics</h3>
                  <p className="text-sm text-gray-600">AI forecasts learning outcomes and suggests interventions</p>
                </div>
              </div>
            </div>
            
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
              
              {/* Neural network background */}
              <path d="M110,200 Q160,100 250,150 T350,120 T450,200" stroke="#3b82f6" strokeWidth="6" fill="none" />
              <path d="M150,220 Q200,280 300,240 T450,260" stroke="#60a5fa" strokeWidth="4" fill="none" strokeDasharray="6 4" />
              <path d="M100,150 Q180,180 250,140 T400,160 T500,120" stroke="#93c5fd" strokeWidth="3" fill="none" strokeDasharray="2 3" />
              
              {/* Brain representation */}
              <ellipse cx="300" cy="180" rx="120" ry="100" fill="#eff6ff" stroke="#3b82f6" strokeWidth="2" />
              <path d="M240,140 Q300,100 360,140 T320,220 T280,220 T240,140" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1.5" />
              <path d="M260,160 Q300,130 340,160 T310,210 T290,210 T260,160" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="1" />
              
              {/* Abstract data connections */}
              <circle cx="200" cy="100" r="15" fill="#2563eb" fillOpacity="0.6" />
              <circle cx="400" cy="120" r="12" fill="#3b82f6" fillOpacity="0.7" />
              <circle cx="480" cy="200" r="18" fill="#60a5fa" fillOpacity="0.8" />
              <circle cx="150" cy="250" r="20" fill="#93c5fd" fillOpacity="0.6" />
              <circle cx="320" cy="280" r="16" fill="#2563eb" fillOpacity="0.5" />
              <circle cx="420" cy="260" r="14" fill="#3b82f6" fillOpacity="0.7" />
              
              {/* Connection lines */}
              <line x1="200" y1="100" x2="240" y2="140" stroke="#2563eb" strokeWidth="1.5" strokeDasharray="2 2" />
              <line x1="400" y1="120" x2="360" y2="140" stroke="#2563eb" strokeWidth="1.5" strokeDasharray="2 2" />
              <line x1="480" y1="200" x2="400" y2="180" stroke="#2563eb" strokeWidth="1.5" strokeDasharray="2 2" />
              <line x1="150" y1="250" x2="200" y2="220" stroke="#2563eb" strokeWidth="1.5" strokeDasharray="2 2" />
              <line x1="320" y1="280" x2="300" y2="240" stroke="#2563eb" strokeWidth="1.5" strokeDasharray="2 2" />
              <line x1="420" y1="260" x2="380" y2="220" stroke="#2563eb" strokeWidth="1.5" strokeDasharray="2 2" />
              
              {/* Student figure */}
              <circle cx="150" cy="330" r="20" fill="#3b82f6" />
              <rect x="130" y="350" width="40" height="50" rx="10" fill="#3b82f6" />
              
              {/* Book or screen */}
              <rect x="220" y="320" width="70" height="50" rx="5" fill="#1e40af" />
              <rect x="230" y="330" width="50" height="30" rx="2" fill="#dbeafe" />
              
              {/* AI connection beam */}
              <path d="M180,330 Q250,280 300,220" stroke="#60a5fa" strokeWidth="3" strokeDasharray="4 2" />
              
              {/* Text labels */}
              <text x="320" y="340" fontSize="18" fontWeight="bold" fill="#1e293b">AI-Powered Education</text>
              <text x="320" y="360" fontSize="14" fill="#475569">Personalized Learning</text>
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
            
            <div className="absolute top-4 -left-6 bg-white rounded-lg shadow-lg p-4 animate-float-delayed">
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-semibold text-sm">Learning Efficiency</p>
                  <p className="text-gray-600 text-xs">40% faster knowledge acquisition</p>
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
