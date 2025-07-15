import { faChevronDown, faMusic } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboard } from '@fortawesome/free-regular-svg-icons';
import HeroWebp from '../assets/images/hero.webp'
import mix1 from '../assets/images/mix1.webp'
import mix2 from '../assets/images/mix2.webp'

const Music = () => {
    return (
        <>
            <section className='section p-10'>

                <div className='md:px-50'>
                    <div className=''>
                        <p className='md:text-[3rem] text-xl font-extrabold mb-5'>MY MIXES</p>
                        <div className="h-[1px] w-full bg-divider-primary"></div>
                        {/* <p className=''>ANYWHERE</p> */}
                    </div>


                    <div className='m-auto fixed-grid has-5-cols-tablet has-1-cols-mobile !mt-10'>
                        <div className='grid is-gap-5'>

                            <a className='flex flex-col cell cursor-pointer' href='https://youtu.be/Tae95nkZj_o'>
                                <div className='mb-2 aspect-3/2'>
                                    <img className='!h-full w-full rounded-md object-cover' src={mix1} />

                                </div>
                                <p className="type-emphasis-lg">Afrobeats vs Dancehall Mix</p>
                                <p className="type-body-sm">True Colors: Houston</p>
                            </a>

                            <a className='flex flex-col cell cursor-pointer' href='https://youtu.be/U7MXgvYQ2h0'>
                                <div className='mb-2 aspect-3/2'>
                                    <img className='!h-full w-full rounded-md object-cover' src={mix2} />

                                </div>
                                <p className="type-emphasis-lg">DJ A.Y VERSATILE </p>
                                <p className="type-body-sm">Jaiye Room Mix</p>
                            </a>

                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}

export default Music;