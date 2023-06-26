import React from "react";
import Header from "../js/Header";
import Blank from "../js/Blank";
import About from "../js/About";
import WhyUs from "../js/WhyUs";
import Mission from "../js/Mission";
import Services from "../js/Services";
import Testimonials from "../js/Testimonials";
import FAQ from "../js/FAQ";
import AppointmentPopup from "../js/AppointmentPopup";
import AppointmentForm from "../js/AppointmentForm";
import Footer from "../js/Footer";

export default function AboutPage() {
    const headerRef = React.useRef(null);
    const appointmentSectionRef = React.useRef(null);

    const [isAppointmentFormSubmitted, setIsAppointmentFormSubmitted] = React.useState(false);

    const appointmentPopupRef = React.useRef(null);

    function appointmentFormSubmittedFunction() {
        appointmentPopupRef.current.classList.add("active");
        setIsAppointmentFormSubmitted(true);
    }

    function closeAppointmentFormSubmittedFunction() {
        appointmentPopupRef.current.classList.remove("active");
    }

    React.useEffect(() => {
        document.title = "Hair Couture - About";
    }, []);

    return (
        <>
            <AppointmentPopup appointmentPopupRef={appointmentPopupRef} closeAppointmentFormSubmittedFunction={closeAppointmentFormSubmittedFunction} />
            <Header headerRef={headerRef} />
            <Blank headerRef={headerRef} />
            <section className="body-container">
                <About />
                <WhyUs />
                <Mission />
                <Services headerRef={headerRef} appointmentSectionRef={appointmentSectionRef} />
                <Testimonials headerRef={headerRef} />
                <FAQ />
                <AppointmentForm appointmentSectionRef={appointmentSectionRef} isAppointmentFormSubmitted={isAppointmentFormSubmitted} appointmentFormSubmittedFunction={appointmentFormSubmittedFunction} />
            </section>
            <Footer />
        </>
    );
}
