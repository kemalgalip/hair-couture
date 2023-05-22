import React from "react"
import "../css/WhyUs.css"

export default function WhyUs() {
    const whyUsDivRef = React.useRef(null)

    React.useEffect(() => {
        if (whyUsDivRef.current) {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        whyUsDivRef.current.classList.add("show-element")
                    }
                },
                { rootMargin: "0px 0px -100px 0px" }
            )

            observer.observe(whyUsDivRef.current)

            return () => observer.unobserve(whyUsDivRef.current)
        }
    }, [whyUsDivRef.current])

    return (
        <section className="why-us-section">
            <div className="why-us-div" ref={whyUsDivRef}>
                <h2 className="why-us-h2">Why Us?</h2>
                <p className="why-us-p">
                    Choosing the right hair salon can make all the difference in achieving the look you desire. At our salon, we prioritize quality service and customer satisfaction above all else. Our team of experienced stylists stays up-to-date with the latest trends and techniques, ensuring that you receive the best hair care possible. From haircuts and coloring to styling and treatments, we are committed to helping you achieve your hair goals. Come visit us and experience the difference of a salon that truly cares about you and your hair.
                </p>
            </div>
        </section>
    )
}