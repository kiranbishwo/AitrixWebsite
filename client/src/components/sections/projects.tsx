import { 
  BookOpen, 
  LayoutGrid, 
  Edit, 
  ChevronRight 
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
      icon: BookOpen,
      title: "AI Tutor Assistant",
      description: "Personalized digital tutors that adapt to each student's learning style, providing real-time assistance and custom learning paths."
    },
    {
      icon: LayoutGrid,
      title: "Smart Learning Management",
      description: "An intelligent platform that helps institutions manage courses, track student progress, and provide data-driven insights for improvement."
    },
    {
      icon: Edit,
      title: "Automated Assessment",
      description: "AI-powered evaluation tools that can grade assignments, provide detailed feedback, and help teachers save time while improving accuracy."
    }
  ];

  return (
    <section id="projects" className="py-20 bg-light">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our <span className="text-primary">Projects</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover how our AI-powered solutions are revolutionizing education and creating smarter learning experiences.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              icon={project.icon}
              title={project.title}
              description={project.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
