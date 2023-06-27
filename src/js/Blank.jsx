import React from "react";

export default function Blank(props) {
    const blankRef = React.useRef(null);

    React.useEffect(() => {
        function handleResize() {
            if (props.headerRef && blankRef.current) {
                blankRef.current.style.height = props.headerRef.current.offsetHeight + "px";
            }
        }

        handleResize();

        window.addEventListener("load", handleResize);
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("load", handleResize);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return <section className="blank-section" ref={blankRef}></section>;
}
