import React from "react";
import HeroSlider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroCarousel = () => {    

    const settingsLG = { 
        arrows: true, 
        autoplay: true, 
        centerMode: true, 
        centerPadding: "300px", 
        slidesToShow: 1,
        infinite: true,
        slidesToScroll: 1
    };

    const settings = {
        arrows: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const images=[
        "https://images.unsplash.com/photo-1533167649158-6d508895b680?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1489&q=80",
        "https://images.unsplash.com/photo-1504060765228-f97d1772ff9e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80",
        "https://images.unsplash.com/photo-1494967990034-6a28085f9ed0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80",
        "https://images.unsplash.com/photo-1506875644286-0fa3dc4df91f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",    
    ]
    return(
        <>
            <div className="lg:hidden">
                <HeroSlider {...settings}>
                    {images.map((image) => (
                        <div className=" w-full h-56 md:h-80 py-3">
                            <img src="{image}" alt="testing" className="w-full h-full"/>
                        </div>
                    ))}
                </HeroSlider>
            </div>

            <div className="hidden lg:block">
                <HeroSlider {...settingsLG}>
                    {images.map((image) => (
                        <div className=" w-full h-96 px-2 py-3">
                            <img src="{image}" alt="testing" className="w-full h-full rounded-md"/>
                        </div>
                    ))}
                </HeroSlider>
            </div>
        </>
    );

};

export default HeroCarousel;