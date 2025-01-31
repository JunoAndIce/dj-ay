import proj_img from "../assets/images/hero_test.webp"

function Projects() {

    return (
        <section className="projects w-screen h-screen">
            <div className='flex items-center flex-col w-screen h-screen p-6 gap-3'>
                <h3 className="mt-[80px]">Brands | Creative Directed</h3>

                <div className="flex flex-col gap-4 p-6">
                    
                    <div className="flex flex-col">
                        <img src={proj_img}></img>
                        <div className="flex justify-between items-center pt-2"> 
                            <h4 className="text-3xl hel_neu">SELECT QB</h4>
                            <div className="flex items-center gap-2 font-168">
                                <div className="text-lg leading-none ">
                                    <p>20</p>
                                    <p>21</p>
                                </div>
                                -
                                <p className="text-xs">NOW</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <img src={proj_img}></img>
                    </div>

                    <div>
                        <img src={proj_img}></img>
                    </div>
                </div>
            </div>

        </section>

    );
}

export default Projects;