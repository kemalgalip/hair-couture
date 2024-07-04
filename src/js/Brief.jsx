import React from "react";
import { useInView } from "react-intersection-observer";

export default function Brief() {
    const { ref: briefDivRef, inView } = useInView({
        triggerOnce: true,
        rootMargin: "0px 0px -100px 0px",
    });

    return (
        <section className="brief-section">
            <div ref={briefDivRef} className={inView && "show-element"}>
                <h2>Brief About Us</h2>
                <p>
                    Our salon has a rich history of providing high-quality hair services to our clients. We have been in the business for over a decade and have built a strong
                    reputation for our skilled stylists, comfortable atmosphere, and exceptional customer service. We are dedicated to making our clients feel confident and
                    beautiful, and we take pride in staying up-to-date with the latest hair trends and techniques. Visit us today to experience the best in hair care.
                </p>
            </div>
        </section>
    );
}
