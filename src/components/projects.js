import proj_img from "../assets/images/hero_test.webp"
import McMurry from "../assets/images/McMurry.webp"
import hightower from "../assets/images/hightower.webp"

function Projects() {

    return (
        <section className="projects w-screen h-screen">
            <div className='flex items-center flex-col w-screen h-screen p-6 gap-3'>
                <h3 className="mt-[100px] hel_neu">Creative Directed</h3>

                <div className="flex flex-col md:flex-row gap-4 p-6 uppercase">
                    
                    <div className="flex flex-col">
                        <img src={proj_img}></img>
                        <div className="flex justify-between items-center pt-2"> 
                            <h4 className="text-3xl hel_neu_bold">SELECTQB</h4>
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

                    <div className="flex flex-col">
                        <img src={McMurry}></img>
                        <div className="flex justify-between items-center pt-2"> 
                            <h4 className="text-3xl hel_neu_bold">McMurry</h4>
                            <div className="flex items-center gap-2 font-168">
                                <div className="text-lg leading-none ">
                                    <p>20</p>
                                    <p>23</p>
                                </div>
                                -
                                <p className="text-xs">NOW</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <img src={hightower}></img>
                        <div className="flex justify-between items-center pt-2"> 
                            <h4 className="text-3xl hel_neu_bold">hightower</h4>
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

                    <div className="flex flex-col">
                        <img src={proj_img}></img>
                        <div className="flex justify-between items-center pt-2"> 
                            <h4 className="text-3xl hel_neu_bold">SELECTQB</h4>
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
                </div>
            </div>

        </section>

    );
}

export default Projects;