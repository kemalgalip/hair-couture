import React from "react";
import logoDark from "../img/hair-couture-logo-dark.png";
import logoLight from "../img/hair-couture-logo-light.png";

export default function Header(props) {
    const [isDarkLogo, setIsDarkLogo] = React.useState(false);

    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

    React.useEffect(() => {
        function handleResize() {
            handleHeaderChange();
            setWindowWidth(window.innerWidth);
        }

        function handleHeaderChange() {
            if (window.scrollY >= props.heroRef.current.offsetHeight - props.homeHeaderRef.current.offsetHeight || window.innerWidth <= 500) {
                props.homeHeaderRef.current.classList.add("filled");
                setIsDarkLogo(true);
            } else if (window.scrollY < props.heroRef.current.offsetHeight - props.homeHeaderRef.current.offsetHeight) {
                props.homeHeaderRef.current.classList.remove("filled");
                setIsDarkLogo(false);
            }
        }

        handleHeaderChange();

        window.addEventListener("resize", handleResize);
        window.addEventListener("scroll", handleHeaderChange);

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("scroll", handleHeaderChange);
        };
    }, []);

    return (
        <header className="header-homepage" ref={props.homeHeaderRef}>
            <a href="/">
                <img src={isDarkLogo ? logoDark : logoLight} width="540" height="242" />
            </a>
            {windowWidth > 1024 ? (
                <nav className="header-homepage-nav">
                    <a href="/">Home</a>
                    <a href="/gallery">Gallery</a>
                    <a href="/about">About</a>
                    <a href="/contact">Contact</a>
                </nav>
            ) : (
                <div className="header-homepage-menu-button" tabIndex={0}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <nav className="header-homepage-dropdown-nav">
                        <a href="/">Home</a>
                        <a href="/gallery">Gallery</a>
                        <a href="/about">About</a>
                        <a href="/contact">Contact</a>
                    </nav>
                </div>
            )}
        </header>
    );
}
