const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          About <span className="text-gradient">Me</span>
        </h2>
        
        <div className="bg-card rounded-2xl p-8 md:p-12 card-glow">
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            I'm a <span className="text-primary font-semibold">computer science enthusiast</span> passionate about building systems that solve real-world problems. 
            My experience spans <span className="text-accent font-semibold">software development</span>, <span className="text-accent font-semibold">data analytics</span>, and <span className="text-accent font-semibold">machine learning</span>, giving me the ability to both engineer robust applications and extract actionable insights from complex data.
          </p>
          
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            I enjoy designing <span className="text-foreground font-medium">scalable backend systems</span>, developing <span className="text-foreground font-medium">ML models</span>, 
            and creating <span className="text-foreground font-medium">interactive visualizations</span> that make data meaningful. 
            Whether it's optimizing workflows, building intelligent systems, or implementing real-time pipelines, I'm motivated by challenges that let technology drive tangible impact.
          </p>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            I'm currently focused on opportunities in <span className="text-primary font-semibold">SDE</span>, <span className="text-accent font-semibold">Data Analytics/Science</span>, and <span className="text-accent font-semibold">ML/AI engineering</span>, 
            where I can combine my skills to deliver innovative, high-impact solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
