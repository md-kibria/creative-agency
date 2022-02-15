import React from 'react'
import ServiceItem from './ServiceItem'
import './services.css'

const Services = () => {
    return (
        <div className="services">
            <h2>Provide Services</h2>
            <div className="servicesContainer">
                {/* Single service item */}
                <ServiceItem 
                    img="home.png" 
                    header="Service Header" 
                    text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos rerum molestias, sint, distinctio facilis dolore placeat quidem consequatur, dicta nostrum maiores nobis" 
                />
                {/* Single service item */}
                <ServiceItem 
                    img="services.png" 
                    header="Service Header" 
                    text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos rerum molestias, sint, distinctio facilis dolore placeat quidem consequatur, dicta nostrum maiores nobis" 
                />
                {/* Single service item */}
                <ServiceItem 
                    img="website.png" 
                    header="Service Header" 
                    text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos rerum molestias, sint, distinctio facilis dolore placeat quidem consequatur, dicta nostrum maiores nobis" 
                />
            </div>
        </div>
    )
}

export default Services
