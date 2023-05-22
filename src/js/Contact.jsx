import React from "react"
import "../css/Contact.css"
import locationIcon from "../img/svgs/location-icon.svg"
import successIcon from "../img/svgs/success-icon.svg"

export default function Contact(props) {
    const contactDivRef = React.useRef(null)
    const formTextareaRef = React.useRef(null)

    const [contactForm, setContactForm] = React.useState({
        firstName: "",
        lastName: "",
        emailAddress: "",
        phoneNumber: "",
        message: ""
    })

    React.useEffect(() => {
        function handleTextareaChange() {
            formTextareaRef.current.style.height = "auto"
            formTextareaRef.current.style.height = formTextareaRef.current.scrollHeight + 2 + "px"
        }

        if (formTextareaRef.current) {
            formTextareaRef.current.addEventListener("input", handleTextareaChange)
        }

        return () => {
            if (formTextareaRef.current) {
                formTextareaRef.current.removeEventListener("input", handleTextareaChange)
            }
        }
    }, [formTextareaRef])

    function handleContactFormChange(e) {
        const { name, value } = e.target
        setContactForm(prevForm => ({...prevForm, [name]: value}))
    }

    function handleContactFormSubmit(e) {
        e.preventDefault()
        if (e.target.message.value.length >= 10) {
            setContactForm(prevForm => ({...prevForm, firstName: contactForm.firstName.trim().replace(/\s{2,}/g, " "), lastName: contactForm.lastName.trim().replace(/\s{2,}/g, " "), phoneNumber: contactForm.phoneNumber.replace(/[-. ]/g, "")}))
            props.contactFormSubmittedFunction()
        } else {
            alert("Message must be at least 10 characters long!")
        }
    }

    React.useEffect(() => {
        if (props.isContactFormSubmitted) {
            console.log(contactForm)
        }
    }, [props.isContactFormSubmitted])

    React.useEffect(() => {
        if (contactDivRef.current) {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        contactDivRef.current.classList.add("show-element")
                    }
                },
                { rootMargin: "0px 0px -100px 0px" }
            )

            observer.observe(contactDivRef.current)

            return () => observer.unobserve(contactDivRef.current)
        }
    }, [contactDivRef.current])

    return (
        <section className="contact-section">
            <div className="contact-div" ref={contactDivRef}>
                <div className="contact-heading">
                    <h2 className="contact-h2">Contact</h2>
                    <a className="contact-location-a" title="See on Google Maps" href="https://www.google.com/maps/@40.747404,-73.9879892,3a,75y,297.15h,94.66t/data=!3m7!1e1!3m5!1sNn14lLoTHosz4cmepfMQjg!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DNn14lLoTHosz4cmepfMQjg%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D86.5599%26pitch%3D0%26thumbfov%3D100!7i16384!8i8192" target="_blank"><img className="contact-location" src={locationIcon} alt="Location Icon" width="800" height="800" /></a>
                </div>
                <div className="contact-address-div">
                    <h4>Address:</h4>
                    <p>1234 Broadway <br></br> New York, NY 10001</p>
                    <h4>E-Mail:</h4>
                    <p>contact@haircouture.com</p>
                    <h4>Phone:</h4>
                    <p>555-555-5555</p>
                </div>
                {props.isContactFormSubmitted ?
                    <div className="div-contact-form-success">
                        <img className="contact-form-success" src={successIcon} alt="Success" />
                        <p className="contact-form-success-p">We recieved your message.</p>
                    </div>
                    :
                    <>
                        <h3 className="contact-form-h3">Do you have questions?</h3>
                        <form className="contact-form" onChange={handleContactFormChange} onSubmit={handleContactFormSubmit}>
                            <div className="contact-form-grid">
                                <input className="contact-form-input" type="text" pattern="^\s*[a-zA-Z]+(?:\s+[a-zA-Z]+)*\s*$" id="firstName" name="firstName" value={contactForm.firstName} placeholder="First Name" required title="It should contain only letters and spaces" />
                                <input className="contact-form-input" type="text" pattern="^\s*[a-zA-Z]+(?:\s+[a-zA-Z]+)*\s*$" id="lastName" name="lastName" value={contactForm.lastName} placeholder="Last Name" required title="It should contain only letters and spaces" />
                                <input className="contact-form-input" type="email" id="emailAddress" name="emailAddress" value={contactForm.emailAddress} placeholder="E-Mail Address" required />
                                <input className="contact-form-input" type="tel" pattern="^\s*[0-9]{3}[-. ]?[0-9]{3}[-. ]?[0-9]{4}\s*$" id="phoneNumber" name="phoneNumber" value={contactForm.phoneNumber} maxLength="12" placeholder="Phone" required title="(1234567890) or (123(-. )456(-. )7890)" />
                            </div>
                            <textarea className="contact-form-textarea" ref={formTextareaRef} name="message" />
                            <div className="contact-form-button-grid">
                                <button className="contact-form-button">Send</button>
                            </div>
                        </form>
                    </>
                }
            </div>
        </section>
    )
}