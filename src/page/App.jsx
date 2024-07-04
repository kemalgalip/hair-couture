import React from "react";
import AppointmentPopup from "../js/AppointmentPopup";
import ContactPopup from "../js/ContactPopup";
import HomeHeader from "../js/HomeHeader";
import Hero from "../js/Hero";
import Services from "../js/Services";
import WhyUs from "../js/WhyUs";
import AppointmentForm from "../js/AppointmentForm";
import Brief from "../js/Brief";
import Testimonials from "../js/Testimonials";
import Contact from "../js/Contact";
import FAQ from "../js/FAQ";
import Footer from "../js/Footer";

export default function App() {
    const homeHeaderRef = React.useRef(null);
    const heroRef = React.useRef(null);
    const appointmentSectionRef = React.useRef(null);

    const [isAppointmentFormSubmitted, setIsAppointmentFormSubmitted] = React.useState(false);
    const [isContactFormSubmitted, setIsContactFormSubmitted] = React.useState(false);

    const appointmentPopupRef = React.useRef(null);
    const contactPopupRef = React.useRef(null);

    function appointmentFormSubmittedFunction() {
        appointmentPopupRef.current.classList.add("active");
        setIsAppointmentFormSubmitted(true);
    }

    function closeAppointmentFormSubmittedFunction() {
        appointmentPopupRef.current.classList.remove("active");
    }

    function contactFormSubmittedFunction() {
        contactPopupRef.current.classList.add("active");
        setIsContactFormSubmitted(true);
    }

    function closeContactFormSubmittedFunction() {
        contactPopupRef.current.classList.remove("active");
    }

    return (
        <>
            <AppointmentPopup appointmentPopupRef={appointmentPopupRef} closeAppointmentFormSubmittedFunction={closeAppointmentFormSubmittedFunction} />
            <ContactPopup contactPopupRef={contactPopupRef} closeContactFormSubmittedFunction={closeContactFormSubmittedFunction} />
            <HomeHeader homeHeaderRef={homeHeaderRef} heroRef={heroRef} />
            <Hero headerRef={homeHeaderRef} heroRef={heroRef} />
            <section className="body-container">
                <Services headerRef={homeHeaderRef} appointmentSectionRef={appointmentSectionRef} />
                <WhyUs />
                <AppointmentForm
                    appointmentSectionRef={appointmentSectionRef}
                    isAppointmentFormSubmitted={isAppointmentFormSubmitted}
                    appointmentFormSubmittedFunction={appointmentFormSubmittedFunction}
                />
                <Brief />
                <Testimonials headerRef={homeHeaderRef} />
                <Contact isContactFormSubmitted={isContactFormSubmitted} contactFormSubmittedFunction={contactFormSubmittedFunction} />
                <FAQ />
            </section>
            <Footer />
        </>
    );
}
