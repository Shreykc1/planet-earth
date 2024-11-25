import React, { useState, useRef } from 'react'

const BentoTilt = ({children, className=''}) => {
    const [transformStyle, setTransformStyle] = useState('');
    const itemRef = useRef(null);

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const { height, width, left, top } = itemRef.current.getBoundingClientRect();
        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);
        setTransformStyle(`perspective(2000px) rotateX(${y / 40}deg) rotateY(${x / 40}deg) scale3d(0.98, 0.98, 0.98)`); //NOTE: Reduce tilt by dividing for eg 40
    };

    const handleMouseLeave = () => {
        setTransformStyle('');
    };

  return (
    <div style={{ transform: transformStyle }} className={className} ref={itemRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
        {children}
    </div>
  )
}

export default BentoTilt
