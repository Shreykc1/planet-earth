import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger }from 'gsap/all';
import AnimatedText from '../components/AnimatedText';
gsap.registerPlugin(ScrollTrigger);

const About = () => {

    useGSAP(() => {
        const clipAnimation = gsap.timeline({
            scrollTrigger: {
                trigger: '#clip',
                start: 'center center',
                end: '+=800 center',
                scrub: true,
                pin: true,
                pinSpacing: true,
            }
        });

        clipAnimation
            .to('.mask-clip-path', {
                width: '100vw',
                height: '100vh',
                borderRadius: 0,
            });

        clipAnimation.to('#centered-text', {
            opacity: 1,
            duration: 0.5,
        })
    })

    return (
    <div id="about" className="min-h-screen w-screen">
        <div className='flex flex-col items-center relative mb-8 mt-36 gap-5 '>
            <h2 className='font-neue-medium text-sm uppercase md:text-[10px]'>
                Welcome to Planet Earth
            </h2>
            {/* <div className='mt-5 text-center text-4xl leading-[0.8] md:text-[6rem] uppercase font-neue-bold'>
                Discover the planet we<br/>live on
            </div> */}
            <AnimatedText title="Discover the planet we live in" containerClass="!font-neue-bold" />
            <div className='about-subtext'>
                <p >
                    We are a team of scientists, researchers, and educators who are passionate about sharing our knowledge of the planet we live on. Our goal is to make science accessible and engaging for everyone, and to inspire a love of learning about our world.
                </p>
            </div>
        </div>
        <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <img
            src="img/about.jpg"
            alt="Background"
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
        <h2 id="centered-text" className="absolute top-[75%] left-[75%] -translate-x-1/2 -translate-y-1/2 text-white text-6xl font-neue-bold text-center opacity-0 z-[200] uppercase">
            Explore the world with life
        </h2>
      </div>
    </div>
  )
}

export default About
