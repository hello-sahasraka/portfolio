import { ArrowDown } from "lucide-react";

export const HeroSection = () => {

    return (
        <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4">
            <div className="container max-w-4xl mx-auto text-center z-10 animate-float">
                <div className="space-y-6">
                    <div className="flex items-center justify-center">
                        <img
                            src="image.jpeg"
                            alt="img"
                            className="rounded-full w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 object-cover border-6 border-primary
                            opacity-0 animate-fade-in"
                        />
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        <span className="opacity-0 animate-fade-in-delay-1">Hi I'm</span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-2"> Sahasraka</span>
                        <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-3"> Sachin</span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-4">
                        I’m a third-year Computer Science undergraduate specializing in building scalable, efficient web applications
                        using React.js, Node.js, and Python, with a strong passion for AI and Machine Learning.
                    </p>

                    <div className="pt-4 opacity-0 animate-fade-in-delay-5">
                        <a href="#project" className="cosmic-button">
                            View My Work
                        </a>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                <span className="text-sm text-muted-foreground mb-2">Scroll </span>
                <ArrowDown className="h-5 w-5 text-primary" />
            </div>

        </section>
    );
};