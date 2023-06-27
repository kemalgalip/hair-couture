import React from "react";

export default function Mission() {
    const missionDivRef = React.useRef(null);

    React.useEffect(() => {
        if (missionDivRef.current) {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        missionDivRef.current.classList.add("show-element");
                    }
                },
                { rootMargin: "0px 0px -100px 0px" }
            );

            observer.observe(missionDivRef.current);

            return () => observer.unobserve(missionDivRef.current);
        }
    }, [missionDivRef.current]);
    return (
        <section className="mission-section">
            <div className="mission-div" ref={missionDivRef}>
                <h2 className="mission-h2">Our Mission</h2>
                <p className="mission-p">
                    At Hair Couture, our mission is to provide our clients with the highest quality hair care services in a welcoming and relaxing environment. We believe that everyone deserves to look and feel their best, and we are dedicated to helping you achieve that.
                    <br></br>
                    <br></br>
                    Our team of experienced and highly trained stylists are passionate about hair care, and stay up-to-date on the latest trends and techniques to ensure that you receive the best possible service. We take the time to listen to your needs and preferences, and work with you to create a personalized look that complements your individual style.
                    <br></br>
                    <br></br>
                    We also believe in using only the highest quality products in our salons, because we know that the health and beauty of your hair is important to you. That's why we partner with top hair care brands to offer you a wide range of options that are tailored to your specific needs.
                    <br></br>
                    <br></br>
                    At Hair Couture, we are committed to making a positive impact on our community. We believe in giving back, and have partnered with various local organizations to support important causes such as cancer research, education, and community outreach programs.
                    <br></br>
                    <br></br>
                    We understand that life can be hectic, which is why we strive to create a relaxing and welcoming environment in our salons. We want you to feel at home, and to leave our salon feeling refreshed and rejuvenated.
                    <br></br>
                    <br></br>
                    Our mission is to exceed your expectations and provide you with an exceptional hair care experience that you will love. Thank you for choosing Hair Couture, and we look forward to helping you look and feel your best.
                </p>
            </div>
        </section>
    );
}
