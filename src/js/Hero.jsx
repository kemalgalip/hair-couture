import React from "react"
import heroImg from "../img/hair-couture-hero.jpg"
import "../css/Hero.css"

export default function Hero(props) {
    React.useEffect(() => {
        function handleResize() {
            if (props.headerRef && props.heroRef && window.innerWidth <= 500) {
                props.heroRef.current.style.marginTop = props.headerRef.current.offsetHeight + "px"
            } else if (props.headerRef && props.heroRef && window.innerWidth > 500) {
                props.heroRef.current.style.marginTop = 0
            }
        }

        handleResize()

        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [props.headerRef])

    return (
        <section className="hero-section" ref={props.heroRef}>
            <div className="hero-img-div">
                <h1>Get Your Best Look</h1>
                <img src={heroImg} alt="Hero Image" width="3911" height="3100" />
            </div>
        </section>
    )
}