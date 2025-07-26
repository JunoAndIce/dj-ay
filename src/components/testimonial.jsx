import { faChevronDown, faMusic } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboard } from '@fortawesome/free-regular-svg-icons';
import HeroWebp from '../assets/images/hero.webp'
import Casting from '../assets/images/casting.webp'
import Apparel from '../assets/images/apparel.webp'
import RVeggies from '../assets/images/rveggies.webp'
import festival from '../assets/images/Festival.webp'
import Norsu from '../assets/images/norsu-logo.webp'
const Testimonials = () => {
    return (
        <>
            <section className='section'>

                <div className='md:px-15 lg:px-35'>
                    <div className="mb-12 relative">
                        <figure className='image absolute brightness-35'>
                            <img
                                src={festival}
                                className='aspect-2/3 md:aspect-6/3 w-full h-full object-cover object-[center_45%]'
                            />
                        </figure>
                        <div className='absolute bottom-3 px-3 '>
                            <div className='flex flex-col gap-3 md:w-200 md:p-20'>
                                <figure className='image is-128x128 is-hidden-tablet'>
                                    <img className='' src={Norsu} />
                                </figure>
                                <figure className='image is-hidden-mobile'>
                                    <img className='' src={Norsu} />
                                </figure>
                                <div className=''>
                                    <p className="type-body-md-special text-white mb-4">From our very first pop-up, DJ A.Y understood what Norsu stands for—bold presence,
                                        creative flow, and unapologetic style. His sound elevated our spaces, turned casual shoppers into loyal fans,
                                        and made every event feel like a movement. There’s a reason we keep bringing him back:
                                        he doesn’t just play music—he builds moments that people remember.</p>
                                        <p className="type-body-md-special ">
                                        <strong className="font-bold">Clothing Brand<br />Hwy 6 Studios Brand
                                            <a className="underline" href="https://www.hwy6studios.com" target="_blank" rel="noopener noreferrer">
                                            </a>
                                        </strong>
                                    </p>
                                </div>
                            </div>


                        </div>
                    </div>
                    <div className="flex w-full flex-col gap-8 rounded-lg sm:flex-row">
                        <div className="aspect-square w-full flex-shrink-0 sm:min-w-[50%] sm:max-w-[50%] md:w-[344px] md:min-w-[344px] lg:w-[408px] lg:min-w-[408px]">
                            <img alt="Lucky Zhang" loading="lazy" width="1224" height="1224" decoding="async" data-nimg="1" className="h-full w-full rounded-lg object-cover" src={Casting} style={{ color: 'transparent' }} />
                        </div>
                        <div className="flex flex-col gap-3 sm:flex-1">
                            <p className="type-headline-sm ">“DJ A.Y is unmatched. From concept to crowd, he brings a sound that elevates everything.</p>
                            <div className="type-body-md max-w-[600px]">
                                <div className="rich-text">
                                    <p className="type-body-md mb-4">
                                        At Hwy 6 Studios, we collaborate with artists who bring something rare to the table—vision, versatility, and velocity.
                                        DJ A.Y doesn’t just bring the energy—he is the energy.
                                        Whether we’re producing a late-night shoot, curating a sound for a high-concept campaign,
                                        or building an immersive live experience, DJ A.Y consistently delivers soundscapes that elevate the moment and leave a lasting impression.
                                        His ability to read the room, blend genres seamlessly, and hype a crowd with both precision and passion is unmatched.
                                        We’ve watched him turn ideas into anthems and venues into unforgettable memories.
                                        DJ A.Y isn’t just part of the culture—he pushes it forward.”</p>
                                    <p className="type-body-md mb-4">
                                        <strong className="font-bold">HWY  6 Studios<br />Creative Direction Team
                                            <a className="underline" href="https://www.hwy6studios.com" target="_blank" rel="noopener noreferrer">
                                            </a>
                                        </strong>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex w-full flex-col gap-8 rounded-lg sm:flex-row-reverse mt-3 border-t border-divider-primary pt-6">
                        <div className="aspect-square w-full flex-shrink-0 sm:min-w-[50%] sm:max-w-[50%] md:w-[344px] md:min-w-[344px] lg:w-[408px] lg:min-w-[408px]">
                            <img alt="Lucky Zhang" loading="lazy" width="1224" height="1224" decoding="async" data-nimg="1" className="h-full w-full rounded-lg object-cover" src={Apparel} style={{ color: 'transparent' }} />
                        </div>
                        <div className="flex flex-col gap-3 sm:flex-1">
                            <p className="type-headline-sm ">“DJ A.Y sets the tone—every time.</p>
                            <div className="type-body-md max-w-[600px]">
                                <div className="rich-text">
                                    <p className="type-body-md mb-4">When we host an event, it’s more than just a gathering—it’s a statement.
                                        DJ A.Y understood that immediately. His ability to read the room, adapt on the fly,
                                        and keep the energy elevated from start to finish was exactly what we needed.
                                        Whether it was a runway show or a private launch, he delivered with precision,
                                        style, and an unmistakable vibe that matched our brand perfectly.
                                        DJ A.Y isn’t just a DJ—he’s a creative partner who brings the experience to life.</p>
                                    <p className="type-body-md mb-4">
                                        <strong className="font-bold">Special Apparel Needs<br />Non-Profit Donation Group
                                            <a className="underline" href="https://www.hwy6studios.com" target="_blank" rel="noopener noreferrer">
                                            </a>
                                        </strong>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex w-full flex-col gap-8 rounded-lg sm:flex-row mt-3 border-t border-divider-primary pt-6">
                        <div className="aspect-square w-full flex-shrink-0 sm:min-w-[50%] sm:max-w-[50%] md:w-[344px] md:min-w-[344px] lg:w-[408px] lg:min-w-[408px]">
                            <img alt="Lucky Zhang" loading="lazy" width="1224" height="1224" decoding="async" data-nimg="1" className="h-full w-full rounded-lg object-cover" src={RVeggies} style={{ color: 'transparent' }} />
                        </div>
                        <div className="flex flex-col gap-3 sm:flex-1">
                            <p className="type-headline-sm ">“Fresh vibes meet fresh produce.</p>
                            <div className="type-body-md max-w-[600px]">
                                <div className="rich-text">
                                    <p className="type-body-md mb-4">
                                        At Rena’s Veggies, we believe good food and good music go hand in hand—and DJ A.Y brought both to life at our community market events.
                                        His sets were vibrant, inviting, and perfectly tuned to our crowd. Families lingered longer, energy stayed high, and the whole space felt alive.
                                        He’s not just spinning tracks—he’s cultivating atmosphere. We can’t wait to have him back.”</p>
                                    <p className="type-body-md mb-4">
                                        <strong className="font-bold">Rena’s Veggies<br />Catering Business
                                            <a className="underline" href="https://www.hwy6studios.com" target="_blank" rel="noopener noreferrer">
                                            </a>
                                        </strong>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Testimonials;