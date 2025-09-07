import Slider from "react-slick"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Carrousel({ items }){

    const settings = {
        dots: true,
        lazyLoad: true,
        infinite: true,
        arrows: false,
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
                            <button onClick={() => window.open(item.url, "_blank")} id="carrouselButton">{item.name}</button>
                            <p id="carrouselDescription">{item.description} <br /><br /></p>
                        </div>
                    )
                })}
            </Slider>
        </div>
    )
}