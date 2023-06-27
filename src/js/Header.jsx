import React from "react";
import logoDark from "../img/hair-couture-logo-dark.png";

export default function Header(props) {
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

    React.useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth);
        }

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <header className="header" ref={props.headerRef}>
            <a href="/">
                <img className="header-logo" src={logoDark} width="540" height="242" />
            </a>
            {windowWidth > 1024 ? (
                <nav className="header-nav">
                    <a href="/">Home</a>
                    <a href="/gallery">Gallery</a>
                    <a href="/about">About</a>
                    <a href="/contact">Contact</a>
                </nav>
            ) : (
                <section className="header-menu-button" tabIndex={0}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <nav className="header-dropdown-nav">
                        <a href="/">Home</a>
                        <a href="/gallery">Gallery</a>
                        <a href="/about">About</a>
                        <a href="/contact">Contact</a>
                    </nav>
                </section>
            )}
        </header>
    );
}
