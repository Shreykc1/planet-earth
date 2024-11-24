

const BentoCard = ({src, alt, title, description, isComingSoon}) => {
  return (
    <div className='relative size-full'>
        <video
        src={src}
        autoPlay
        muted
        loop
        className='absolute left-0 top-0 size-full object-cover object-center'
        />
        <div className='relative z-10 flex size-full flex-col justify-between p-5 text-white'>
            <h1 className='font-neue-bold max-sm:text-4xl text-6xl sm:uppercase' >{title}</h1>
            {description && (
                <p className='mt-3 max-w-64 text-xs md:text-base font-robert-regular'>{description}</p>
            )}
        </div>
    </div>
  )
}

export default BentoCard
