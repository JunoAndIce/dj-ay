import McMurry from "../assets/images/McMurry.webp"
import Ekdsgn from "../assets/images/EKDSGN.webp"
import { useRef } from 'react';
import useAboutAnimations from "../hooks/useAboutAnimations";

function About() {

    const componentRef = useRef(null);

    useAboutAnimations(componentRef);
    return (
        <section ref={componentRef} className="about">
            <div className="flex items-center flex-col gap-3 w-screen relative  mt-[100px]">

                <div className="relative img_ctn opacity-0 top-[500px]">
                    <div className="image-wrapper">
                        <img
                            src={Ekdsgn}
                            className="object-cover w-[120vw] h-[60vh] inset-0"
                        />
                    </div>
                </div>


                

                
                <div className="flex items-center flex-col md:flex-row gap-4 p-6 text_ctn relative opacity-0 top-[500px]">

                <h3 className="uppercase text-4xl/8 hel_neu_bold ">Ekemini <br />Ekwere</h3>

                <p className="text-center text-sm/4 hel_neu_text">
                    I’m Ekemini Ekwere, a Creative Director, Entrepreneur, and Founder of Hwy6Studios—a full-scale production company shaping the future of creative expression. Born and raised in Alief, Texas, my journey started with a simple passion: designing football wallpapers on Microsoft PowerPoint. That passion led me to Adobe Photoshop, where I built a name for myself creating digital graphics for athletes, brands, and content creators.
                </p>

                <p className="text-center text-sm/4 hel_neu_text">
                    Over the years, my skills expanded beyond design, diving deep into videography, fashion, brand strategy, and event production. What started as a creative hustle evolved into Hwy6Universe, an ecosystem housing multiple branches, from Hwy6Casting (talent scouting) to Hwy6Warehouse (clothing manufacturing). Hwy6Studios has worked with streetwear brands, athletes, and artists, producing campaigns, short films, and large-scale events that move culture forward.
                    Beyond the projects, my mission is simple: build a platform where creatives can thrive on their own terms. Whether through storytelling, fashion, or live experiences, I’m dedicated to pushing the culture forward and creating opportunities for the next generation.<br />
                </p>

                <p className="text-center text-sm/4 hel_neu_text">
                    Let’s build.
                </p>
                </div>


                <div className="flex flex-col md:flex-row gap-4 p-6 uppercase">

                </div>
            </div>
        </section>
    );
}

export default About;
