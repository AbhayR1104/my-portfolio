import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      role: "Procurement Operations Analyst",
      company: "Hewlett Packard Enterprise",
      location: "Bengaluru, India",
      period: "Feb 2023 – Dec 2023",
      achievements: [
        "Analyzed global procurement and inventory data from SAP, achieving 12% improvement in average delivery time across APAC",
        "Built real-time dashboards using Power BI and Qlik, reducing stockout-related escalations by 30%",
        "Performed root-cause analysis leading to 15% reduction in inventory holding costs over three quarters",
        "Streamlined replenishment forecasting for 250+ parts across supply chain operations",
      ],
    },
    {
      role: "Software Engineering Intern",
      company: "Tata Elxsi",
      location: "Bengaluru, India",
      period: "Aug 2022 – Sept 2022",
      achievements: [
        "Redesigned app architecture using MVVM pattern, cutting screen load time by 30%",
        "Optimized background tasks with Coroutines and WorkManager, reducing frame drops by 25%",
        "Built media playback module with ExoPlayer, achieving 40% fewer buffering events",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Professional <span className="text-gradient">Experience</span>
        </h2>
        <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
          Track record of delivering impactful solutions across data analytics and software engineering
        </p>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <article 
              key={index} 
              className="bg-card rounded-xl p-8 card-glow"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">{exp.role}</h3>
                  <div className="flex items-center gap-2 text-primary mb-2">
                    <Briefcase className="h-5 w-5" />
                    <span className="font-semibold">{exp.company}</span>
                  </div>
                  <p className="text-muted-foreground">{exp.location}</p>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground mt-4 md:mt-0">
                  <Calendar className="h-4 w-4" />
                  <span className="font-mono text-sm">{exp.period}</span>
                </div>
              </div>
              
              <ul className="space-y-3 mt-6">
                {exp.achievements.map((achievement, achIndex) => (
                  <li key={achIndex} className="flex gap-3 text-muted-foreground">
                    <span className="text-primary mt-1.5">▹</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
