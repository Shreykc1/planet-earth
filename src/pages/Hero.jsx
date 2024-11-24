import { useState, useRef, useEffect } from 'react'
import '../index.css'
import Button from '../components/Button'
import { TiLocationArrow } from 'react-icons/ti';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger }from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);


const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(1);
    const [hasClicked, setHasClicked] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [videosLoaded, setVideosLoaded] = useState(0);

    const totalVideos = 5;
    const nextVideoRef = useRef(null);
    const getVideoSource = (index) => `/videos/hero-${index}.mp4`;
    const upcomingVideoIndex = (currentIndex % (totalVideos)) + 1;


    useEffect(() => {
        if(videosLoaded === totalVideos - 2){
            setIsLoading(false);
        }
    }, [videosLoaded])


    const handleMiniVideoClick = () => {
        setHasClicked(true);

        setCurrentIndex(upcomingVideoIndex);
    }


    const handleVideoLoaded = () => {
        setVideosLoaded((prevCount) => prevCount + 1);
    }


    useGSAP(()=>{
        if(hasClicked){
            gsap.set('#next-video',{ visibility: 'visible' });
            gsap.to('#next-video',{
                transformOrigin: 'center center',
                scale: 1,
                width: '100%',
                height: '100%',
                duration: 0.75,
                ease: 'power1.inOut',
                onStart: () => {
                    nextVideoRef.current.play()
                },
            });

            gsap.from('#current-video',{
                transformOrigin: 'center center',
                scale:0,
                duration: 1.5,
                ease: 'power1.inOut',
            })
        }
    },{dependencies: [currentIndex], revertOnUpdate: true});

    useGSAP(() => {
        gsap.set("#video-frame", {
          clipPath: "polygon(14% 0, 72% 0, 88% 90%, 0 95%)",
          borderRadius: "0% 0% 10% 10%",
        });
        gsap.from("#video-frame", {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          borderRadius: "0% 0% 0% 0%",
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: "#video-frame",
            start: "center center",
            end: "bottom center",
            scrub: true,
          },
        });
      });

  return (
    <div className='relative h-dvh w-screen overflow-x-hidden'>
        {isLoading && (
            <div className='flex-center absolute z-[100] w-screen h-dvh overflow-hidden bg-blue-75' style={{ overflowY: 'hidden' }}>
                <div className='three-body'>
                    <div className="three-body__dot"></div>
                    <div className="three-body__dot"></div>
                    <div className="three-body__dot"></div>
                </div>
            </div>
        )}
        <div id='video-frame' className='relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75'  >
            <div>
                <div className='mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer rounded-lg overflow-hidden' >
                    <div onClick={handleMiniVideoClick} className='origin-center scale-50 opacity-0 transition-all duration-500 ease-in-out hover:scale-100 hover:opacity-100'>
                        <video
                            ref={nextVideoRef}
                            src={getVideoSource(upcomingVideoIndex)}
                            loop
                            muted
                            id='current-video'
                            className='size-64 origin-center scale-150 object-cover object-center'
                            onLoadedData={handleVideoLoaded}
                        />
                    </div>
                </div>
                <video
                    ref={nextVideoRef}
                    src={getVideoSource(currentIndex)}
                    loop
                    muted
                    id='next-video'
                    className='absolute-center invisible absolute z-20 size-64 object-cover object-center'
                    onLoadedData={handleVideoLoaded}
                />

                <video
                    src={getVideoSource(currentIndex === totalVideos ? 1 : currentIndex)}
                    autoPlay
                    loop
                    muted
                    id='background-video'
                    className='absolute left-0 top-0 size-full object-cover object-center'
                    onLoadedData={handleVideoLoaded}
                />
            </div>

            <h1 className='special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-100'>
                EARTH
            </h1>

            <div className='absolute left-0 top-0 size-full z-40'>
                <div className='mt-24 px-5 sm:px-10'>
                    <h1 className='special-font hero-heading text-blue-100'>
                        Planet
                    </h1>
                    <p className='mb-5 max-w-72 font-robert-regular text-blue-100'>
                        Where there is no end to exploration<br />
                        There is no end to discovery
                    </p>

                    <Button id="watch-trailer" title="Watch Trailer" leftIcon={<TiLocationArrow />}
                        containerClass="!bg-green-500 flex-center gap-1"
                    />
                </div>
            </div>
        </div>

        <h1 className='special-font hero-heading absolute bottom-5 right-5 text-black'>
                EARTH
            </h1>

    </div>
  )
}

export default Hero
