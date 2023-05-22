import React from "react"
import "../css/Gallery.css"
import GalleryColumn from "./GalleryColumn"
import img1 from "../img/gallery/1.jpg"
import img2 from "../img/gallery/2.jpg"
import img3 from "../img/gallery/3.jpg"
import img4 from "../img/gallery/4.jpg"
import img5 from "../img/gallery/5.jpg"
import img6 from "../img/gallery/6.jpg"
import img7 from "../img/gallery/7.jpg"
import img8 from "../img/gallery/8.jpg"
import img9 from "../img/gallery/9.jpg"
import img10 from "../img/gallery/10.jpg"
import img11 from "../img/gallery/11.jpg"
import img12 from "../img/gallery/12.jpg"
import img13 from "../img/gallery/13.jpg"
import img14 from "../img/gallery/14.jpg"
import img15 from "../img/gallery/15.jpg"
import img16 from "../img/gallery/16.jpg"
import img17 from "../img/gallery/17.jpg"
import img18 from "../img/gallery/18.jpg"

export default function Gallery() {
    const [imageArray1, setImageArray1] = React.useState([])
    const [imageArray2, setImageArray2] = React.useState([])
    const [imageArray3, setImageArray3] = React.useState([])

    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)

    const [imageColumns, setImageColumns] = React.useState([])

    React.useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth)
            console.log(window.innerWidth)
        }

        window.addEventListener("resize", handleResize)

        return () => window.removeEventListener("resize", handleResize)
    }, [])

    const imageArray = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18]

    React.useEffect(() => {
        function displayImages() {
            setImageArray1([])
            setImageArray2([])
            setImageArray3([])
            if (windowWidth > 500) {
                imageArray.map((img, idx) => {
                    if (idx % 3 === 0) {
                        setImageArray1(prevArray => [...prevArray, img])
                    }
                    else if (idx % 3 === 1) {
                        setImageArray2(prevArray => [...prevArray, img])
                    }
                    else if (idx % 3 === 2) {
                        setImageArray3(prevArray => [...prevArray, img])
                    }
                })
            }
            else if (windowWidth > 425) {
                imageArray.map((img, idx) => {
                    if (idx % 2 === 0) {
                        setImageArray1(prevArray => [...prevArray, img])
                    }
                    else if (idx % 2 === 1) {
                        setImageArray2(prevArray => [...prevArray, img])
                    }
                })
            }
            else {
                imageArray.map((img) => {
                    setImageArray1(prevArray => [...prevArray, img])
                })
            }
        }

        displayImages()
    }, [windowWidth])

    React.useEffect(() => {
        const columns = [];
        
        if (imageArray1.length) {
          columns.push(<GalleryColumn imageArray={imageArray1} />);
        }
        
        if (imageArray2.length) {
          columns.push(<GalleryColumn imageArray={imageArray2} />);
        }
        
        if (imageArray3.length) {
          columns.push(<GalleryColumn imageArray={imageArray3} />);
        }
  
        setImageColumns(columns);
    }, [imageArray1, imageArray2, imageArray3])

    return (
        <section className="gallery-section">
            {imageColumns}
        </section>
    )
}