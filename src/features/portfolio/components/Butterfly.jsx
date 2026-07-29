import React from 'react'
import { default as Lottie } from 'lottie-react';
import butterflyData from "../../../assets/Butterfly(1).json"; 

export default function Butterfly({size}) {
    const LottieComponent = Lottie.default || Lottie;
  return (
    <>
        <div className={`w-${size} h-${size}`}>
            <LottieComponent animationData={butterflyData} loop={true} />
        </div>
    
    </>
  )
}
