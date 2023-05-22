import React from "react"
import "../css/ContactPopup.css"
import successIcon from "../img/svgs/success-icon.svg"

export default function ContactPopup(props) {
    function closeContactPopup() {
        props.closeContactFormSubmittedFunction()
    }

    React.useEffect(() => {
        function handleClickOutside(e) {
            if (props.contactPopupRef.current.classList.contains("active") && !props.contactPopupRef.current.contains(e.target)) {
                props.closeContactFormSubmittedFunction()
            }
        }

        function handleKeyDown(e) {
            if (e.key === "Escape") {
                props.closeContactFormSubmittedFunction()
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
        <div className="contact-popup" ref={props.contactPopupRef}>
            <div className="contact-popup-close-button" onClick={closeContactPopup} onKeyDown={(e) => {if (e.key === "Enter") {closeContactPopup()}}} tabIndex={0}>
                <div className="contact-popup-close-button-relative">
                    <div className="contact-popup-close-button-stripe"></div>
                    <div className="contact-popup-close-button-stripe"></div>
                </div>
            </div>
            <img className="contact-popup-success" src={successIcon} alt="Success" />
            <h2 className="contact-popup-h2">Success!</h2>
            <p className="contact-popup-p">We recieved your message.</p>
            <button className="contact-popup-button" onClick={closeContactPopup} onKeyDown={(e) => {if (e.key === "Enter") {closeContactPopup()}}}>Close</button>
        </div>
    )
}