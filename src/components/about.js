import McMurry from "../assets/images/McMurry.webp"

function About() {
    return (
        <section className="founder ">
            <div className="flex items-center flex-col gap-3 w-screen h-screen relative">

                <div className="relative">
                    <div className="image-wrapper">
                        <img
                            src={McMurry}
                            className="object-cover w-[120vw] h-[60vh] inset-0"
                        />
                    </div>
                </div>


                <h3 className="uppercase text-3xl hel_neu_bold">Ekemini <br />Ekwere</h3>
                <div className="flex flex-col md:flex-row gap-4 p-6 uppercase">

                </div>
            </div>
        </section>
    );
}

export default About;
