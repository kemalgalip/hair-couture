import React from "react";
import { Link } from "react-router-dom";
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
            <Link to="/">
                <img className="header-logo" src={logoDark} width="540" height="242" />
            </Link>
            {windowWidth > 1024 ? (
                <nav className="header-nav">
                    <Link to="/">Home</Link>
                    <Link to="/gallery">Gallery</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </nav>
            ) : (
                <section className="header-menu-button" tabIndex={0}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <nav className="header-dropdown-nav">
                        <Link href="/">Home</Link>
                        <Link href="/gallery">Gallery</Link>
                        <Link href="/about">About</Link>
                        <Link href="/contact">Contact</Link>
                    </nav>
                </section>
            )}
        </header>
    );
}
