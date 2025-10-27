import { Certification } from "./ui/Certification";


const certificates = [
    {
      name: "Advanced Java Programming",
      issuedBy: "MIHA Institute",
      skills:["Java","OOP","JDBC"],
      description:"Completed Advanced Java Programming certification with a strong focus on Java fundamentals, OOP principles, exception handling, collections, multithreading and database connectivity using JDBC, and practiced these concepts through real-world coding exercises and projects.",
      src: "certificates/Advanced Java Programming.png",
      url:"https://drive.google.com/file/d/1gvTD0V9NghXLrcPoybhC4BFDY-BH_VZi/view?usp=sharing",
      
    },
    {
      name: "Advanced Python for AI Engineering",
      issuedBy: "MIHA Institute",
      skills:["Python","AI","OOP", "Data structures"],
      description:"Completed an Advanced Python for AI Engineering course issued by MIHA Institute. Gained proficiency in Python programming with emphasis on OOP, algorithm design, data structures, database interaction and foundational AI concepts, and applied these through hands-on exercises and mini-projects.",
      src: "certificates/Advanced Python for AI Engineering.png",
      url:"https://drive.google.com/file/d/1b0w5JKWFBYz0vUN8iToddoxdFQRpg859/view?usp=drive_link",
      
    },
    {
      name: "The Typescript You Need for ReactJS with Projects",
      issuedBy: "Packt",
      skills:["React","TS"],
      description:"Completed The TypeScript You Need for ReactJS with Projects course issued by Packt. Learned to apply TypeScript in React applications, build typed and scalable components, enforce type safety in props and state, and develop projects using React with TypeScript.",
      src: "certificates/The Typescript You Need for ReactJS with Projects.png",
      url:"https://drive.google.com/file/d/1LULXXM5uWg0q6869MS4moqMD1PsL3Eg2/view?usp=drive_link",
      
    },
    { 
      name: "Full-Stack Web Development (MERN)",
      issuedBy: "Skyrek",
      skills:["React", "Express","MongoDB"],
      description: "Completed the Full-Stack Web Development (MERN) program issued by Skyrek. Learned to build end-to-end applications using React, Express and MongoDB, implement REST APIs, handle routing and data persistence, and develop full-stack projects following modern industry practices.",
      src: "certificates/Full-Stack Web Development (MERN).png",
      url:"https://drive.google.com/file/d/1hsFhRyNcfZEe3Ibh8vjVtY1Jmzv-D_pp/view?usp=drive_link",
      
    },
    { 
      name: "Mastering REST APIs with FastAPI",
      issuedBy: "Packt",
      skills:["FastAPI", "Testing","APIs"],
      description: "Completed the Mastering REST APIs with FastAPI course issued by Packt. Learned to build and deploy RESTful APIs using FastAPI, implement authentication and authorization, and test APIs effectively.",
      src: "certificates/Mastering REST APIs with FastAPI.png",
      url:"https://drive.google.com/file/d/1N-Q8z6ukjCLWC8BmmObtyiAbGYncPIhU/view?usp=drive_link",
      
    },
    { 
      name: "Linux for Absolute Beginners",
      issuedBy: "KodeKloud",
      skills:["Linux", "CLI","Bash"],
      description: "Completed the Linux for Absolute Beginners course issued by KodeKloud. Gained foundational knowledge of Linux operating system, command line interface, and shell scripting.",
      src: "certificates/Linux for Absolute Beginners.png",
      url:"https://drive.google.com/file/d/1qotYXNa0ag4pIsDyxvG7wOgA-RD-UIy3/view?usp=drive_link",
      
    },
  ];
export function CertificationSection() {
  
  return (
        <section id="certificates" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl ">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                  Featured <span className="text-primary">Certifications  </span>
                </h2>
                <Certification certificates={certificates} />
                
            </div>
        </section>

  );
}
