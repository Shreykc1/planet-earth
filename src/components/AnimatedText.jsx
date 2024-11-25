import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger }from 'gsap/all';
import clsx from "clsx";
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const AnimatedText = ({ title, containerClass }) => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      const titleAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "bottom center",
          toggleActions: "play none none reverse",
        },
      });

      titleAnimation.fromTo(
        ".animated-word",
        {
          opacity: 0,
          transform: "translate3d(0, 50px, 0) rotateY(5deg) rotateX(5deg)",
        },
        {
          opacity: 1,
          transform: "translate3d(0, 0, 0) rotateY(0deg) rotateX(0deg)",
          ease: "power2.out",
          stagger: 0.05,
          duration: 1,
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className={clsx("animated-title", containerClass)}>
      {title.split("<br />").map((line, index) => (
        <div
          key={index}
          className="flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3"
        >
          {line.split(" ").map((word, idx) => (
            <span
              key={idx}
              className="animated-word"
              dangerouslySetInnerHTML={{ __html: word }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default AnimatedText;
