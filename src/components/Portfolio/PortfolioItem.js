import React, { useState } from 'react';
import landingVid from '../../assets/portfolio/landingVid.mp4'

const PortfolioItem = ({ image, heading, text, setSelected, setIsModal, link, video }) => {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false)

    return (
        <div className='flex w-full justify-center items-center flex-col gap-5 cursor-pointer' onClick={() => {
            if (link) {
                window.open(link, '_blank');
            } else if (video) { return } else {
                setSelected({ image, heading })
                setIsModal(true)
            }
        }
        }>
            {video ? isVideoPlaying ? (
                <video src={landingVid} autoPlay controls className="world" />
            ) : (
                <img src={image} alt={heading} className="object-cover" onClick={() => setIsVideoPlaying(!isVideoPlaying)} />
            ) : <img src={image} alt={heading} className='object-cover' />}
            <h2 className='font-bold text-[32px]'>{heading}</h2>
            {text && <p className='font-normal text-sm'>{text}</p>}
        </div>
    )
}

export default PortfolioItem