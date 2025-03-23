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
            We're on a mission to transform education through innovative AI technologies that empower students and educators alike.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 reveal">
            <div className="bg-light rounded-xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
              <p className="text-gray-600 mb-6">
                At Aitrix Labs, we believe AI has the potential to create personalized, accessible, and effective educational experiences for everyone. Our team of educational experts and AI engineers work together to develop solutions that address real challenges in the educational landscape.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <AboutCard 
                  icon={Zap} 
                  title="Innovation" 
                  description="Pushing the boundaries of AI in education" 
                />
                <AboutCard 
                  icon={Users} 
                  title="Accessibility" 
                  description="Creating solutions for all learners" 
                />
                <AboutCard 
                  icon={Shield} 
                  title="Security" 
                  description="Protecting learner data is our priority" 
                />
                <AboutCard 
                  icon={Settings} 
                  title="Personalization" 
                  description="Adapting to individual learning needs" 
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
              
              {/* Abstract office background */}
              <rect x="50" y="50" width="500" height="300" rx="8" fill="#f1f5f9" />
              <rect x="80" y="80" width="200" height="120" rx="4" fill="#e2e8f0" />
              <rect x="320" y="80" width="200" height="80" rx="4" fill="#e2e8f0" />
              <rect x="80" y="220" width="440" height="100" rx="4" fill="#e2e8f0" />
              
              {/* People silhouettes */}
              <circle cx="150" cy="150" r="30" fill="#3b82f6" />
              <rect x="120" y="180" width="60" height="80" rx="20" fill="#3b82f6" />
              
              <circle cx="250" cy="140" r="25" fill="#2563eb" />
              <rect x="225" y="165" width="50" height="70" rx="16" fill="#2563eb" />
              
              <circle cx="350" cy="130" r="20" fill="#60a5fa" />
              <rect x="330" y="150" width="40" height="60" rx="14" fill="#60a5fa" />
              
              <circle cx="420" cy="150" r="28" fill="#93c5fd" />
              <rect x="392" y="178" width="56" height="76" rx="18" fill="#93c5fd" />
              
              {/* Computer screen and table */}
              <rect x="120" y="260" width="360" height="10" rx="2" fill="#64748b" />
              <rect x="150" y="220" width="100" height="60" rx="4" fill="#1e40af" />
              <rect x="160" y="230" width="80" height="40" rx="2" fill="#dbeafe" />
              
              <rect x="350" y="220" width="100" height="60" rx="4" fill="#1e40af" />
              <rect x="360" y="230" width="80" height="40" rx="2" fill="#dbeafe" />
              
              {/* Text label */}
              <text x="200" y="340" fontSize="24" fontWeight="bold" fill="#1e293b">Aitrix Team</text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
