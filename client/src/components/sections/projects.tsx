import { 
  BookOpen, 
  LayoutGrid, 
  Edit, 
  ChevronRight,
  Brain,
  MessageSquareText,
  LineChart,
  GraduationCap
} from "lucide-react";

interface ProjectCardProps {
  icon: React.ElementType;
  title: string;
  features: string[];
  bgColor: string;
}

const ProjectCard = ({ icon: Icon, title, features, bgColor }: ProjectCardProps) => (
  <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2 reveal">
    <div className={`h-48 ${bgColor} flex items-center justify-center relative`}>
      <div className="absolute inset-0 opacity-20">
        {/* Neural network background pattern */}
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M10,30 Q25,10 40,30 T70,30 T90,20" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-white" />
          <path d="M5,50 Q20,70 40,50 T70,50 T95,60" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-white" />
          <path d="M10,80 Q30,60 50,80 T80,70" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-white" />
          <circle cx="20" cy="30" r="1.5" fill="white" />
          <circle cx="40" cy="30" r="1.5" fill="white" />
          <circle cx="70" cy="30" r="1.5" fill="white" />
          <circle cx="90" cy="20" r="1.5" fill="white" />
          <circle cx="5" cy="50" r="1.5" fill="white" />
          <circle cx="40" cy="50" r="1.5" fill="white" />
          <circle cx="70" cy="50" r="1.5" fill="white" />
          <circle cx="95" cy="60" r="1.5" fill="white" />
          <circle cx="10" cy="80" r="1.5" fill="white" />
          <circle cx="50" cy="80" r="1.5" fill="white" />
          <circle cx="80" cy="70" r="1.5" fill="white" />
        </svg>
      </div>
      <Icon className="h-20 w-20 text-white" strokeWidth={1.5} />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary bg-opacity-20 flex items-center justify-center mr-2 mt-0.5">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
            </div>
            <span className="text-gray-600 text-sm">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const Projects = () => {
  const projects = [
    {
      icon: Brain,
      title: "Adaptive Learning Engine",
      bgColor: "bg-blue-600",
      features: [
        "Real-time learning pattern analysis",
        "Dynamic difficulty adjustment",
        "Cognitive load optimization",
        "Memory retention algorithms",
        "Student engagement monitoring"
      ]
    },
    {
      icon: BookOpen,
      title: "Personalized Curriculum",
      bgColor: "bg-indigo-600",
      features: [
        "AI content generation",
        "Learning style detection",
        "Interest-based curriculum mapping",
        "Knowledge gap identification",
        "Custom learning path creation"
      ]
    },
    {
      icon: MessageSquareText,
      title: "AI Tutoring Companion",
      bgColor: "bg-purple-600",
      features: [
        "24/7 instant feedback",
        "Natural language explanations",
        "Socratic questioning method",
        "Conceptual understanding verification",
        "Multi-language support"
      ]
    },
    {
      icon: LineChart,
      title: "Learning Analytics Dashboard",
      bgColor: "bg-cyan-600",
      features: [
        "Real-time performance tracking",
        "Engagement pattern analysis",
        "Early intervention alerts",
        "Teaching strategy optimization",
        "Data visualization tools"
      ]
    },
    {
      icon: Edit,
      title: "Automated Assessment",
      bgColor: "bg-teal-600",
      features: [
        "Essay grading neural networks",
        "Plagiarism detection",
        "Detailed feedback generation",
        "Rubric-based evaluation",
        "Multi-format assessment support"
      ]
    },
    {
      icon: GraduationCap,
      title: "Skill-Gap Predictor",
      bgColor: "bg-sky-600",
      features: [
        "Predictive learning analytics",
        "Future challenge identification",
        "Personalized intervention planning",
        "Learning trajectory modeling",
        "Long-term skill development tracking"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-light">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our <span className="text-primary">Projects</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our cutting-edge educational projects where artificial intelligence and machine learning are transforming how students learn, practice, and master new skills.
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">
            Each solution leverages our proprietary neural network architecture designed specifically to model human learning processes and optimize educational outcomes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              icon={project.icon}
              title={project.title}
              features={project.features}
              bgColor={project.bgColor}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center reveal">
          <p className="text-lg text-gray-700 max-w-4xl mx-auto mb-6">
            Our AI educational solutions implement cutting-edge deep learning architectures that continuously evolve with each student interaction. Using reinforcement learning algorithms, our systems identify optimal teaching strategies for each individual's cognitive profile.
          </p>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto mb-8">
            By processing over 5,000 data points per student session, our neural networks can detect subtle patterns in learning behavior that human educators might miss. This allows for micro-adjustments to content difficulty, explanation style, and practice frequency—creating a truly adaptive learning environment that accelerates mastery.
          </p>
          <button className="bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50">
            Explore All Solutions
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
