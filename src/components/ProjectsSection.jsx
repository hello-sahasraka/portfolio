
import { ArrowRight, ExternalLink, GithubIcon } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "ChemoSense",
    description: "ChemoSense is a cross-platform health monitoring system that uses IoT-based vital sign data and machine learning to detect post-chemotherapy risks early. It provides real-time monitoring, predictive alerts, and accessible interfaces on both desktop and mobile apps to help patients and clinicians respond quickly and improve treatment safety.",
    image: "projects/project1.jpg",
    tags: ["React", "FastAPI", "Tailwind", "Firebase", "ESP 32"],
    demoUrl: "https://www.youtube.com/watch?v=9O6nmo9BZRI",
    githubUrl: "https://github.com/hello-sahasraka/ChemoSense.git"
  },
  {
    id: 2,
    title: "OpalGlow",
    description: "OpalGlow is a complete e-commerce platform built with Express.js and React, featuring secure authentication, product catalog management, real-time order tracking, and integrated payments for a smooth and modern online shopping experience.",
    image: "projects/project2.jpg",
    tags: ["React", "Express","MongoDB","Supabase"],
    demoUrl: "https://opal-glow-pyez.vercel.app/",
    githubUrl: "https://github.com/hello-sahasraka/OpalGlow.git"
  },
  {
    id: 3,
    title: "LungLens",
    description: "LungLens is an AI-driven platform that analyzes chest X-rays to detect lung diseases early. It provides a web interface for image uploads, a backend that runs deep learning models for real-time predictions, and an integrated ML pipeline to deliver structured diagnostic insights, helping clinicians make faster and more accurate decisions.",
    image: "projects/project3.jpg",
    tags: ["React", "FastAPI","TensorFlow","CNN"],
    demoUrl: "https://www.youtube.com/watch?v=QInPwMNJf9A",
    githubUrl: "https://github.com/hello-sahasraka/lunglens.git"
  },
  {
    id: 4,
    title: "MediTrack_SUSL",
    description: "MediTrack SUSL is a campus medical-center management system that replaces paper workflows with a unified digital platform. It lets staff register patients, issue prescriptions, and track medicine inventory and expiries through a web interface backed by a Laravel + MySQL backend with Docker-based deployment. By centralizing records and pharmacy operations, MediTrack improves accuracy and reduces manual effort in university healthcare units.",
    image: "projects/project4.jpg",
    tags: ["Php", "Laravel","MySQL"],
    demoUrl: "#",
    githubUrl: "https://github.com/kavindalj/MediTrack_SUSL.git"
  },
  {
    id: 5,
    title: "TravelE",
    description: "TravelE is a website for a travel agency that organizes tours to Everest for travelers and hikers. Built with HTML, CSS, and JavaScript, it presents trip information and visual content through pages like Home, About, Gallery, and Contact in a clean, user-friendly layout.",
    image: "projects/project5.jpg",
    tags: ["HTML", "CSS","JS"],
    demoUrl: "https://hello-sahasraka.github.io/TravelE/",
    githubUrl: "https://github.com/hello-sahasraka/TravelE.git"
  },
];

export const ProjectsSection = () => {
  return (
    <section id="project" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl ">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Featured <span className="text-primary">Projects  </span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Here are some of my projects. Each projects was carefully 
          crafted with attention to detail,performance and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
              
              {/* Project Image */}
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* tags */}
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-muted text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Now Project Title */}
                <h2 className="text-xl font-semibold mb-1">{project.title}</h2>

                {/* Project Description */}
                <p className="text-muted-foreground text-sm mb-4 text-justify">{project.description}</p>

                {/* Project Links */}
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                        <a href={project.demoUrl}
                            target="_blank"
                           className=" text-forground/80 hover:text-primary transition-colors duration-300">
                        <ExternalLink size={20}/>
                        </a> 
                        <a href={project.githubUrl}
                            target="_blank" 
                           className=" text-forground/80 hover:text-primary transition-colors duration-300">
                        <GithubIcon size={20}/>
                        </a>      
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
            <a className="cosmic-button w-fit flex items-center mx-auto gap-2" 
            href="https://github.com/hello-sahasraka" target="_blank">
                Check My Github <ArrowRight size={16}/>
            </a>
        </div>

      </div>
    </section>
  );
};
