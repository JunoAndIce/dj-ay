import proj_img from "../assets/images/hero_test.webp";
import McMurry from "../assets/images/McMurry.webp";
import hightower from "../assets/images/hightower.webp";
import ProjectCard from "./projectCards";

const projectsData = [
    { image: proj_img, title: "SELECTQB", yearStartTop: "20", yearStartBot: "21" },
    { image: McMurry, title: "McMurry", yearStartTop: "20", yearStartBot: "23"},
    { image: hightower, title: "Hightower", yearStartTop: "20", yearStartBot: "21" },
    { image: proj_img, title: "SELECTQB", yearStartTop: "20", yearStartBot: "21" }
];

function Projects() {
    return (
        <section className="projects ">
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
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
