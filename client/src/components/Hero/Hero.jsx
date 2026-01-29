import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import './Hero.css';

const slides = [
    {
        id: 1,
        image: "/hero/hero_0.jpg",
    },
    {
        id: 2,
        image: "/hero/hero_1.jpg",
    },
    {
        id: 3,
        image: "/hero/hero_2.jpg",
    },
    {
        id: 4,
        image: "/hero/hero_3.jpg",
    },
    {
        id: 5,
        image: "/hero/hero_4.jpg",
    },
    {
        id: 6,
        image: "/hero/hero_5.jpg",
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
                                style={{ backgroundImage: `url(${slide.image})` }}
                            ></div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Hero;
