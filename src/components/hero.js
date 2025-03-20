import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import useTypedText from '../hooks/useTyped';
import video from "../assets/video/ek.mp4";

function Hero() {
  const typedRef = useTypedText([
    '<i>Creative Director</i>',
    '<i>Graphic Designer</i>',
    '<i>Photographer</i>',
    '<i>Videographer</i>',
    '<i>Multidisciplinary</i>'
  ]);

  return (
    <section className="hero">
      <div className="relative flex justify-center min-h-screen min-w-[100vw] md:items-center">
        {/* Video Background */}
        <video className='videoTag fixed object-cover h-screen w-screen z-[-1000]' autoPlay muted loop playsInline title="Background Video">
          <source src={video} type='video/mp4' />
        </video>

        {/* Hero Title/SubT */}
        <div className="hero_ctn items-center justify-center flex flex-col gap-y-[250px]">
          <div className="flex flex-col items-center">
            <h1 className="text-8xl">Ekdsgn</h1>
            <div><span ref={typedRef} className="typed description"></span></div>
          </div>

          {/* <FontAwesomeIcon icon={faArrowDown} bounce /> */}
        </div>
      </div>
    </section>
  );
}

export default Hero;
