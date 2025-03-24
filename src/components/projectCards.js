import { LoremIpsum } from 'react-lorem-ipsum';
import { useRef, useEffect } from "react";
import gsap from "gsap";

function ProjectCard({ image, title, yearStartTop, yearStartBot, yearEndTop, yearEndBot, isExpanded, onClick }) {
    
    const textRef = useRef(null);

    useEffect(() => {
        if (textRef.current) {
            if (isExpanded) {
                console.log(`"${title}" text expanded.`);
                gsap.fromTo(textRef.current, 
                    { maxHeight: 0, opacity: 0 }, 
                    { maxHeight: 300, 
                      opacity: 1, 
                      duration: 0.5,
                      ease: "sine.out", }
                );
            } else {
                gsap.to(textRef.current, { maxHeight: 0, opacity: 0, duration: 0.5, ease: "power2.in" });
            }
        }
    }, [isExpanded]);

    return (
        <div className="card_ctn opacity-0 flex flex-col cursor-pointer " onClick={onClick}>
            <img src={image} alt={title} />
            <div className="flex justify-between items-center pt-2 ">
                <h4 className="text-3xl hel_neu_bold">{title}</h4>
                <div className="flex items-center gap-2 font-168">
                    <div className="text-lg leading-none">
                        <p>{yearStartTop}</p>
                        <p>{yearStartBot}</p>
                    </div>
                    -
                    {yearEndTop && yearEndBot ? (
                        <div className="text-lg leading-none">
                            <p>{yearEndTop}</p>
                            <p>{yearEndBot}</p>
                        </div>
                    ) : (
                        <p className="text-xs">NOW</p>
                    )}
                </div>
            </div>
            <div ref={textRef} className={`text-center text-sm/4 hel_neu_text mt-5 border transition-all overflow-hidden ${isExpanded ? 'expanded' : ''}`}>
                <div className='p-2'>
                    <LoremIpsum p={1} avgSentencesPerParagraph={3}/>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
