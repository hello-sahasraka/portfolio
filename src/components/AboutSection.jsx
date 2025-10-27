import { cn } from "../lib/util";
import { Briefcase, Code, User, Github, Linkedin, Youtube } from "lucide-react";



export const AboutSection = () => {
    return <section id="about" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl ">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary">Me</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 animate-floatY">
                    <h3 className="text-2xl font-semibold">Passionate Full Stack Developer</h3>

                    <p className="text-muted-foreground">
                        Full Stack Web Developer and third-year Computer Science undergraduate, specializing in building
                        efficient, scalable, and user-focused web applications.
                    </p>

                    <p className="text-muted-foreground">
                        I work with React.js, Express.js, FastAPI, Python, and JavaScript, and I enjoy bringing ideas to life
                        through clean code, intuitive UI/UX, and intelligent solutions. I’ve built projects ranging from
                        full-stack dashboards and REST APIs to AI-driven applications and responsive web platforms.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button"> Get In Touch</a>
                        <a
                            href="Sahasraka_sachin.pdf"
                            download="Sahasraka_Sachin_Resume.pdf"
                            className={cn(
                                "px-6 py-2 rounded-full border border-primary",
                                "text-primary hover:bg-primary/40 transition-all duration-300"
                            )}
                        >
                            Download Resume
                        </a>
                    </div>
                    <div className="pt-8">
                        <h4 className="font-large mb-4">Connect With Me</h4>
                        <div className="flex justify-center space-x-5">
                            <div className="p-3 rounded-full border border-foreground hover:bg-[#0A66C2] hover:border-0 hover:scale-110">
                                <a
                                    href="https://www.linkedin.com/in/sahasraka-sachin-perera" target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Linkedin size={24} className="hover:scale-120" />
                                </a>
                            </div>
                            <div className="p-3 rounded-full border border-foreground hover:bg-white hover:text-black">
                                <a href="https://github.com/hello-sahasraka" target="_blank" rel="noopener noreferrer">
                                    <Github size={24} className="hover:scale-120" />
                                </a>
                            </div>
                            <div className="p-3 rounded-full border border-foreground hover:bg-[#FF0000] hover:border-0 hover:scale-110">
                                <a href="https://youtube.com/@sahasrakasachin?si=Q-nliLz8fa9QPXsT" target="_blank" rel="noopener noreferrer">
                                    <Youtube size={24} className="hover:scale-120" />
                                </a>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="grid grid-cols-1 gap-6">
                    {/* Card 1 */}
                    <div className="gradient-border p-6 card-hover animate-float">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Full Stack Developer</h4>
                                <p className="text-muted-foreground">
                                    Build responsive and scalable web applications using React, Express.js, FastAPI, and modern databases.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="gradient-border p-6 card-hover animate-float">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <User className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">AI & ML Enthusiast</h4>
                                <p className="text-muted-foreground">
                                    Experience building machine learning models and AI-driven applications.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="gradient-border p-6 card-hover animate-float">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Briefcase className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Backend Developer</h4>
                                <p className="text-muted-foreground">
                                    Skilled in building secure, optimized, and production-grade APIs and backend systems.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </section>
};
