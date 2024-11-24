import React from 'react'

const Button = ({title, leftIcon, rightIcon, id, containerClass, onClick}) => {
  return (
    <button id={id} className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-blue-50 px-7 py-3 text-black ${containerClass}`} onClick={onClick}>
        {leftIcon}

        <span className='relative inline-flex overflow-hidden font-neue-roman text-xs uppercase'>
            <div>
                {title}
            </div>
        </span>

        {rightIcon}
    </button>
  )
}

export default Button
