
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXTwitter, faFacebook, faInstagram, faTiktok, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { useMenu } from "../context/menuContext";
import { useEffect, useRef } from 'react';
import gsap from 'gsap'

function Menu() {

    const { isMenuOpen } = useMenu();
    const menuRef = useRef(null);
    
    // GSAP vars for animating multiple items at once.
    const listItemsRef = useRef([]); // Ref for individual list items
    const socialListRef = useRef(null); // Ref for the entire social list

    // GSAP animations for Menu.
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden"; // Disable scrolling
    
            gsap.to(menuRef.current, {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: "expo.out",
                display: "block",
            });
    
            gsap.from(listItemsRef.current, {
                opacity: 0,
                y: 20,
                duration: 0.6,
                ease: "power3.out",
                stagger: 0.1,
            });
    
            gsap.from(socialListRef.current, {
                opacity: 0,
                y: 20,
                duration: 0.6,
                ease: "power3.out",
                delay: 0.3,
            });
    
        } else {
            document.body.style.overflow = ""; // Re-enable scrolling
    
            gsap.to(menuRef.current, {
                opacity: 0,
                y: -20,
                duration: 0.2,
                ease: "expo.in",
                onComplete: () => {
                    if (menuRef.current) {
                        menuRef.current.style.display = "none";
                    }
                },
            });
        }
    
        // Cleanup when component unmounts
        return () => {
            document.body.style.overflow = "";
        };
    }, [isMenuOpen]);



    return (
        <section ref={menuRef} className={`${isMenuOpen ? "block" : "hidden"} menu flex justify-center items-center fixed z-10 w-screen h-screen m-auto`}>

            <div className='flex justify-between flex-col w-screen h-screen p-6'>

                <ul className="flex gap-10 flex-col uppercase mt-[140px]">

                    <li><FontAwesomeIcon icon={faCircle} size='2xs' /></li>

                    {/* Animated list items */}
                    {["Photography", "Videography", "Creative Direction", "Brands", "About Me"].map((item, index) => (
                        <li key={index} ref={(el) => (listItemsRef.current[index] = el)} className="text-3xl">
                            {item}
                        </li>
                    ))}

                    <li><FontAwesomeIcon icon={faCircle} size='2xs' /></li>
                </ul>

                <ul ref={socialListRef} className='flex gap-[15vw] justify-center'>
                    <li><FontAwesomeIcon icon={faXTwitter} /></li>
                    <li><FontAwesomeIcon icon={faInstagram} /></li>
                    <li><FontAwesomeIcon icon={faTiktok} /></li>
                    <li><FontAwesomeIcon icon={faLinkedin} /></li>
                    <li><FontAwesomeIcon icon={faFacebook} /></li>
                </ul>
            </div>
        </section>

    );
}

export default Menu;