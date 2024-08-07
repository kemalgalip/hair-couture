import React from "react";
import { useInView } from "react-intersection-observer";
import faqList from "./faqList";
import arrowRight from "../img/svgs/arrow-chevron-right.svg";

export default function FAQ() {
    const faqQuestionsRef = React.useRef(null);

    const [activeBox, setActiveBox] = React.useState(null);

    const { ref: faqDivRef, inView } = useInView({
        triggerOnce: true,
        rootMargin: "0px 0px -100px 0px",
    });

    React.useEffect(() => {
        function handleClick(e) {
            if (faqQuestionsRef.current && !faqQuestionsRef.current.contains(e.target)) {
                setActiveBox(null);
            }
        }

        function handleKeyDown(e) {
            if (e.key === "Escape") {
                setActiveBox(null);
            }
        }

        window.addEventListener("click", handleClick);
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("click", handleClick);
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    function handleFaqClick(idx) {
        if (activeBox === idx) {
            setActiveBox(null);
        } else {
            setActiveBox(idx);
        }
    }

    return (
        <section className="faq-section">
            <div ref={faqDivRef} className={inView && "show-element"}>
                <h2>FAQs</h2>
                <div ref={faqQuestionsRef}>
                    {faqList.map((faq, idx) => {
                        return (
                            <div
                                key={idx}
                                className={activeBox === idx ? "faq-box active" : "faq-box"}
                                style={{ "--order": idx + 1 }}
                                onClick={() => handleFaqClick(idx)}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") {
                                        handleFaqClick(idx);
                                    }
                                }}
                                tabIndex={0}
                            >
                                <div className="faq-box-row">
                                    <h3 className="faq-box-h3">{faq.question}</h3>
                                    <img className="faq-box-arrow" src={arrowRight} alt="Arrow" width="20" height="20" />
                                </div>
                                <div className="faq-box-answer">
                                    <p>{faq.answer}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
