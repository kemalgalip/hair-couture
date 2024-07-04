import React from "react";
import { useInView } from "react-intersection-observer";

export default function About() {
    const { ref: aboutDivRef, inView } = useInView({
        triggerOnce: true,
        rootMargin: "0px 0px -100px 0px",
    });

    return (
        <section className="about-section">
            <div ref={aboutDivRef} className={`about-div ${inView && "show-element"}`}>
                <h2 className="about-h2">About Us</h2>
                <p className="about-p">
                    At Hair Couture, we have been providing quality hair care services to our clients for over 100 years. Our journey began with a simple vision: to create a
                    salon experience that was both luxurious and affordable.
                    <br></br>
                    <br></br>
                    In 1920, we opened our first salon in New York, with a team of highly skilled and trained stylists who shared our vision. Our commitment to providing the
                    highest level of service and care quickly earned us a reputation as one of the best salons in the area.
                    <br></br>
                    <br></br>
                    Over the years, we have continued to expand and grow our business, while staying true to our core values of quality, affordability, and exceptional
                    customer service. Today, we employ over 50 talented and dedicated professionals.
                    <br></br>
                    <br></br>
                    We offer a wide range of hair care services, including cutting, styling, coloring, and treatments. Our team of stylists are trained in the latest
                    techniques and trends, and use only the highest quality products to ensure that your hair looks and feels its best.
                    <br></br>
                    <br></br>
                    At Hair Couture, we believe that every client is unique, and we take the time to listen to your needs and preferences before recommending any services. We
                    strive to create a relaxing and welcoming environment in our salons, where you can unwind and leave the stresses of everyday life behind.
                    <br></br>
                    <br></br>
                    Our commitment to our clients goes beyond just providing exceptional hair care services. We are also dedicated to giving back to the community, and have
                    partnered with various local organizations to support important causes.
                    <br></br>
                    <br></br>
                    We are proud of our history and the reputation we have built, but we are always looking towards the future. Our goal is to continue to provide our clients
                    with the best possible experience, while staying at the forefront of the hair care industry.
                    <br></br>
                    <br></br>
                    Thank you for choosing Hair Couture. We look forward to serving you and helping you look and feel your best.
                </p>
            </div>
        </section>
    );
}
