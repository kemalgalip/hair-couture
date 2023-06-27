import React from "react";
import successIcon from "../img/svgs/success-icon.svg";

export default function AppointmentPopup(props) {
    function closeAppointmentPopup() {
        props.closeAppointmentFormSubmittedFunction();
    }

    React.useEffect(() => {
        function handleClickOutside(e) {
            if (props.appointmentPopupRef.current.classList.contains("active") && !props.appointmentPopupRef.current.contains(e.target)) {
                props.closeAppointmentFormSubmittedFunction();
            }
        }

        function handleKeyDown(e) {
            if (e.key === "Escape") {
                props.closeAppointmentFormSubmittedFunction();
            }
        }

        window.addEventListener("click", handleClickOutside);
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("click", handleClickOutside);
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    return (
        <div className="appointment-popup" ref={props.appointmentPopupRef}>
            <div
                className="appointment-popup-close-button"
                onClick={closeAppointmentPopup}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        closeAppointmentPopup();
                    }
                }}
                tabIndex={0}
            >
                <div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <img src={successIcon} alt="Success" />
            <h2>Success!</h2>
            <p>We recieved your request.</p>
            <button
                onClick={closeAppointmentPopup}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        closeAppointmentPopup();
                    }
                }}
            >
                Close
            </button>
        </div>
    );
}
