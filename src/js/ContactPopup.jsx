import React from "react";
import successIcon from "../img/svgs/success-icon.svg";

export default function ContactPopup(props) {
    function closeContactPopup() {
        props.closeContactFormSubmittedFunction();
    }

    React.useEffect(() => {
        function handleClickOutside(e) {
            if (props.contactPopupRef.current.classList.contains("active") && !props.contactPopupRef.current.contains(e.target)) {
                props.closeContactFormSubmittedFunction();
            }
        }

        function handleKeyDown(e) {
            if (e.key === "Escape") {
                props.closeContactFormSubmittedFunction();
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
        <div className="contact-popup" ref={props.contactPopupRef}>
            <div
                className="contact-popup-close-button"
                onClick={closeContactPopup}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        closeContactPopup();
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
            <p>We recieved your message.</p>
            <button
                onClick={closeContactPopup}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        closeContactPopup();
                    }
                }}
            >
                Close
            </button>
        </div>
    );
}
