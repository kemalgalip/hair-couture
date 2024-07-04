import React from "react";
import AppointmentPopup from "../js/AppointmentPopup";
import ContactPopup from "../js/ContactPopup";
import Header from "../js/Header";
import Blank from "../js/Blank";
import Contact from "../js/Contact";
import FAQ from "../js/FAQ";
import WhyUs from "../js/WhyUs";
import AppointmentForm from "../js/AppointmentForm";
import Brief from "../js/Brief";
import Footer from "../js/Footer";

export default function ContactPage() {
    const headerRef = React.useRef(null);
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

    React.useEffect(() => {
        document.title = "Hair Couture - Contact";
    }, []);

    return (
        <>
            <AppointmentPopup appointmentPopupRef={appointmentPopupRef} closeAppointmentFormSubmittedFunction={closeAppointmentFormSubmittedFunction} />
            <ContactPopup contactPopupRef={contactPopupRef} closeContactFormSubmittedFunction={closeContactFormSubmittedFunction} />
            <Header headerRef={headerRef} />
            <Blank headerRef={headerRef} />
            <section className="body-container">
                <Contact isContactFormSubmitted={isContactFormSubmitted} contactFormSubmittedFunction={contactFormSubmittedFunction} />
                <FAQ />
                <WhyUs />
                <AppointmentForm
                    appointmentSectionRef={appointmentSectionRef}
                    isAppointmentFormSubmitted={isAppointmentFormSubmitted}
                    appointmentFormSubmittedFunction={appointmentFormSubmittedFunction}
                />
                <Brief />
            </section>
            <Footer />
        </>
    );
}
