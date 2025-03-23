import { 
  Code, 
  LayoutGrid, 
  Zap, 
  Settings, 
  Check 
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Support & <span className="text-primary">Services</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive support and services to ensure your educational systems operate at peak performance.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="reveal">
            <div className="bg-light rounded-xl p-8 shadow-lg h-full">
              <h3 className="text-2xl font-bold mb-6">Our Services</h3>
              
              <div className="space-y-6">
                <ServiceItem 
                  icon={Code} 
                  title="Implementation" 
                  description="Expert assistance in integrating our AI solutions with your existing systems and workflows." 
                />
                
                <ServiceItem 
                  icon={LayoutGrid} 
                  title="Training & Workshops" 
                  description="Comprehensive training programs for educators and administrators to maximize system utilization." 
                />
                
                <ServiceItem 
                  icon={Zap} 
                  title="Regular Updates" 
                  description="Continuous improvement with regular feature updates and performance enhancements." 
                />
                
                <ServiceItem 
                  icon={Settings} 
                  title="24/7 Technical Support" 
                  description="Round-the-clock assistance for any technical issues or questions." 
                />
              </div>
            </div>
          </div>
          
          <div className="reveal">
            <div className="bg-primary text-white rounded-xl p-8 shadow-lg h-full">
              <h3 className="text-2xl font-bold mb-6">Support Plans</h3>
              
              <div className="space-y-8">
                <div className="bg-white bg-opacity-10 p-6 rounded-lg">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="font-bold text-xl">Standard</h4>
                    <span className="bg-white text-primary px-3 py-1 rounded-full text-sm font-medium">Popular</span>
                  </div>
                  <ul className="space-y-3 mb-6">
                    <PlanFeature>Email & phone support</PlanFeature>
                    <PlanFeature>Regular system updates</PlanFeature>
                    <PlanFeature>Basic training resources</PlanFeature>
                  </ul>
                  <a 
                    href="#contact" 
                    className="inline-block w-full text-center py-3 bg-white text-primary font-medium rounded-lg hover:bg-opacity-90 transition-colors"
                  >
                    Get Started
                  </a>
                </div>
                
                <div className="bg-white bg-opacity-10 p-6 rounded-lg">
                  <h4 className="font-bold text-xl mb-4">Premium</h4>
                  <ul className="space-y-3 mb-6">
                    <PlanFeature>24/7 priority support</PlanFeature>
                    <PlanFeature>Early access to features</PlanFeature>
                    <PlanFeature>Custom implementation</PlanFeature>
                    <PlanFeature>Dedicated account manager</PlanFeature>
                  </ul>
                  <a 
                    href="#contact" 
                    className="inline-block w-full text-center py-3 bg-white text-primary font-medium rounded-lg hover:bg-opacity-90 transition-colors"
                  >
                    Contact Sales
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
