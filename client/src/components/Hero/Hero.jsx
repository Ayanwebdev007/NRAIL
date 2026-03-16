import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import './Hero.css';
import Slider1 from '../../assets/Hero_2.webp';
import Slider2 from '../../assets/Pic 2.jpg';
import Slider3 from '../../assets/Pic 3.jpg';
import Slider4 from '../../assets/Pic 4.JPG';
import Slider5 from '../../assets/Pic 5.jpg';
import Slider6 from '../../assets/Hero_5.webp';

const slides = [
    {
        id: 1,
        image: Slider1,
    },
    {
        id: 2,
        image: Slider2,
    },
    {
        id: 3,
        image: Slider3,
    },
    {
        id: 4,
        image: Slider4,
        position: 'top',
    },
    {
        id: 5,
        image: Slider5,
        position: 'top',
    },
    {
        id: 6,
        image: Slider6,
    },
];

const Hero = () => {
    return (
        <section className="hero">
            <Swiper
                modules={[Autoplay, Pagination, EffectFade]}
                effect="fade"
                speed={1200}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                loop={true}
                grabCursor={true}
                className="hero-swiper"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div className="slide-content">
                            <div
                                className="slide-bg"
                                style={{ 
                                    backgroundImage: `url(${slide.image})`,
                                    backgroundPosition: slide.position || 'center'
                                }}
                            ></div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Hero;
