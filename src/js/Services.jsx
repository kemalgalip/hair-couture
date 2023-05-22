import React from "react"
import "../css/Services.css"
import arrowDownwards from "../img/svgs/arrow-downward.svg"

export default function Services(props) {
    const servicesDivRef = React.useRef(null)

    function scrollToAppointment(e) {
        const appointmentPosition = props.appointmentSectionRef.current.getBoundingClientRect().top + window.scrollY
        window.scrollTo({ top: appointmentPosition - props.headerRef.current.offsetHeight, behavior: "smooth" })
        e.target.blur()
    }

    React.useEffect(() => {
        if (servicesDivRef.current) {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        servicesDivRef.current.classList.add("show-element")
                    }
                },
                { rootMargin: "0px 0px -100px 0px" }
            )

            observer.observe(servicesDivRef.current)

            return () => observer.unobserve(servicesDivRef.current)
        }
    }, [servicesDivRef.current])

    return (
        <section className="services-section">
            <div className="services-div" ref={servicesDivRef}>
                <h2 className="services-h2">Hair Treatments and Services</h2>
                <div className="services-cards">
                    <div className="services-card-outer" style={{ "--order": 1 }} tabIndex={0}>
                        <div className="services-card">
                            <h3 className="services-card-h3">Hair Cutting</h3>
                            <p className="services-card-p">Unlock your hair's true potential and get a fresh new look</p>
                        </div>
                        <button className="services-card-button" onClick={scrollToAppointment}>
                            <img className="services-card-button-arrow" src={arrowDownwards} alt="Arrow Downward" width="20" height="20" />
                            <span className="services-card-button-text">Appointment</span>
                        </button>
                    </div>
                    <div className="services-card-outer" style={{ "--order": 2 }} tabIndex={0}>
                        <div className="services-card">
                            <h3 className="services-card-h3">Hair Styling & Coloring</h3>
                            <p className="services-card-p">Transform your look with expert hair styling and coloring</p>
                        </div>
                        <button className="services-card-button" onClick={scrollToAppointment}>
                            <img className="services-card-button-arrow" src={arrowDownwards} alt="Arrow Downward" width="20" height="20" />
                            <span className="services-card-button-text">Appointment</span>
                        </button>
                    </div>
                    <div className="services-card-outer" style={{ "--order": 3 }} tabIndex={0}>
                        <div className="services-card">
                            <h3 className="services-card-h3">Hair Care</h3>
                            <p className="services-card-p">Nourish and maintain your locks</p>
                        </div>
                        <button className="services-card-button" onClick={scrollToAppointment}>
                            <img className="services-card-button-arrow" src={arrowDownwards} alt="Arrow Downward" width="20" height="20" />
                            <span className="services-card-button-text">Appointment</span>
                        </button>
                    </div>
                    <div className="services-card-outer" style={{ "--order": 4 }} tabIndex={0}>
                        <div className="services-card">
                            <h3 className="services-card-h3">Manicure & Pedicure</h3>
                            <p className="services-card-p">Polish your look with expert nail styling</p>
                        </div>
                        <button className="services-card-button" onClick={scrollToAppointment}>
                            <img className="services-card-button-arrow" src={arrowDownwards} alt="Arrow Downward" width="20" height="20" />
                            <span className="services-card-button-text">Appointment</span>
                        </button>
                    </div>
                    <div className="services-card-outer" style={{ "--order": 5 }} tabIndex={0}>
                        <div className="services-card">
                            <h3 className="services-card-h3">Waxing</h3>
                            <p className="services-card-p">Say goodbye to unwanted hair and get smooth, silky skin</p>
                        </div>
                        <button className="services-card-button" onClick={scrollToAppointment}>
                            <img className="services-card-button-arrow" src={arrowDownwards} alt="Arrow Downward" width="20" height="20" />
                            <span className="services-card-button-text">Appointment</span>
                        </button>
                    </div>
                    <div className="services-card-outer" style={{ "--order": 6 }} tabIndex={0}>
                        <div className="services-card">
                            <h3 className="services-card-h3">Makeup</h3>
                            <p className="services-card-p">Unleash and enhance your natural beauty</p>
                        </div>
                        <button className="services-card-button" onClick={scrollToAppointment}>
                            <img className="services-card-button-arrow" src={arrowDownwards} alt="Arrow Downward" width="20" height="20" />
                            <span className="services-card-button-text">Appointment</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}