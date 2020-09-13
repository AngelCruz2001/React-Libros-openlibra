import React from 'react'
import Lottie from 'react-lottie'
import animationData from './BookAnimation.json'

export const AnimationControler = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <div>
            <Lottie options={defaultOptions}
                height={500}
                width={500}
            />
        </div>
    )
}

