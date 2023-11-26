import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './Carousel.css'
const Carousel = () => {
    const arr = ["https://sslimages.shoppersstop.com/sys-master/root/h0f/h75/31083770347550/NARS_TopCarouselNARS_TopCarousel_Web_NS-23.jpg", "https://sslimages.shoppersstop.com/sys-master/root/heb/h1d/31146587750430/Men-web_161023.jpg", "https://sslimages.shoppersstop.com/sys-master/root/hf6/h9e/31167300501534/Footwear-web_AW23.jpg", "https://sslimages.shoppersstop.com/sys-master/root/hde/hfb/31259529478174/Static-1840x600--Web_261023.jpg", "https://sslimages.shoppersstop.com/sys-master/root/h14/h88/31128099880990/Couple-static-web-600_AW23.jpg",
        "https://sslimages.shoppersstop.com/sys-master/root/h19/h1a/31146587619358/Private-Brand-web_161023.jpg", "https://sslimages.shoppersstop.com/sys-master/root/h8d/h09/31146587160606/Watches-web_121023.jpg", "https://sslimages.shoppersstop.com/sys-master/root/h5b/h0b/31293007527966/Beauty-web--hp--main-carousel--2023-11-01-new-page--3.jpg"]
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }
    return (
        <div class="container">
            <Slider {...settings}>
                {
                    arr.map((e, i) => {
                        return <div key={i} className="banner-img">
                            <img src={e} alt="" />
                        </div>

                    })

                }

            </Slider>
        </div>




    )
}
export default Carousel;