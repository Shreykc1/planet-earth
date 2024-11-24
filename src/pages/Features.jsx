import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import BentoCard from '../components/BentoCard'
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
                start:'top center',
                end:'center center',
                toggleActions: 'play none none reverse',
            }
        });

        gsap.to('#facts-text',{
            opacity: 1,
            duration: 1,
            scrollTrigger:{
                trigger:'#facts',
                start:'top center',
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
        <section className='bg-black pb-52' id='facts'>
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
                        <>radiant</>
                    }
                    description='Humans are the most intelligent species on Earth, and we have the ability to shape our environment and create new technologies that can help us explore the planet.'
                    isComingSoon
                />
            </div>
        </section>
    )
}

export default Features
