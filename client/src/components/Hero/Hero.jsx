import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import './Hero.css';
import Hero1 from '../../assets/Hero_1.webp';
import Hero2 from '../../assets/Hero_2.webp';
import Hero3 from '../../assets/Hero_3.webp';
import Hero4 from '../../assets/Hero_4.webp';
import Hero5 from '../../assets/Hero_5.webp';
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
    },
    {
        id: 5,
        image: Hero5,
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
