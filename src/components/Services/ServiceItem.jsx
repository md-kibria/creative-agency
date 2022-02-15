import React from 'react'
import './services.css'

function ServiceItem({img, header, text}) {
    return (
        <div className="serviceItem">
            {/* service image */}
            <img src={"./img/" + img} alt=""/>
            {/* service header */}
            <h2>{header}</h2>
            {/* service text */}
            <p>{text}</p>
        </div>
    )
}

export default ServiceItem
