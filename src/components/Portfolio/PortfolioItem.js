import React from 'react'

const PortfolioItem = ({ image, heading, text, setSelected, setIsModal }) => {
    return (
        <div className='flex w-full justify-center items-center flex-col gap-5 cursor-pointer' onClick={() => {
            setSelected({ image, heading })
            setIsModal(true)
        }
        }>
            <img src={image} alt={heading} className='object-cover' />
            <h2 className='font-bold text-[32px]'>{heading}</h2>
            {text && <p className='font-normal text-sm'>{text}</p>}
        </div>
    )
}

export default PortfolioItem