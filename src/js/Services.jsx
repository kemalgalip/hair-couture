import React from "react";
import { useInView } from "react-intersection-observer";
import arrowDownwards from "../img/svgs/arrow-downward.svg";

export default function Services(props) {
    const { ref: servicesDivRef, inView } = useInView({
        triggerOnce: true,
        rootMargin: "0px 0px -100px 0px",
    });

    function scrollToAppointment(e) {
        const appointmentPosition = props.appointmentSectionRef.current.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: appointmentPosition - props.headerRef.current.offsetHeight, behavior: "smooth" });
        e.target.blur();
    }

    return (
        <section className="services-section">
            <div ref={servicesDivRef} className={inView && "show-element"}>
                <h2>Hair Treatments and Services</h2>
                <div>
                    <div className="services-card-outer" style={{ "--order": 1 }} tabIndex={0}>
                        <div>
                            <h3>Hair Cutting</h3>
                            <p>Unlock your hair's true potential and get a fresh new look</p>
                        </div>
                        <button onClick={scrollToAppointment}>
                            <img src={arrowDownwards} alt="Arrow Downward" width="20" height="20" />
                            <span>Appointment</span>
                        </button>
                    </div>
                    <div className="services-card-outer" style={{ "--order": 2 }} tabIndex={0}>
                        <div>
                            <h3>Hair Styling & Coloring</h3>
                            <p>Transform your look with expert hair styling and coloring</p>
                        </div>
                        <button onClick={scrollToAppointment}>
                            <img src={arrowDownwards} alt="Arrow Downward" width="20" height="20" />
                            <span>Appointment</span>
                        </button>
                    </div>
                    <div className="services-card-outer" style={{ "--order": 3 }} tabIndex={0}>
                        <div>
                            <h3>Hair Care</h3>
                            <p>Nourish and maintain your locks</p>
                        </div>
                        <button onClick={scrollToAppointment}>
                            <img src={arrowDownwards} alt="Arrow Downward" width="20" height="20" />
                            <span>Appointment</span>
                        </button>
                    </div>
                    <div className="services-card-outer" style={{ "--order": 4 }} tabIndex={0}>
                        <div>
                            <h3>Manicure & Pedicure</h3>
                            <p>Polish your look with expert nail styling</p>
                        </div>
                        <button onClick={scrollToAppointment}>
                            <img src={arrowDownwards} alt="Arrow Downward" width="20" height="20" />
                            <span>Appointment</span>
                        </button>
                    </div>
                    <div className="services-card-outer" style={{ "--order": 5 }} tabIndex={0}>
                        <div>
                            <h3>Waxing</h3>
                            <p>Say goodbye to unwanted hair and get smooth, silky skin</p>
                        </div>
                        <button onClick={scrollToAppointment}>
                            <img src={arrowDownwards} alt="Arrow Downward" width="20" height="20" />
                            <span>Appointment</span>
                        </button>
                    </div>
                    <div className="services-card-outer" style={{ "--order": 6 }} tabIndex={0}>
                        <div>
                            <h3>Makeup</h3>
                            <p>Unleash and enhance your natural beauty</p>
                        </div>
                        <button onClick={scrollToAppointment}>
                            <img src={arrowDownwards} alt="Arrow Downward" width="20" height="20" />
                            <span>Appointment</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
