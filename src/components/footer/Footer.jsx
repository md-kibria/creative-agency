import React from 'react'
import './footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footerSubs">
                <h3>Join with our newsletter to receive our best deal</h3>
                <div className="subsField">
                    <p>You can unsubscribe any time</p>
                    {/* Input Section */}
                    <div className="inputGroup">
                        <input type="text" className="text" placeholder="yourmail@example.com"/>
                        <button className="btnSend">Subscribe</button>
                    </div>
                </div>
            </div>
            <div className="elm">
                {/* About Us Links  */}
                <div className="footerSection">
                    <h2>About US</h2>
                    <ul>
                        <li>
                            <a href="/"> How it works </a>
                        </li>
                        <li>
                            <a href="/"> Testomonial </a>
                        </li>
                        <li>
                            <a href="/"> Carars </a>
                        </li>
                        <li>
                            <a href="/"> Investors </a>
                        </li>
                        <li>
                            <a href="/"> Terms of Services </a>
                        </li>
                    </ul>
                </div>
                {/* Contct Us Links  */}
                <div className="footerSection">
                    <h2>Contact US</h2>
                    <ul>
                        <li>
                            <a href="/"> Contact </a>
                        </li>
                        <li>
                            <a href="/"> Support </a>
                        </li>
                        <li>
                            <a href="/"> Destinations </a>
                        </li>
                        <li>
                            <a href="/"> Sponsorship </a>
                        </li>
                    </ul>
                </div>
                {/* Video Links  */}
                <div className="footerSection">
                    <h2>Videos</h2>
                    <ul>
                        <li>
                            <a href="/"> Submit Video </a>
                        </li>
                        <li>
                            <a href="/"> Ambassadors </a>
                        </li>
                        <li>
                            <a href="/"> Agency </a>
                        </li>
                        <li>
                            <a href="/"> Influencer </a>
                        </li>
                    </ul>
                </div>
                <div className="footerSection">
                    {/* Social Media Links  */}
                    <h2>Social Media</h2>
                    <ul>
                        <li>
                            <a href="/"> Instagram </a>
                        </li>
                        <li>
                            <a href="/"> Facebook </a>
                        </li>
                        <li>
                            <a href="/"> Youtube </a>
                        </li>
                        <li>
                            <a href="/"> Twitter </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footerEnd">
                {/* Logo */}
                <h1>Logo</h1>
                {/* copyright text */}
                <p>&copy;Creative Agency 2021</p>
                <div className="rev">
                    {/* footer social media icons */}
                    <div className="social">
                        <a href="/">
                            <i className="fa fa-facebook"></i>
                        </a>
                        <a href="/">
                            <i className="fa fa-youtube-play"></i>
                        </a>
                        <a href="/">
                            <i className="fa fa-twitter"></i>
                        </a>
                        <a href="/">
                            <i className="fa fa-instagram"></i>
                        </a>
                    </div>
                    {/* copyright text at small devices */}
                    <p>&copy;Creative Agency 2021</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
