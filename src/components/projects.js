import projectsData from "./projectsData";
import ProjectCard from "./projectCards";
import { useRef, useState } from "react";
import useProjectAnimations from "../hooks/useProjectAnimations";

function Projects() {
    const componentRef = useRef(null);
    useProjectAnimations(componentRef);

    const [expandedCard, setExpandedCard] = useState(null);
    const handleCardClick = (index) => {
        setExpandedCard(expandedCard === index ? null : index);
    };

    return (
        <section ref={componentRef} className="projects mb-[550px]">
            <div className="flex items-center flex-col p-6 gap-3 w-screen">
                <h3 className="mt-[100px] hel_neu">Creative Directed</h3>

                <div className="flex flex-col md:flex-row gap-4 p-6 uppercase">
                    {projectsData.map((project, index) => (
                        <ProjectCard 
                            key={index} 
                            image={project.image} 
                            title={project.title} 
                            yearStartTop={project.yearStartTop} 
                            yearStartBot={project.yearStartBot} 
                            yearEndTop={project.yearEndTop} 
                            yearEndBot={project.yearEndBot}
                            isExpanded={expandedCard === index}
                            onClick={() => handleCardClick(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
