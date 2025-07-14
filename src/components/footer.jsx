import { faChevronDown, faMusic } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboard } from '@fortawesome/free-regular-svg-icons';
import HeroWebp from '../assets/images/hero.webp'

const Footer = () => {

    return (
        <>
            <footer className="footer">
                <div className="content has-text-centered">
                    <p>
                        Site developed using
                        <a href="https://vite.dev"> Vite </a> +
                        <a href="https://react.dev"> React. </a>
                        
                        The source code is licensed by
                        <a href="https://opensource.org/license/mit"> MIT</a>.
                    </p>
                    <p>
                        Created by
                        <a href="https://github.com/JunoAndIce"> Juno</a>.
                    </p>

                </div>
            </footer>
        </>
    )
}

export default Footer;