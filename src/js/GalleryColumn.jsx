import React from "react"

export default function GalleryColumn(props) {
    const imageArray = props.imageArray.map((img) => <a href={img} target="_blank"><img src={img} loading="lazy" alt="Gallery Image" /></a>)

    return (
        <section className="gallery-grid-column">
            {imageArray}
        </section>
    )
}