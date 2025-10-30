import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      role: "Procurement Operations Analyst",
      company: "Hewlett Packard Enterprise",
      location: "Bengaluru, India",
      period: "Feb 2023 – Dec 2023",
      achievements: [
        "Analyzed global procurement and inventory data from SAP ECC and Qlik to identify system inefficiencies in CPU/HDD shipments, improving regional delivery time by 12%.",
        "Developed automated supply chain dashboards integrating SAP data into Power BI for real-time visibility, reducing stockout escalations by 30%.",
        "Performed root-cause analysis on delayed orders and inventory buildup using Python and time-series data, contributing to a 15% reduction in inventory holding costs over three quarters.",
        "Led the design of data models and KPIs to optimize replenishment forecasting for 250+ parts, improving demand accuracy and operational efficiency.",
      ],
    },
    {
      role: "Software Engineering Intern",
      company: "Tata Elxsi",
      location: "Bengaluru, India",
      period: "Aug 2022 – Oct 2022",
      achievements: [
        "Redesigned app architecture using MVVM, Repository pattern, Room, and LiveData cutting screen load time by 30% and reducing UI response latency by 150ms.",
        "Optimized background task execution with Coroutines and WorkManager reduced frame drops by 25% and improved workflow stability across 5+ UI components.",
        "Built a media playback module using ExoPlayer, MVVM, and HILT achieved smooth streaming with 40% fewer buffering events under weak networks via adaptive bitrate handling.",
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
          Track record of delivering impactful solutions for companies I worked for.
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
