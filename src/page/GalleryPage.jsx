import React from "react";
import Header from "../js/Header";
import Blank from "../js/Blank";
import Gallery from "../js/Gallery";
import Footer from "../js/Footer";

export default function GalleryPage() {
    const headerRef = React.useRef(null);

    React.useEffect(() => {
        document.title = "Hair Couture - Gallery";
    }, []);

    return (
        <>
            <Header headerRef={headerRef} />
            <Blank headerRef={headerRef} />
            <section className="body-container">
                <Gallery />
            </section>
            <Footer />
        </>
    );
}
