import { 
  Code, 
  LayoutGrid, 
  Zap, 
  Settings, 
  Check,
  BookOpen,
  ChartBar,
  Brain,
  Sparkles,
  Users,
  Database,
  ShieldCheck
} from "lucide-react";

const ServiceItem = ({ icon: Icon, title, description }: { icon: React.ElementType; title: string; description: string }) => (
  <div className="flex space-x-4">
    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary bg-opacity-10 flex items-center justify-center text-primary">
      <Icon className="h-6 w-6" />
    </div>
    <div>
      <h4 className="font-semibold text-lg mb-1">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const PlanFeature = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-center">
    <Check className="h-5 w-5 mr-2" />
    {children}
  </li>
);

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">AI-Education <span className="text-primary">Services</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our suite of AI-powered educational solutions leverages machine learning algorithms, natural language processing, and neural networks to transform traditional learning environments into intelligent, adaptive systems.
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">
            By applying cutting-edge artificial intelligence to the science of learning, we're creating educational experiences that continuously evolve to meet each student's unique needs, abilities, and learning style.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="reveal">
            <div className="bg-light rounded-xl p-8 shadow-lg h-full">
              <h3 className="text-2xl font-bold mb-6">AI Educational Services</h3>
              
              <div className="space-y-6">
                <ServiceItem 
                  icon={Brain} 
                  title="Cognitive Profile Analysis" 
                  description="Our AI analyzes each student's learning patterns to create personalized cognitive profiles that inform adaptive learning paths." 
                />
                
                <ServiceItem 
                  icon={BookOpen} 
                  title="Content Enhancement" 
                  description="Transform your existing educational content with AI enrichment, adding interactive elements and personalized difficulty scaling." 
                />
                
                <ServiceItem 
                  icon={ChartBar} 
                  title="Learning Analytics" 
                  description="Comprehensive data dashboards that provide real-time insights into student performance, engagement patterns, and knowledge gaps." 
                />
                
                <ServiceItem 
                  icon={Users} 
                  title="Instructor Augmentation" 
                  description="AI-powered teaching assistants that handle routine questions, grade assignments, and identify students who need additional support." 
                />
                
                <ServiceItem 
                  icon={Database} 
                  title="Educational Data Integration" 
                  description="Seamlessly connect our AI system with your existing LMS, SIS, and assessment platforms for a unified learning ecosystem." 
                />
                
                <ServiceItem 
                  icon={ShieldCheck} 
                  title="Privacy-First Implementation" 
                  description="FERPA/GDPR-compliant deployment with advanced data protection measures to ensure student information security." 
                />
              </div>
            </div>
          </div>
          
          <div className="reveal">
            <div className="bg-primary text-white rounded-xl p-8 shadow-lg h-full">
              <h3 className="text-2xl font-bold mb-6">AI Education Solutions</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4 mb-3">
                  <Sparkles className="h-8 w-8" />
                  <h4 className="text-xl font-bold">How AI Transforms Learning</h4>
                </div>
                
                <div className="bg-white bg-opacity-10 p-5 rounded-lg">
                  <div className="flex justify-between items-center mb-3">
                    <h5 className="font-semibold">Traditional Learning</h5>
                    <div className="w-8 h-8 rounded-full flex items-center justify-center bg-white bg-opacity-20">→</div>
                    <h5 className="font-semibold">AI-Enhanced Learning</h5>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <ul className="space-y-2 text-sm">
                        <li>• Standardized curriculum for all</li>
                        <li>• Fixed learning sequence</li>
                        <li>• End-of-unit assessments</li>
                        <li>• Generic feedback</li>
                        <li>• Manual student monitoring</li>
                      </ul>
                    </div>
                    <div>
                      <ul className="space-y-2 text-sm">
                        <li>• Neural network-optimized content</li>
                        <li>• AI-generated learning pathways</li>
                        <li>• Continuous knowledge modeling</li>
                        <li>• Natural language feedback</li>
                        <li>• Machine learning insights</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white bg-opacity-10 p-5 rounded-lg">
                  <h5 className="font-semibold mb-3">Our AI Educational Technologies</h5>
                  <ul className="space-y-3 text-sm">
                    <li><span className="font-semibold">Cognitive Modeling:</span> Neural networks that map knowledge states and learning patterns</li>
                    <li><span className="font-semibold">NLP Analysis:</span> Real-time comprehension assessment through natural language processing</li>
                    <li><span className="font-semibold">Reinforcement Learning:</span> Content sequencing algorithms that optimize for knowledge retention</li>
                    <li><span className="font-semibold">Predictive Analytics:</span> Early intervention system for at-risk students</li>
                  </ul>
                </div>
                
                <div className="bg-white bg-opacity-10 p-5 rounded-lg">
                  <h5 className="font-semibold mb-3">Key AI Educational Outcomes</h5>
                  <ul className="space-y-2">
                    <PlanFeature>42% increase in knowledge retention</PlanFeature>
                    <PlanFeature>37% reduction in time-to-proficiency</PlanFeature>
                    <PlanFeature>58% improvement in student engagement</PlanFeature>
                    <PlanFeature>31% decrease in administrative workload</PlanFeature>
                  </ul>
                </div>
                
                <div className="mt-4">
                  <a 
                    href="#contact" 
                    className="inline-block w-full text-center py-3 bg-white text-primary font-medium rounded-lg hover:bg-opacity-90 transition-colors"
                  >
                    Schedule a Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
