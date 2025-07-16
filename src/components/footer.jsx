import { faChevronDown, faMusic } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faSoundcloud, faTiktok, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faClipboard } from '@fortawesome/free-regular-svg-icons';
import HeroWebp from '../assets/images/hero.webp'
import logo from '../assets/images/logo.webp'


const TreeIcon = () => (
    <svg
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        height={24}
        width={24}
        className="fill-white transition-transform"
    >
        <title>Linktree</title>
        <path
            className="fill-white group-hover:fill-[#acdc5c] transition-colors duration-300"
            d="m13.73635 5.85251 4.00467 -4.11665 2.3248 2.3808 -4.20064 4.00466h5.9085v3.30473h-5.9365l4.22865 4.10766 -2.3248 2.3338L12.0005 12.099l-5.74052 5.76852 -2.3248 -2.3248 4.22864 -4.10766h-5.9375V8.12132h5.9085L3.93417 4.11666l2.3248 -2.3808 4.00468 4.11665V0h3.4727zm-3.4727 10.30614h3.4727V24h-3.4727z"
        />
    </svg>
);

const Footer = () => {
    return (
        <>
            <footer class="color-bg-transition z-20 flex flex-col items-start justify-end self-stretch px-layout-responsive-spacing-outer-margin-lg pt-layout-responsive-spacing-outer-margin-lg bg-background-surface border-t border-divider-primary bg-background-surface">
                <div className='flex flex-col '>
                    <div className='flex justify-between items-center'>
                        <div className=''>
                            <img className='!h-8' src={logo} />
                        </div>
                        <div className='flex gap-10 items-center '>
                            <a className='!text-white fa-tiktok' href='https://www.tiktok.com/@dja.y_?_t=ZP-8xQR8EEOyHn&_r=1'><FontAwesomeIcon icon={faTiktok} size="xl" /></a>
                            <a className='!text-white hidden md:block fa-x-twitter' href='https://x.com/Ayo_Akin25'><FontAwesomeIcon icon={faXTwitter} size="xl" /></a>
                            <a className='!text-white fa-instagram' href='https://www.instagram.com/dja.y_?igsh=NGJlYjN2MGNzODBj&utm_source=qr'><FontAwesomeIcon icon={faInstagram} size="xl" /></a>
                            <a className='!text-white hidden md:block fa-youtube' href='https://www.youtube.com/channel/UCQXICi84w_oL0syTdN4J-ng'><FontAwesomeIcon icon={faYoutube} size="xl" /></a>
                            <a className='!text-white hidden md:block fa-soundcloud' href='https://on.soundcloud.com/z8Om6B2OWKwjyVITwb'><FontAwesomeIcon icon={faSoundcloud} size="xl" /></a>
                            <a className='!text-white group' href='https://linktr.ee/dja.yofficial'><TreeIcon /></a>
                        </div>
                    </div>

                    <div className='type-body-sm flex items-end justify-between pb-layout-responsive-spacing-outer-margin-md'>
                        <div className='flex list-none flex-1 flex-wrap items-center gap-x-3 pt-6 '>
                            <a className='!underline'>Privacy Policy</a>
                            <a className='!underline'>Terms of Use</a>
                            <a className='!underline'>License</a>
                        </div>
                        <div className="ml-2 flex items-center justify-center pt-6">
                            <p>
                                <a href="https://github.com/JunoAndIce">  © 2025 Juno / Ediubong Ekwere</a>
                            </p>

                        </div>
                    </div>

                </div>

            </footer>
        </>
    )
}

export default Footer;