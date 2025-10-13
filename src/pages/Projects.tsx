import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

interface Repository {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  topics: string[];
  language: string | null;
  stargazers_count: number;
  fork: boolean;
}

const Projects = () => {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/AbhayR1104/repos?sort=updated&per_page=100")
      .then(res => res.json())
      .then(data => {
        const filtered = data.filter((repo: Repository) => !repo.fork);
        setRepos(filtered);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <Button 
            variant="ghost" 
            className="mb-6 hover:bg-secondary/50"
            asChild
          >
            <Link to="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            All <span className="text-gradient">Projects</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            A comprehensive collection of my work spanning full-stack development, data science, machine learning, 
            and system design. Each project demonstrates practical problem-solving and technical expertise.
          </p>
        </div>
        
        {loading ? (
          <div className="text-center py-20">
            <p className="text-muted-foreground">Loading repositories...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {repos.map((repo, index) => (
              <article 
                key={repo.id} 
                className="bg-card rounded-xl p-8 card-glow flex flex-col"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h2 className="text-2xl font-bold mb-4">{repo.name}</h2>
                <p className="text-muted-foreground mb-6 flex-grow leading-relaxed">
                  {repo.description || "No description available"}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {repo.language && (
                    <span className="px-3 py-1.5 rounded-md bg-secondary/50 text-sm font-medium">
                      {repo.language}
                    </span>
                  )}
                  {repo.topics.slice(0, 5).map((topic, topicIndex) => (
                    <span 
                      key={topicIndex}
                      className="px-3 py-1.5 rounded-md bg-secondary/50 text-sm font-medium"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    size="default"
                    className="flex-1 border-primary/50 hover:bg-primary/10"
                    asChild
                  >
                    <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      View Code
                    </a>
                  </Button>
                  {repo.homepage && (
                    <Button 
                      size="default"
                      className="flex-1 bg-gradient-to-r from-primary to-accent"
                      asChild
                    >
                      <a href={repo.homepage} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
