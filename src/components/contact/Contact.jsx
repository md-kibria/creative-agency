import React, { useState } from 'react'
import './contact.css'

const Contact = () => {

    // States
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [msg, setMsg] = useState('')

    // submit handler
    const submitHandler = event => {
        event.preventDefault()

        let data = {name, email, msg}

        console.log(data)
    }

    return (
        <div className="contact">
            {/* contact section description */}
            <div className="contactDesc">
                <h2>Lets contact with us at any time or any moment</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor explicabo, recusandae inventore consecteture</p>
            </div>
            <form className="contactField" onSubmit={submitHandler}>
                {/* contact seciton name field */}
                <input 
                    onChange={e => setName(e.target.value)} 
                    value={name} 
                    type="text" 
                    className="formControl" 
                    name="name" 
                    placeholder="Your name" 
                />
                {/* contact seciton email field */}
                <input 
                    onChange={e => setEmail(e.target.value)} 
                    value={email} 
                    type="text" 
                    className="formControl" 
                    name="email" 
                    placeholder="Your mail" 
                />
                {/* contact seciton message field */}
                <textarea
                    onChange={e => setMsg(e.target.value)}
                    value={msg}
                    name="msg"
                    id=""
                    cols="30"
                    rows="10"
                    className="formControl"
                    placeholder="Your message"
                />
                <button className="send" type="submit">Send</button>
            </form>
        </div>
    )

}

export default Contact
