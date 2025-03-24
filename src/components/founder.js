import HWY6 from "../assets/images/HWy6LOGO.webp"
import ARC from "../assets/images/ARCLOGO.webp"
import CAST from "../assets/images/CASTLOGO.webp"

function Founder() {
    return (
        <section className="about mb-[550px]">
            <div className="flex items-center flex-col p-6 gap-10 w-screen">
                <h3 className="mt-[100px] hel_neu">My Brands</h3>
                
                <div className="flex flex-col items-center w-[80%] md:w-[50%] mx-auto">
                    <img className="w-[200px]" src={HWY6} alt="HWY6" />
                    <h4 className="text-center hel_neu_bold uppercase mt-5">Hwy6Studios</h4>
                    <p className="text-center text-xs/4 hel_neu">
                    Hwy6Studios is a full-scale production company founded by Ekemini Ekwere, specializing in film production, creative direction, event hosting, and fashion campaigns. 
                    Operating under the broader Hwy6Universe, the company encompasses multiple sub-brands:</p>
                </div>

                <div className="flex flex-col items-center w-[80%] md:w-[50%] mx-auto">
                    <img className="w-[200px]" src={ARC} alt="HWY6" />
                    <h4 className="text-center hel_neu_bold uppercase mt-2">HWY6ARCHIVES</h4>
                    <p className="text-center text-xs/4 hel_neu">
                    A clothing and fashion design service.</p>
                </div>

                <div className="flex flex-col items-center w-[80%] md:w-[50%] mx-auto">
                    <img className="w-[200px]" src={CAST} alt="HWY6" />
                    <h4 className="text-center hel_neu_bold uppercase mt-2">HWY6ARCHIVES</h4>
                    <p className="text-center text-xs/4 hel_neu">
                    A modeling and talent agency.</p>
                </div>
                
            </div>
        </section>
    );
}

export default Founder;
