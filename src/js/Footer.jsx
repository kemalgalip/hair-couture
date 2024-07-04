import React from "react";
import { Link } from "react-router-dom";
import logoDark from "../img/hair-couture-logo-dark.png";

export default function Footer() {
    const [newsletterForm, setNewsletterForm] = React.useState("");

    const [newsletterFormSubmitted, setNewsletterFormSubmitted] = React.useState(false);

    function handleNewsletterFormChange(e) {
        const { value } = e.target;
        setNewsletterForm(value);
    }

    function handleNewsletterFormSubmit(e) {
        e.preventDefault();
        if (newsletterForm.length > 0) {
            setNewsletterFormSubmitted(true);
        }
    }

    React.useEffect(() => {
        if (newsletterFormSubmitted) {
            console.log(newsletterForm);
        }
    }, [newsletterFormSubmitted]);

    const date = new Date();

    const year = date.getFullYear();

    return (
        <footer>
            <div className="footer-content-div">
                <div className="footer-pages-div">
                    <h3>Menu</h3>
                    <Link to="/">Home</Link>
                    <Link to="/gallery">Gallery</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </div>
                <div className="footer-contact-div">
                    <h3>Contact</h3>
                    <p>contact@haircouture.com</p>
                    <p>555-555-5555</p>
                </div>
                <div className="footer-newsletter-div">
                    <h3 className="footer-newsletter-h3">Newsletter</h3>
                    <p>Subscribe to our newsletters</p>
                    {newsletterFormSubmitted ? (
                        <p id="footer-success-p">Thank you for subscribing!</p>
                    ) : (
                        <form onSubmit={handleNewsletterFormSubmit}>
                            <input type="email" onChange={handleNewsletterFormChange} value={newsletterForm} />
                            <button>Submit</button>
                        </form>
                    )}
                </div>
                <Link to="/" className="footer-logo-a">
                    <img src={logoDark} width="540" height="242" />
                </Link>
            </div>
            <p>Hair Couture &copy; {year}</p>
        </footer>
    );
}
