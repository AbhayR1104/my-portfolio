import { Code2, Database, Brain, Cloud, Server } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Programming Languages",
      skills: ["Python", "Java", "Kotlin", "SQL", "C++", "JavaScript"],
    },
    {
      icon: Brain,
      title: "Machine Learning & AI",
      skills: ["TensorFlow", "NLP", "Hugging Face", "Vertex AI", "Transformers", "Generative AI", "RAG", "LLMs"],
    },
    {
      icon: Database,
      title: "Data & Analytics",
      skills: ["Power BI", "Tableau", "Qlik", "PySpark", "Apache Spark", "D3.js", "Scikit-learn", "Matplotlib", "Pandas", "NumPy"],
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      skills: ["AWS", "Terraform", "Docker", "Kubernetes", "GitHub Actions", "Helm", "CI/CD", "REST APIs"],
    },
    {
      icon: Server,
      title: "Web & Databases",
      skills: ["Spring Boot", "Node.js", "React.js", "TypeScript", "GraphQL", "PostgreSQL", "MongoDB", "Redis"],
    },
    {
      icon: Code2,
      title: "Enterprise Systems",
      skills: ["SAP ECC", "ERP Integration"],
    },
  ];

  return (
    <section id="skills" className="py-16 px-4 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Technical <span className="text-gradient">Skills</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          A comprehensive toolkit for building modern applications and analyzing complex data
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div 
                key={index} 
                className="bg-card rounded-lg p-6 card-glow"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-primary to-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-3 py-1.5 rounded-md bg-secondary/50 text-sm font-medium hover:bg-secondary transition-colors"
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
