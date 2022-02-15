import { Avatar } from '@material-ui/core'
import React from 'react'
import './feedbacks.css'

const Feedbacks = () => {
    return (
        <div className="feedbacks">
            <h2>Clients Feedbacks</h2>
            <div className="feedbackContainer">
                {/* single feedback */}
                <div className="feedbackItem">
                    <div className="feedbackInfo">
                        {/* feedback user info */}
                        <Avatar src="" alt="Emon Ali"> E </Avatar>
                        <div className="text">
                            <h3>Emon Ali</h3>
                            <p>CEO of something</p>
                        </div>
                    </div>
                    {/* user feedback text */}
                    <div className="feedbackDesc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt aut dolore eos! Magnam eveniet quasi quibusdam cum, a aliquam minima labore quaerat.
                    </div>
                </div>
                {/* single feedback */}
                <div className="feedbackItem">
                    <div className="feedbackInfo">
                        {/* feedback user info */}
                        <Avatar src="" alt="Nadim Khan"> N </Avatar>
                        <div className="text">
                            <h3>Nadim Khan</h3>
                            <p>CEO of something</p>
                        </div>
                    </div>
                    {/* user feedback text */}
                    <div className="feedbackDesc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt aut dolore eos! Magnam eveniet quasi quibusdam cum, a aliquam minima labore quaerat.
                    </div>
                </div>
                {/* single feedback */}
                <div className="feedbackItem">
                    <div className="feedbackInfo">
                        {/* feedback user info */}
                        <Avatar src="" alt="John Doe"> J </Avatar>
                        <div className="text">
                            <h3>John Doe</h3>
                            <p>CEO of something</p>
                        </div>
                    </div>
                    {/* user feedback text */}
                    <div className="feedbackDesc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt aut dolore eos! Magnam eveniet quasi quibusdam cum, a aliquam minima labore quaerat.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feedbacks
