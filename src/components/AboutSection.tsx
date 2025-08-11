const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-primary bg-clip-text text-transparent">
          About Link Smart Technologies
        </h2>
        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            Link Smart Technologies LLC specializes in creating innovative web applications 
            that bridge the gap between complex ideas and user-friendly digital solutions. 
            Our expertise lies in transforming business concepts into scalable, modern web platforms.
          </p>
          <p>
            We focus on delivering high-quality, responsive web applications using cutting-edge 
            technologies including React, TypeScript, and modern cloud infrastructure. Each project 
            is crafted with attention to user experience, performance, and scalability.
          </p>
          <p>
            From food-tech platforms to educational systems, we bring diverse industry experience 
            and technical excellence to every project we undertake.
          </p>
        </div>
        
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center shadow-glow-primary">
              <span className="text-2xl">🚀</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Innovation</h3>
            <p className="text-muted-foreground">Cutting-edge solutions for modern challenges</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center shadow-glow-primary">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Performance</h3>
            <p className="text-muted-foreground">Fast, scalable, and reliable applications</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center shadow-glow-primary">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Precision</h3>
            <p className="text-muted-foreground">Tailored solutions that fit your exact needs</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;