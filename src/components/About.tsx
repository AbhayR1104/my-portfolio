const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          About <span className="text-gradient">Me</span>
        </h2>
        
        <div className="bg-card rounded-2xl p-8 md:p-12 card-glow">
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            I'm a passionate technologist with expertise spanning <span className="text-primary font-semibold">Software Development</span> and <span className="text-accent font-semibold">Data Science</span>. 
            My journey in tech has equipped me with a unique blend of skills that bridge the gap between engineering robust systems and extracting meaningful insights from data.
          </p>
          
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            With hands-on experience in building <span className="text-foreground font-medium">full-stack applications</span>, developing <span className="text-foreground font-medium">machine learning models</span>, 
            and architecting <span className="text-foreground font-medium">scalable backend systems</span>, I thrive on solving complex problems and creating innovative solutions.
          </p>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            Whether it's implementing real-time data pipelines, designing interactive visualizations, or building intelligent systems with cutting-edge ML techniques, 
            I'm driven by the impact technology can have on real-world challenges.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
