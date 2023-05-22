import React from "react"
import "../css/AppointmentPopup.css"
import successIcon from "../img/svgs/success-icon.svg"

export default function AppointmentPopup(props) {
    function closeAppointmentPopup() {
        props.closeAppointmentFormSubmittedFunction()
    }

    React.useEffect(() => {
        function handleClickOutside(e) {
            if (props.appointmentPopupRef.current.classList.contains("active") && !props.appointmentPopupRef.current.contains(e.target)) {
                props.closeAppointmentFormSubmittedFunction()
            }
        }

        function handleKeyDown(e) {
            if (e.key === "Escape") {
                props.closeAppointmentFormSubmittedFunction()
            }
        }

        window.addEventListener("click", handleClickOutside)
        window.addEventListener("keydown", handleKeyDown)

        return () => {
            window.removeEventListener("click", handleClickOutside)
            window.removeEventListener("keydown", handleKeyDown)
        }
    }, [])

    return (
        <div className="appointment-popup" ref={props.appointmentPopupRef}>
            <div className="appointment-popup-close-button" onClick={closeAppointmentPopup} onKeyDown={(e) => {if (e.key === "Enter") {closeAppointmentPopup()}}} tabIndex={0}>
                <div className="appointment-popup-close-button-relative">
                    <div className="appointment-popup-close-button-stripe"></div>
                    <div className="appointment-popup-close-button-stripe"></div>
                </div>
            </div>
            <img className="appointment-popup-success" src={successIcon} alt="Success" />
            <h2 className="appointment-popup-h2">Success!</h2>
            <p className="appointment-popup-p">We recieved your request.</p>
            <button className="appointment-popup-button" onClick={closeAppointmentPopup} onKeyDown={(e) => {if (e.key === "Enter") {closeAppointmentPopup()}}}>Close</button>
        </div>
    )
}