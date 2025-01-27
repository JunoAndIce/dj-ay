import hero_img from "../assets/images/hero_test.webp"

function Hero() {
    return (
        <div data-scroll-container className="hero">
            <div className="hero_ctn">
                <img className="hero_img" src={(hero_img)}></img>
            </div>
        </div>
    );
}

export default Hero;