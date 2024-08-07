import React from "react";
import { useInView } from "react-intersection-observer";
import img1 from "../img/profiles/1.jpg";
import img2 from "../img/profiles/2.jpg";
import img3 from "../img/profiles/3.jpg";
import img4 from "../img/profiles/4.jpg";
import img5 from "../img/profiles/5.jpg";
import img6 from "../img/profiles/6.jpg";
import img7 from "../img/profiles/7.jpg";
import img8 from "../img/profiles/8.jpg";
import img9 from "../img/profiles/9.jpg";
import img10 from "../img/profiles/10.jpg";
import img11 from "../img/profiles/11.jpg";
import img12 from "../img/profiles/12.jpg";

export default function Testimonials(props) {
    const testimonialsSectionRef = React.useRef(null);
    const testimonialsRef = React.useRef(null);

    const [isShowAll, setIsShowAll] = React.useState(false);

    const { ref: testimonialsDivRef, inView } = useInView({
        triggerOnce: true,
        rootMargin: "0px 0px -100px 0px",
    });

    function showButton() {
        if (testimonialsRef.current.classList.contains("show")) {
            const testimonialsPosition = testimonialsSectionRef.current.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({ top: testimonialsPosition - props.headerRef.current.offsetHeight, behavior: "smooth" });
            testimonialsRef.current.classList.remove("show");
            setIsShowAll(false);
        } else {
            testimonialsRef.current.classList.add("show");
            setIsShowAll(true);
        }
    }

    return (
        <section className="testimonials-section" ref={testimonialsSectionRef}>
            <div ref={testimonialsDivRef} className={`testimonials-div ${inView && "show-element"}`}>
                <h2 className="testimonials-h2">Hear from Customers</h2>
                <div className="testimonials-testimonials" ref={testimonialsRef}>
                    <div className="testimonials-testimonial">
                        <img src={img1} alt="Profile Picture" width="250" height="250" />
                        <h4>Sarah</h4>
                        <h3>&ldquo;Amazing Experience&ldquo;</h3>
                        <p>
                            &ldquo;I had an amazing experience at this hair salon! The stylists were professional and friendly, and they listened to my requests. I walked out
                            feeling confident and beautiful.&rdquo;
                        </p>
                    </div>
                    <div className="testimonials-testimonial">
                        <img src={img2} alt="Profile Picture" width="250" height="250" />
                        <h4>Jessica</h4>
                        <h3>&ldquo;Love My Hair&ldquo;</h3>
                        <p>
                            &ldquo;I absolutely love my new haircut! The stylist was able to perfectly capture the look I wanted. I've received so many compliments on my hair
                            since I left the salon.&rdquo;
                        </p>
                    </div>
                    <div className="testimonials-testimonial">
                        <img src={img3} alt="Profile Picture" width="250" height="250" />
                        <h4>Emily</h4>
                        <h3>&ldquo;Best Hair Salon&ldquo;</h3>
                        <p>
                            &ldquo;This is hands down the best hair salon in town! The staff are knowledgeable and skilled, and they always make me feel welcome. I wouldn't go
                            anywhere else.&rdquo;
                        </p>
                    </div>
                    <div className="testimonials-testimonial">
                        <img src={img4} alt="Profile Picture" width="250" height="250" />
                        <h4>Maria</h4>
                        <h3>&ldquo;Perfect Color&ldquo;</h3>
                        <p>
                            &ldquo;I came in wanting a drastic change to my hair color, and the stylist delivered! My new hair color is perfect and I couldn't be
                            happier.&rdquo;
                        </p>
                    </div>
                    <div className="testimonials-testimonial">
                        <img src={img5} alt="Profile Picture" width="250" height="250" />
                        <h4>Chloe</h4>
                        <h3>&ldquo;Excellent Service&ldquo;</h3>
                        <p>
                            &ldquo;The service at this hair salon is excellent! The staff are friendly and attentive, and they make sure that I'm comfortable throughout my
                            appointment. I highly recommend this salon.&rdquo;
                        </p>
                    </div>
                    <div className="testimonials-testimonial">
                        <img src={img6} alt="Profile Picture" width="250" height="250" />
                        <h4>Jason</h4>
                        <h3>&ldquo;Great Haircut&ldquo;</h3>
                        <p>
                            &ldquo;I received a great haircut at this salon! The stylist took the time to listen to what I wanted and provided expert advice. I'll definitely
                            be back.&rdquo;
                        </p>
                    </div>
                    <div className="testimonials-testimonial">
                        <img src={img7} alt="Profile Picture" width="250" height="250" />
                        <h4>Laura</h4>
                        <h3>&ldquo;Beautiful Results&ldquo;</h3>
                        <p>
                            &ldquo;The results of my hair appointment were beautiful! The stylist was able to perfectly execute the style I wanted. I felt like a new person
                            when I left the salon.&rdquo;
                        </p>
                    </div>
                    <div className="testimonials-testimonial">
                        <img src={img8} alt="Profile Picture" width="250" height="250" />
                        <h4>Rachel</h4>
                        <h3>&ldquo;Skilled Stylists&ldquo;</h3>
                        <p>
                            &ldquo;The stylists at this hair salon are so skilled! They have a great eye for detail and are able to deliver exceptional results every
                            time.&rdquo;
                        </p>
                    </div>
                    <div className="testimonials-testimonial">
                        <img src={img9} alt="Profile Picture" width="250" height="250" />
                        <h4>Henry</h4>
                        <h3>&ldquo;Friendly Atmosphere&ldquo;</h3>
                        <p>&ldquo;The atmosphere at this salon is so friendly and welcoming! The staff make me feel like part of the family every time I visit.&rdquo;</p>
                    </div>
                    <div className="testimonials-testimonial">
                        <img src={img10} alt="Profile Picture" width="250" height="250" />
                        <h4>Ava</h4>
                        <h3>&ldquo;Top Notch Service&ldquo;</h3>
                        <p>
                            &ldquo;The service at this salon is top notch! The stylists take the time to get to know their clients and provide personalized recommendations. I
                            always leave feeling pampered and happy.&rdquo;
                        </p>
                    </div>
                    <div className="testimonials-testimonial">
                        <img src={img11} alt="Profile Picture" width="250" height="250" />
                        <h4>Olivia</h4>
                        <h3>&ldquo;Beautiful Updo&ldquo;</h3>
                        <p>
                            &ldquo;The stylist at this salon created a beautiful updo for my special event! I received so many compliments on my hair that night. Thank
                            you!&rdquo;
                        </p>
                    </div>
                    <div className="testimonials-testimonial">
                        <img src={img12} alt="Profile Picture" width="250" height="250" />
                        <h4>Michael</h4>
                        <h3>&ldquo;Highly Recommend&ldquo;</h3>
                        <p>
                            &ldquo;I highly recommend this hair salon to anyone looking for exceptional service and results! The staff go above and beyond to ensure that their
                            clients are happy.&rdquo;
                        </p>
                    </div>
                </div>
                <button
                    className="testimonials-button"
                    onClick={showButton}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            showButton;
                        }
                    }}
                >
                    {isShowAll ? "Show Less" : "Show All"}
                </button>
            </div>
        </section>
    );
}
