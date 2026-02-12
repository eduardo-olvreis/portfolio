import "./Carousel.css"
import Slider from "react-slick"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function Carousel({ items }){

    const settings = {
        dots: true,
        infinite: true,
        arrows: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0
    }
    
    return(
        <div className="slider-container">
            <Slider {...settings}>
                {items.map((item) => {
                    return(
                        <div key={item.id}>
                            <img src={item.image} alt={item.alt} />
                            <button onClick={() => window.open(item.url, "_blank")} id="carouselButton">{item.name}</button>
                            <p id="carouselDescription">{item.description} <br /></p>
                        </div>
                    )
                })}
            </Slider>
        </div>
    )
}