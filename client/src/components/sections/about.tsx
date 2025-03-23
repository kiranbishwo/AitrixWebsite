import { 
  Zap, 
  Users, 
  Shield, 
  Settings 
} from "lucide-react";

const AboutCard = ({ 
  icon: Icon, 
  title, 
  description 
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string; 
}) => (
  <div className="bg-white p-5 rounded-lg shadow-sm">
    <div className="text-primary mb-2">
      <Icon className="h-8 w-8" />
    </div>
    <h4 className="font-semibold mb-1">{title}</h4>
    <p className="text-sm text-gray-600">{description}</p>
  </div>
);

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About <span className="text-primary">Aitrix Labs</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We're pioneering the fusion of artificial intelligence and education to create learning experiences that adapt to each student's unique needs and potential.
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">
            Our AI-powered educational platforms analyze individual learning patterns in real-time, automatically adjusting content difficulty, teaching methods, and pace to optimize comprehension and retention.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 reveal">
            <div className="bg-light rounded-xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
              <p className="text-gray-600 mb-6">
                At Aitrix Labs, we're pioneering the intersection of artificial intelligence and education. Our mission is to create learning experiences that adapt to each student's unique needs, learning style, and pace. By combining advanced AI algorithms with proven educational methodologies, we're building tools that make personalized learning scalable and accessible to everyone.
              </p>
              <p className="text-gray-600 mb-6">
                Our interdisciplinary team of AI researchers, educational psychologists, and experienced educators work together to develop intelligent systems that understand how humans learn, identify knowledge gaps, and dynamically adjust to optimize educational outcomes.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <AboutCard 
                  icon={Zap} 
                  title="AI Innovation" 
                  description="Neural networks that understand cognitive learning patterns and adapt teaching methods in real-time" 
                />
                <AboutCard 
                  icon={Users} 
                  title="Inclusive Learning" 
                  description="Intelligent systems that accommodate diverse learning styles, abilities, and educational backgrounds" 
                />
                <AboutCard 
                  icon={Shield} 
                  title="Data Protection" 
                  description="Advanced security protocols ensuring student data privacy while enabling powerful personalization" 
                />
                <AboutCard 
                  icon={Settings} 
                  title="Adaptive Technology" 
                  description="Self-optimizing algorithms that continually refine teaching approaches based on performance data" 
                />
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2 reveal">
            <svg 
              className="w-full h-auto rounded-xl shadow-xl" 
              viewBox="0 0 600 400" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="600" height="400" rx="12" fill="#f8fafc" />
              
              {/* Background with neural network pattern */}
              <rect x="50" y="50" width="500" height="300" rx="8" fill="#f1f5f9" />
              
              {/* Neural network connections */}
              <path d="M100,120 Q180,80 260,120 T420,90 T520,140" stroke="#60a5fa" strokeWidth="2" strokeDasharray="4 2" />
              <path d="M80,180 Q160,220 260,180 T380,220 T520,200" stroke="#3b82f6" strokeWidth="2" strokeDasharray="2 3" />
              <path d="M100,250 Q200,290 300,250 T450,270" stroke="#93c5fd" strokeWidth="2" strokeDasharray="3 1" />
              
              {/* Neural network nodes */}
              <circle cx="100" cy="120" r="6" fill="#3b82f6" />
              <circle cx="180" cy="80" r="5" fill="#3b82f6" />
              <circle cx="260" cy="120" r="6" fill="#3b82f6" />
              <circle cx="340" cy="90" r="5" fill="#3b82f6" />
              <circle cx="420" cy="90" r="6" fill="#3b82f6" />
              <circle cx="520" cy="140" r="5" fill="#3b82f6" />
              
              <circle cx="80" cy="180" r="5" fill="#3b82f6" />
              <circle cx="160" cy="220" r="6" fill="#3b82f6" />
              <circle cx="260" cy="180" r="5" fill="#3b82f6" />
              <circle cx="340" cy="210" r="6" fill="#3b82f6" />
              <circle cx="380" cy="220" r="5" fill="#3b82f6" />
              <circle cx="520" cy="200" r="6" fill="#3b82f6" />
              
              <circle cx="100" cy="250" r="6" fill="#3b82f6" />
              <circle cx="200" cy="290" r="5" fill="#3b82f6" />
              <circle cx="300" cy="250" r="6" fill="#3b82f6" />
              <circle cx="450" cy="270" r="5" fill="#3b82f6" />
              
              {/* Brain outline */}
              <ellipse cx="300" cy="170" rx="90" ry="75" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
              <path d="M255,120 Q300,90 345,120 T330,190 T270,190 T255,120" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="1.5" />
              
              {/* Education icons */}
              <rect x="120" y="300" width="40" height="50" rx="4" fill="#2563eb" />
              <rect x="125" y="305" width="30" height="10" rx="2" fill="white" />
              <rect x="125" y="320" width="30" height="10" rx="2" fill="white" />
              <rect x="125" y="335" width="20" height="10" rx="2" fill="white" />
              
              <rect x="210" y="320" width="40" height="30" rx="4" fill="#3b82f6" />
              <circle cx="230" cy="298" r="15" fill="#3b82f6" />
              <rect x="225" cy="325" width="10" height="20" rx="2" fill="white" />
              
              <rect x="350" y="300" width="60" height="40" rx="4" fill="#60a5fa" />
              <rect x="360" y="310" width="40" height="5" rx="1" fill="white" />
              <rect x="360" y="320" width="40" height="5" rx="1" fill="white" />
              <rect x="360" y="330" width="25" height="5" rx="1" fill="white" />
              
              <rect x="450" y="310" width="30" height="35" rx="4" fill="#93c5fd" />
              <circle cx="465" cy="290" r="12" fill="#93c5fd" />
              <rect x="460" y="320" width="10" height="20" rx="2" fill="white" />
              
              {/* Connected education concept lines */}
              <line x1="140" y1="300" x2="255" y2="220" stroke="#2563eb" strokeWidth="1" strokeDasharray="3 2" />
              <line x1="230" y1="298" x2="270" y2="220" stroke="#3b82f6" strokeWidth="1" strokeDasharray="3 2" />
              <line x1="380" y1="300" x2="330" y2="220" stroke="#60a5fa" strokeWidth="1" strokeDasharray="3 2" />
              <line x1="465" y1="290" x2="345" y2="200" stroke="#93c5fd" strokeWidth="1" strokeDasharray="3 2" />
              
              {/* Text label */}
              <text x="180" y="380" fontSize="24" fontWeight="bold" fill="#1e293b">AI-Powered Education</text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
