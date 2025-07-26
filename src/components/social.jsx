import { faChevronDown, faEnvelope, faLink, faMailBulk, faMailForward, faMailReply, faMusic } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboard } from '@fortawesome/free-regular-svg-icons';
import Scene from '../scene';
import heroImg from '../assets/images/AYO.webp'
import {  faInstagram, faSoundcloud, faTiktok, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Social = () => {

    return (
        <>
            <footer className='section'>
                <div className='container text-center '>
                    <div>
                        <h1 className='title is-6'>FOLLOW DJ A.Y.</h1>
                        <div className="h-[1px] w-full bg-divider-primary"></div>

                    </div>
                    <div className='flex gap-10 mt-10 justify-center '>
                        <a className='!text-white' href='https://www.tiktok.com/@dja.y_?_t=ZP-8xQR8EEOyHn&_r=1'><FontAwesomeIcon icon={faTiktok} /></a>
                        <a className='!text-white' href='https://x.com/Ayo_Akin25'><FontAwesomeIcon icon={faXTwitter} /></a>
                        <a className='!text-white' href='https://www.instagram.com/dja.y_?igsh=NGJlYjN2MGNzODBj&utm_source=qr'><FontAwesomeIcon icon={faInstagram} /></a>
                        <a className='!text-white' href='https://www.youtube.com/channel/UCQXICi84w_oL0syTdN4J-ng'><FontAwesomeIcon icon={faYoutube} /></a>
                        <a className='!text-white' href='https://on.soundcloud.com/z8Om6B2OWKwjyVITwb'><FontAwesomeIcon icon={faSoundcloud} /></a>
                        <a className='!text-white' href='https://linktr.ee/dja.yofficial'><svg role="img" 
                                viewBox="0 0 24 24"     
                                xmlns="http://www.w3.org/2000/svg" 
                                id="Linktree--Streamline-Simple-Icons" 
                                height={24} width={24} ><desc>{"\n    Linktree Streamline Icon: https://streamlinehq.com\n  "}</desc><title>{"Linktree"}</title><path 
                                d="m13.73635 5.85251 4.00467 -4.11665 2.3248 2.3808 -4.20064 4.00466h5.9085v3.30473h-5.9365l4.22865 4.10766 -2.3248 2.3338L12.0005 12.099l-5.74052 5.76852 -2.3248 -2.3248 4.22864 -4.10766h-5.9375V8.12132h5.9085L3.93417 4.11666l2.3248 -2.3808 4.00468 4.11665V0h3.4727zm-3.4727 10.30614h3.4727V24h-3.4727z" 
                                fill="#ffffff" 
                                strokeWidth={1} />
                            </svg></a>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Social;