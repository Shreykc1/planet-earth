import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import BentoCard from '../components/BentoCard'
import BentoTilt from '../components/BentoTilt'
import { RiAliensFill } from 'react-icons/ri'
gsap.registerPlugin(ScrollTrigger)


const Features = () => {

    useGSAP(()=>{
        gsap.from('.facts',{
            opacity: 0,
            width: 0,
            duration: 1,
            stagger: 0.5,
            delay: 0.5,
            scrollTrigger:{
                trigger:'#facts',
                start:'top 20%',
                end:'center center',
                toggleActions: 'play none none reverse',
            }
        });

        gsap.to('#facts-text',{
            opacity: 1,
            duration: 1,
            scrollTrigger:{
                trigger:'#facts',
                start:'top 20%',
                end:'center center',
                toggleActions: 'play none none reverse',
            }
        });



        // gsap.to('#facts-numbers',{
        //     x:-250,
        //     duration: 1,
        //     delay: 0.5,
        //     scrollTrigger:{
        //         trigger:'#facts',
        //         start:'top center',
        //         end:'center center',
        //         toggleActions: 'play none none reverse',
        //     }
        // })
    }, [])

    return (
        <section className='bg-black pb-52 p-4' id='facts'>
            <div className='container mx-auto px-3 md:px-10'>
                <div className='px-5 py-32'>
                    <p className='text-white text-center font-circular-web text-4xl uppercase'>
                        Into the depths of the planet
                    </p>
                </div>

                <div className='text-white text-center font-circular-web text-lg opacity-20' id='facts-text'>
                    There are many ways to explore the planet, from the deepest ocean to the highest mountain.
                    From the driest deserts to the deepest oceans, Earth is home to a diverse range of ecosystems that support an incredible array of life. Explore the majestic mountain ranges, vast grasslands, and dense forests that cover our planet.
                    <br />

                    <span className='flex justify-center mt-32' id='facts-numbers'>
                        <span className='font-neue-bold text-8xl text-white'>7</span>
                        <span className='flex flex-col items-start py-4 px-2'>
                            <p className='text-sm -mt-1 uppercase facts '>Continents</p>
                            <p className='text-sm -mt-1 uppercase facts'>Days</p>
                            <p className='text-sm -mt-1 uppercase facts'>Seas</p>
                            <p className='text-sm -mt-1 uppercase facts'>Wonders</p>

                        </span>
                    </span>
                </div>
            </div>

            <div className='border-hsla relative my-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]'>
                <BentoCard
                    src='/videos/deers.mp4'
                    title={
                        <>humans</>
                    }
                    description='Humans are the most intelligent species on Earth, and we have the ability to shape our environment and create new technologies that can help us explore the planet.'
                    isComingSoon
                />
            </div>
            <div className='grid h-[135vh] grid-cols-2 grid-rows-3 gap-7 ' id='bento'>
                    <BentoTilt className='bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2'>
                        <BentoCard
                            src='/videos/greenary.mp4'
                            title={
                                <>animals</>
                            }
                            description={`Earth is home to a vast array of animals, from the majestic lions of the savannah to the tiny insects that inhabit our gardens. Each species plays a vital role in the ecosystem, and their diversity is a testament to the planet's incredible biodiversity.`}
                            isComingSoon
                        />
                    </BentoTilt>

                    <BentoTilt className='bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0'>
                        <BentoCard
                            src='/videos/hero-3.mp4'
                            title={
                                <>plants</>
                            }
                            description='Earth is home to a vast array of plants, trees, and greenery, from the towering forests to the smallest microorganisms. These organisms play a crucial role in sustaining life on our planet, providing oxygen, food, and habitats for countless species.'
                            isComingSoon
                        />
                    </BentoTilt>
                    <BentoTilt className='bento-tilt_1 me-14 md:col-span-1 md:me-0'>
                        <BentoCard
                            src='/videos/hero-3.mp4'
                            title={
                                <>places</>
                            }
                            description={`Earth is home to countless breathtaking destinations that bring people joy and contribute to the planet's beauty. From the majestic mountain ranges to the serene beaches, these places not only uplift our spirits but also inspire us to protect and preserve our planet for future generations.`}
                            isComingSoon
                        />
                    </BentoTilt>
                    <BentoTilt className='bento-tilt_2 '>
                            <div className='flex size-full justify-between bg-green-500 p-5'>
                                <h1 className='bento-title max-w-64 text-black'>
                                    More Coming Soon!
                                </h1>
                                <RiAliensFill className='m-5 scale-[5] self-end'/>
                                {/* <TiLocationArrow className='m-5 scale-[5] self-end'/> */}

                            </div>
                    </BentoTilt>
                            <BentoTilt className='size-full bento-tilt_2'>
                                <img src="/img/alien.jpg" alt="alien" className='size-full object-cover' id='alien'/>

                            </BentoTilt>
            </div>
        </section>
    )
}

export default Features
