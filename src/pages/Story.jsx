import gsap from "gsap";
import AnimatedText from "../components/AnimatedText"
import { useRef } from "react"
import RoundedCorners from "../components/RoundedCorners"
import Button from "../components/Button"
const Story = () => {
        const imgRef = useRef('null');
        const handleMouseLeave = () => {
            gsap.to(imgRef.current, {
                duration: 0.3,
                ease: 'power1.inOut',
                rotateX: 0,
                rotateY: 0,
            })
        }
        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            const { width, height, left, top } = imgRef.current.getBoundingClientRect();
            const mouseX = clientX - left;
            const mouseY = clientY - top;
            const centerX = width / 2;
            const centerY = height / 2;
            const rotateX = (mouseY - centerY) / centerY * -10;
            const rotateY = (mouseX - centerX) / centerX * 10;
            // imgRef.current.style.transform = `translate3d(${mouseX / 10}px, ${mouseY / 10}px, 0) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

            gsap.to(imgRef.current, {
                duration: 0.3,
                ease: 'power1.inOut',
                rotateX,
                rotateY,
                transformPerspective: 500,
            })
        }

  return (
    <section id='story' className="min-h-dvh w-screen bg-black text-blue-50">
        <div className="flex size-full flex-col items-center py-10 pb-24">
            <p className="font-general text-sm uppercase md:text-[10px]">Also know as globe</p>
            <div className="relative size-full">
                <AnimatedText
                    title="The Story of a hidden realm"
                    containerClass="!text-white mt-5 pointer-events-none mix-blend-difference relative z-10"
                />

                <div className='story-img-container'>
                    <div className="story-img-mask">
                        <div className="story-img-content">
                            <img
                            onMouseLeave={handleMouseLeave}
                            onMouseUp={handleMouseLeave}
                            onMouseEnter={handleMouseLeave}
                            onMouseMove={handleMouseMove}
                            ref={imgRef}
                            src='/img/earth1.jpg'
                            alt="earth"
                            className="object-contain" />
                        </div>
                    </div>
                    <RoundedCorners />
                </div>
            </div>

            <div className="-mt-80 flex w-full justify-center md:-mt-64 md:me-64 md:justify-end">
                    <div className="flex h-full w-fit flex-col items-center md:items-start">
                        <p className='mt-3 max-w-sm text-center font-circular-web  md:text-start'>
                        The Earth's dimensions are approximately 12,742 kilometers in diameter and 40,075 kilometers in circumference.
                        </p>

                        <Button
                        id="realm-button"
                        title="Discover now"
                        containerClass="mt-5"

                        />
                    </div>
            </div>
        </div>
    </section>
  )
}

export default Story
