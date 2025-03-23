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
  description: string;
}

const ProjectCard = ({ icon: Icon, title, description }: ProjectCardProps) => (
  <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2 reveal">
    <div className="h-48 bg-primary bg-opacity-10 flex items-center justify-center">
      <Icon className="h-20 w-20 text-primary" strokeWidth={1.5} />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">
        {description}
      </p>
      <div className="flex items-center space-x-2 text-primary">
        <span className="text-sm font-medium">Learn more</span>
        <ChevronRight className="h-4 w-4" />
      </div>
    </div>
  </div>
);

const Projects = () => {
  const projects = [
    {
      icon: Brain,
      title: "Adaptive Learning Engine",
      description: "AI-powered system that analyzes student performance in real-time, adjusting difficulty levels and learning materials to match individual cognitive patterns."
    },
    {
      icon: BookOpen,
      title: "Personalized Curriculum",
      description: "Smart content creation that tailors educational materials to students' learning styles, interests, and knowledge gaps identified through continuous assessment."
    },
    {
      icon: MessageSquareText,
      title: "AI Tutoring Companion",
      description: "24/7 virtual tutors that provide instant feedback, answer questions, and guide students through complex concepts using natural language processing."
    },
    {
      icon: LineChart,
      title: "Learning Analytics Dashboard",
      description: "Advanced data visualization tools for educators to track student engagement, identify struggling learners, and optimize teaching strategies."
    },
    {
      icon: Edit,
      title: "Automated Assessment",
      description: "AI-powered evaluation tools that grade written assignments with human-like understanding, providing detailed feedback while reducing teacher workload."
    },
    {
      icon: GraduationCap,
      title: "Skill-Gap Predictor",
      description: "Predictive algorithms that identify future educational challenges and recommend personalized intervention strategies before performance issues arise."
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
              description={project.description}
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
