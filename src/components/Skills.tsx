import { Code2, Database, Brain, Terminal } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Frontend Development",
      skills: ["React", "JavaScript", "TypeScript", "HTML/CSS", "Tailwind CSS", "D3.js"],
    },
    {
      icon: Terminal,
      title: "Backend Development",
      skills: ["Python", "FastAPI", "Node.js", "REST APIs", "Docker", "Redis"],
    },
    {
      icon: Database,
      title: "Data & Databases",
      skills: ["PostgreSQL", "SQL", "MongoDB", "Pandas", "NumPy", "Data Pipelines"],
    },
    {
      icon: Brain,
      title: "ML & Data Science",
      skills: ["Machine Learning", "Statistical Analysis", "Scikit-learn", "TensorFlow", "Data Visualization", "Streamlit"],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Technical <span className="text-gradient">Skills</span>
        </h2>
        <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
          A comprehensive toolkit for building modern applications and analyzing complex data
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div 
                key={index} 
                className="bg-card rounded-xl p-8 card-glow"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-primary to-accent">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-4 py-2 rounded-lg bg-secondary/50 text-sm font-medium hover:bg-secondary transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
