import React from 'react'
import './works.css'

const Works = () => {

    // carousel right button haneler
    const handleRightClick = () => {
        const container = document.getElementsByClassName('worksContainer')[0]

        let ofl = container.offsetLeft

        if (container.offsetWidth - window.innerWidth >= Math.abs(container.offsetLeft)) {
            container.style.marginLeft = ofl + (-(window.innerWidth / 2)) + 'px';
        } else {
            container.style.marginLeft = 0 + 'px';
        }
    }

    // carousel left button haneler
    const handleLeftClick = () => {
        const container = document.getElementsByClassName('worksContainer')[0]

        let ofl = container.offsetLeft

        if (container.offsetLeft <= 0) {
            container.style.marginLeft = ofl + (window.innerWidth / 2) + 'px';
        } else {
            container.style.marginLeft = '-100%';
        }
    }

    return (
        <div className="works">
            <h2>Our Works</h2>
            {/* ⚠ this is my custom carousel so ther are some 👉 mistake 👈 */}
            <div className="worksContainer">
                {/* carousel item */}
                <div className="workItem">
                    <img src="./works/1.jpg" alt="" />
                    <div className="desc">
                        <h2>Lorem ipsum dolor sit</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione dolore necessitatibus recusandae qui tempora eligendi iusto neque repellat quo explicabo</p>
                        <div className="links">
                            <a href="/" className="link">
                                <i className="fa fa-behance"></i>
                            </a>
                            <a href="/" className="link">
                                <i className="fa fa-link"></i>
                            </a>
                            <a href="/" className="link">
                                <i className="fa fa-github"></i>
                            </a>
                        </div>
                    </div>
                </div>
                {/* carousel item */}
                <div className="workItem">
                    <img src="./works/2.jpg" alt="" />
                    <div className="desc">
                        <h2>Lorem ipsum dolor sit</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione dolore necessitatibus recusandae qui tempora eligendi iusto neque repellat quo explicabo</p>
                        <div className="links">
                            <a href="/" className="link">
                                <i className="fa fa-behance"></i>
                            </a>
                            <a href="/" className="link">
                                <i className="fa fa-link"></i>
                            </a>
                            <a href="/" className="link">
                                <i className="fa fa-github"></i>
                            </a>
                        </div>
                    </div>
                </div>
                {/* carousel item */}
                <div className="workItem">
                    <img src="./works/6.jpg" alt="" />
                    <div className="desc">
                        <h2>Lorem ipsum dolor sit</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione dolore necessitatibus recusandae qui tempora eligendi iusto neque repellat quo explicabo</p>
                        <div className="links">
                            <a href="/" className="link">
                                <i className="fa fa-behance"></i>
                            </a>
                            <a href="/" className="link">
                                <i className="fa fa-link"></i>
                            </a>
                            <a href="/" className="link">
                                <i className="fa fa-github"></i>
                            </a>
                        </div>
                    </div>
                </div>
                {/* carousel item */}
                <div className="workItem">
                    <img src="./works/4.jpg" alt="" />
                    <div className="desc">
                        <h2>Lorem ipsum dolor sit</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione dolore necessitatibus recusandae qui tempora eligendi iusto neque repellat quo explicabo</p>
                        <div className="links">
                            <a href="/" className="link">
                                <i className="fa fa-behance"></i>
                            </a>
                            <a href="/" className="link">
                                <i className="fa fa-link"></i>
                            </a>
                            <a href="/" className="link">
                                <i className="fa fa-github"></i>
                            </a>
                        </div>
                    </div>
                </div>
                {/* carousel item */}
                <div className="workItem">
                    <img src="./works/5.jpg" alt="" />
                    <div className="desc">
                        <h2>Lorem ipsum dolor sit</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione dolore necessitatibus recusandae qui tempora eligendi iusto neque repellat quo explicabo</p>
                        <div className="links">
                            <a href="/" className="link">
                                <i className="fa fa-behance"></i>
                            </a>
                            <a href="/" className="link">
                                <i className="fa fa-link"></i>
                            </a>
                            <a href="/" className="link">
                                <i className="fa fa-github"></i>
                            </a>
                        </div>
                    </div>
                </div>
                {/* carousel item */}
                <div className="workItem">
                    <img src="./works/3.jpg" alt="" />
                    <div className="desc">
                        <h2>Lorem ipsum dolor sit</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione dolore necessitatibus recusandae qui tempora eligendi iusto neque repellat quo explicabo</p>
                        <div className="links">
                            <a href="/" className="link">
                                <i className="fa fa-behance"></i>
                            </a>
                            <a href="/" className="link">
                                <i className="fa fa-link"></i>
                            </a>
                            <a href="/" className="link">
                                <i className="fa fa-github"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* carousel buttons */}
            <div className="btns">
                <button className="left" onClick={handleLeftClick}>
                    <i className="fa fa-chevron-left"></i>
                </button>
                <button className="right" onClick={handleRightClick}>
                    <i className="fa fa-chevron-right"></i>
                </button>
            </div>
        </div>
    )
}

export default Works
