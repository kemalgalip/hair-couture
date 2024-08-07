import React from "react";
import { useInView } from "react-intersection-observer";

export default function WhyUs() {
    const { ref: whyUsDivRef, inView } = useInView({
        triggerOnce: true,
        rootMargin: "0px 0px -100px 0px",
    });

    return (
        <section className="why-us-section">
            <div ref={whyUsDivRef} className={inView && "show-element"}>
                <h2>Why Us?</h2>
                <p>
                    Choosing the right hair salon can make all the difference in achieving the look you desire. At our salon, we prioritize quality service and customer
                    satisfaction above all else. Our team of experienced stylists stays up-to-date with the latest trends and techniques, ensuring that you receive the best
                    hair care possible. From haircuts and coloring to styling and treatments, we are committed to helping you achieve your hair goals. Come visit us and
                    experience the difference of a salon that truly cares about you and your hair.
                </p>
            </div>
        </section>
    );
}
