import ProjectCard from "./ProjectCard";
import tossortastePreview from "@/assets/tossortaste-preview.jpg";
import smartlinklearningPreview from "@/assets/smartlinklearning-preview.jpg";

const ProjectsSection = () => {
  const projects = [
    {
      title: "TossOrTaste",
      description: "An innovative food decision-making platform that helps users discover new dining experiences and make quick meal choices with an intuitive, gamified interface.",
      image: tossortastePreview,
      url: "https://tossortaste.com",
      tags: ["React", "Food Tech", "UX/UI", "Mobile-First"]
    },
    {
      title: "SmartLinkLearning",
      description: "A comprehensive e-learning platform designed to deliver engaging educational content with advanced progress tracking and interactive learning modules.",
      image: smartlinklearningPreview,
      url: "https://smartlinklearning.com",
      tags: ["EdTech", "Analytics", "Progressive Web App", "Responsive"]
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-gradient-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Our Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover the innovative web applications we've crafted, each designed to solve real-world problems 
            with cutting-edge technology and user-centered design.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
        
        {/* Placeholder for future projects */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center justify-center w-full max-w-md mx-auto p-8 border-2 border-dashed border-border/50 rounded-lg bg-card/20">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-primary opacity-20 flex items-center justify-center">
                <span className="text-2xl">+</span>
              </div>
              <p className="text-muted-foreground">More exciting projects coming soon...</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;