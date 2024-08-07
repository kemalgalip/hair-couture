import React from "react";
import { useInView } from "react-intersection-observer";
import { availableHours } from "./availableHours";
import servicesProvided from "./servicesProvided";
import successIcon from "../img/svgs/success-icon.svg";

export default function AppointmentForm(props) {
    const { ref: appointmentDivRef, inView } = useInView({
        triggerOnce: true,
        rootMargin: "0px 0px -100px 0px",
    });

    const [appointmentForm, setAppointmentForm] = React.useState({
        firstName: "Kemal",
        lastName: "Galip1",
        emailAddress: "xyz@xyz.com",
        phoneNumber: "555-55515555",
        date: "",
        hour: availableHours[0],
        service: servicesProvided[0],
    });

    const currentDate = new Date();

    const minDate = currentDate.toISOString().substr(0, 10);

    const maxDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 2 > 11 ? 1 : currentDate.getMonth() + 2, 0).toISOString().split("T")[0];

    const availableHoursOptions = availableHours.map((item, idx) => (
        <option key={idx} value={item}>
            {item}
        </option>
    ));

    const servicesProvidedOptions = servicesProvided.map((item, idx) => (
        <option key={idx} value={item}>
            {item}
        </option>
    ));

    function handleAppointmentFormChange(e) {
        const { name, value } = e.target;
        setAppointmentForm((prevForm) => ({ ...prevForm, [name]: value }));
    }

    function handleAppointmentFormSubmit(e) {
        e.preventDefault();
        setAppointmentForm((prevForm) => ({
            ...prevForm,
            firstName: appointmentForm.firstName.trim().replace(/\s{2,}/g, " "),
            lastName: appointmentForm.lastName.trim().replace(/\s{2,}/g, " "),
            phoneNumber: appointmentForm.phoneNumber.replace(/[-. ]/g, ""),
        }));
        props.appointmentFormSubmittedFunction();
    }

    React.useEffect(() => {
        if (props.isAppointmentFormSubmitted) {
            console.log(appointmentForm);
        }
    }, [props.isAppointmentFormSubmitted]);

    return (
        <section className="appointment-section" ref={props.appointmentSectionRef}>
            <div ref={appointmentDivRef} className={`appointment-div ${inView && "show-element"}`}>
                {props.isAppointmentFormSubmitted ? (
                    <div className="div-appointment-form-success">
                        <img src={successIcon} alt="Success" />
                        <p>We recieved your request.</p>
                    </div>
                ) : (
                    <div className="div-appointment-form-form">
                        <h2>Request an appointment</h2>
                        <form onChange={handleAppointmentFormChange} onSubmit={handleAppointmentFormSubmit}>
                            <input
                                type="text"
                                pattern="^\s*[a-zA-Z]+(?:\s+[a-zA-Z]+)*\s*$"
                                id="firstName"
                                name="firstName"
                                value={appointmentForm.firstName}
                                placeholder="First Name"
                                required
                                title="It should contain only letters and spaces"
                            />
                            <input
                                type="text"
                                pattern="^\s*[a-zA-Z]+(?:\s+[a-zA-Z]+)*\s*$"
                                id="lastName"
                                name="lastName"
                                value={appointmentForm.lastName}
                                placeholder="Last Name"
                                required
                                title="It should contain only letters and spaces"
                            />
                            <input type="email" id="emailAddress" name="emailAddress" value={appointmentForm.emailAddress} placeholder="E-Mail Address" required />
                            <input
                                type="tel"
                                pattern="^\s*[0-9]{3}[-. ]?[0-9]{3}[-. ]?[0-9]{4}\s*$"
                                id="phoneNumber"
                                name="phoneNumber"
                                value={appointmentForm.phoneNumber}
                                maxLength="12"
                                placeholder="Phone"
                                required
                                title="(1234567890) or (123(-. )456(-. )7890)"
                            />
                            <input type="date" id="date" name="date" value={appointmentForm.date} min={minDate} max={maxDate} required />
                            <select id="hour" name="hour" value={appointmentForm.hour} required>
                                {availableHoursOptions}
                            </select>
                            <select id="service" name="service" value={appointmentForm.service} required>
                                {servicesProvidedOptions}
                            </select>
                            <button>Request</button>
                        </form>
                        <p>Our team will be in touch with you within 1-2 hours of receiving your request to confirm the appointment or offer alternative options.</p>
                    </div>
                )}
            </div>
        </section>
    );
}
