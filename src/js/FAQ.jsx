import React from "react"
import "../css/FAQ.css"
import { faqList } from "./faqList"
import arrowRight from "../img/svgs/arrow-chevron-right.svg"

export default function FAQ() {
    const faqDivRef = React.useRef(null)
    const faqQuestionsRef = React.useRef(null)

    const [activeBox, setActiveBox] = React.useState(null)

    const faqListMapped = faqList.map((faq, idx) => {
        const faqPRef = React.useRef(null)

        const [faqPHeight, setFaqPHeight] = React.useState(null)
      
        React.useLayoutEffect(() => {
            if (faqPRef.current) {
                setFaqPHeight(faqPRef.current.offsetHeight)
            }
        }, [faqPRef.current])

        React.useLayoutEffect(() => {
            function updateFaqPHeight() {
                if (faqPRef.current) {
                    setFaqPHeight(faqPRef.current.offsetHeight)
                }
            }

            window.addEventListener("resize", updateFaqPHeight)
          
            return () => window.removeEventListener("resize", updateFaqPHeight)
        }, [])
      
        return (
            <div key={idx} className={activeBox === idx ? "faq-box active" : "faq-box"} style={{ "--order": idx + 1 }} onClick={() => handleFaqClick(idx)} onKeyDown={(e) => {if (e.key === "Enter") {handleFaqClick(idx)}}} tabIndex={0}>
                <div className="faq-box-row">
                    <h3 className="faq-box-h3">{faq.question}</h3>
                    <img className="faq-box-arrow" src={arrowRight} alt="Arrow" width="20" height="20" />
                </div>
                <div className="faq-box-answer">
                    <p className="faq-box-p" ref={faqPRef} style={{ marginTop: activeBox === idx ? "10px" : `-${faqPHeight + 1}px` }}>
                        {faq.answer}
                    </p>
                </div>
            </div>
        )
    })

    React.useEffect(() => {
        function handleClick(e) {
            if (faqQuestionsRef.current && !faqQuestionsRef.current.contains(e.target)) {
                setActiveBox(null)
            }
        }

        function handleKeyDown(e) {
            if (e.key === "Escape") {
                setActiveBox(null)
            }
        }

        window.addEventListener("click", handleClick)
        window.addEventListener("keydown", handleKeyDown)

        return () => {
            window.removeEventListener("click", handleClick)
            window.removeEventListener("keydown", handleKeyDown)
        }
    }, [])

    function handleFaqClick(idx) {
        if (activeBox === idx) {
            setActiveBox(null)
        } else {
            setActiveBox(idx)
        }
    }

    React.useEffect(() => {
        if (faqDivRef.current) {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        faqDivRef.current.classList.add("show-element")
                    }
                },
                { rootMargin: "0px 0px -100px 0px" }
            )

            observer.observe(faqDivRef.current)

            return () => observer.unobserve(faqDivRef.current)
        }
    }, [faqDivRef.current])

    return (
        <section className="faq-section">
            <div className="faq-div" ref={faqDivRef}>
                <h2 className="faq-h2">FAQs</h2>
                <div className="faq-questions-div" ref={faqQuestionsRef}>
                    {faqListMapped}
                </div>
            </div>
        </section>
    )
}