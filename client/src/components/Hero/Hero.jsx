import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import './Hero.css';
import Hero1 from '../../assets/Hero_1.webp';
import Hero2 from '../../assets/Pic 2.jpg';
import Hero3 from '../../assets/Pic 3.jpg';
import Hero4 from '../../assets/Pic 4.JPG';
import Hero5 from '../../assets/Pic 5.jpg';
import Hero6 from '../../assets/Hero_6.webp';

const slides = [
    {
        id: 1,
        image: Hero1,
    },
    {
        id: 2,
        image: Hero2,
    },
    {
        id: 3,
        image: Hero3,
    },
    {
        id: 4,
        image: Hero4,
        position: 'top',
    },
    {
        id: 5,
        image: Hero5,
        position: 'top',
    },
    {
        id: 6,
        image: Hero6,
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
