import React from 'react'
import './heroSection.css'

const HeroSection = () => {
    return (
        <>
            <div className="heroSection">
                {/* text section */}
                <div className="textSection">
                    <h1>Lorem ipsum dolor sit amet consectetur elit quam elit adipisicing </h1>
                    <hr />
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi enim quibusdam quaerat porro iusto facilis dolorum atque totam dolorem</p>
                    <button>Learn More</button>
                </div>
                {/* image section */}
                <div className="imgSection">
                    <img src="./img/hero.png" alt="" />
                </div>
            </div>
            <img className='heroBottomImg' src="./img/hero.svg" alt="" />
        </>
    )
}

export default HeroSection
