import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FeaturedProjects = () => {
  const featuredProjects = [
    {
      title: "NexusNews",
      description: "An on-demand news intelligence engine featuring an interactive RAG pipeline that queries real-time articles to provide sourced answers using 100% open-source models.",
      tech: ["Python", "RAG", "NLP", "Real-time Data"],
      github: "https://github.com/AbhayR1104/NexusNews",
      demo: null,
    },
    {
      title: "GradSchool Visualisation",
      description: "Interactive visual analytics tool to help students filter 300+ U.S. universities based on 30+ criteria using maps, charts, and custom infographics. Features GeoMap, Parallel Coordinates Plot, and Line Charts.",
      tech: ["JavaScript", "D3.js", "Data Visualization", "GeoJSON"],
      github: "https://github.com/AbhayR1104/GradSchoolVisualisation",
      demo: null,
    },
    {
      title: "Uber Lite Backend",
      description: "A real-time ride-sharing backend API built with FastAPI, PostgreSQL, Redis, and Docker, demonstrating key system design concepts including scalability and performance optimization.",
      tech: ["Python", "FastAPI", "PostgreSQL", "Redis", "Docker"],
      github: "https://github.com/AbhayR1104/uber-lite-backend",
      demo: null,
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Featured <span className="text-gradient">Projects</span>
        </h2>
        <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
          Highlights from my portfolio showcasing my skills.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredProjects.map((project, index) => (
            <article 
              key={index} 
              className="bg-card rounded-xl p-6 card-glow flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-bold mb-3">{project.title}</h3>
              <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-3 py-1 rounded-md bg-secondary/50 text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-3">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="flex-1 border-primary/50 hover:bg-primary/10"
                  asChild
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </a>
                </Button>
                {project.demo && (
                  <Button 
                    size="sm"
                    className="flex-1 bg-gradient-to-r from-primary to-accent"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                )}
              </div>
            </article>
          ))}
        </div>
        
        <div className="text-center">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
            asChild
          >
            <Link to="/projects">
              View All Projects <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
