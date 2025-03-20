import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faFacebook, faInstagram, faTiktok, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { useMenu } from "../context/menuContext";
import { useRef } from 'react';
import useMenuAnimations from "../hooks/useMenuAnimations";

function Menu() {
    const { isMenuOpen } = useMenu();
    const menuRef = useRef(null);
    const listItemsRef = useRef([]);
    const aboutRef = useRef(null);
    const socialListRef = useRef(null);

    useMenuAnimations(menuRef, listItemsRef, aboutRef, socialListRef, isMenuOpen);

    return (
        <section ref={menuRef} className={`${isMenuOpen ? "block" : "hidden"} menu z-10 fixed`}>
            <div className='flex justify-center items-center'>
                <div className='flex justify-between flex-col w-screen h-screen p-6'>
                    <div className='flex mt-[140px] gap-2'>
                        <FontAwesomeIcon className='mt-3' icon={faCircle} size='2xs' />
                        <ul className="flex flex-col">
                            {["Founder", "Creative Director", "Cinematographer", "Photographer", "Graphic Designer"].map((item, index) => (
                                <li key={index} ref={(el) => (listItemsRef.current[index] = el)} className="text-3xl uppercase">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className='flex gap-2'>
                        <FontAwesomeIcon className='mt-3' icon={faCircle} size='2xs' />
                        <ul>
                            <li ref={aboutRef} className="text-3xl uppercase">About Me</li>
                        </ul>
                    </div>

                    <div>
                        <ul ref={socialListRef} className='flex gap-[15vw] justify-center'>
                            <li><FontAwesomeIcon icon={faXTwitter} /></li>
                            <li><FontAwesomeIcon icon={faInstagram} /></li>
                            <li><FontAwesomeIcon icon={faTiktok} /></li>
                            <li><FontAwesomeIcon icon={faLinkedin} /></li>
                            <li><FontAwesomeIcon icon={faFacebook} /></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Menu;
