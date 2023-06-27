import React from "react";

export default function Brief() {
    const briefDivRef = React.useRef(null);

    React.useEffect(() => {
        if (briefDivRef.current) {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        briefDivRef.current.classList.add("show-element");
                    }
                },
                { rootMargin: "0px 0px -100px 0px" }
            );

            observer.observe(briefDivRef.current);

            return () => observer.unobserve(briefDivRef.current);
        }
    }, [briefDivRef.current]);

    return (
        <section className="brief-section">
            <div ref={briefDivRef}>
                <h2>Brief About Us</h2>
                <p>Our salon has a rich history of providing high-quality hair services to our clients. We have been in the business for over a decade and have built a strong reputation for our skilled stylists, comfortable atmosphere, and exceptional customer service. We are dedicated to making our clients feel confident and beautiful, and we take pride in staying up-to-date with the latest hair trends and techniques. Visit us today to experience the best in hair care.</p>
            </div>
        </section>
    );
}
