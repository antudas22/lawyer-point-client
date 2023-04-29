import React from "react";
import './Lawyers.css';
import{Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import {EffectCoverflow, Navigation} from 'swiper';

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import harryPotter from '../../assets/Lawyers-img/harry-potter.jpg'
import andreaPiacquadio from '../../assets/Lawyers-img/andrea-piacquadio.jpg';
import julieOcean from '../../assets/Lawyers-img/julie-ocean.jpg';
import buroMillennial from '../../assets/Lawyers-img/buro-millennial.jpg';
import dinielleDeVeyra from '../../assets/Lawyers-img/dinielle-de-veyra.jpg';
import jhonWick from '../../assets/Lawyers-img/jhon-wick.jpg';
import teddyJoseph from '../../assets/Lawyers-img/teddy-joseph.jpg';
import mikeJhon from '../../assets/Lawyers-img/mike-jhon.jpg';

const Lawyers = () => {

  return (
    <div className="relative">
      <h2 className="text-3xl font-bold text-center my-14">Meet Our Lawyers</h2>

        <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={'auto'}
            coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
            }}
            navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
                clickable: true,
            }}
            modules={[EffectCoverflow, Navigation]}
            className="swiper_container"
        >
        
        <SwiperSlide>
        <div>
            <div className="card w-80 h-[450px] bg-base-100 shadow-lg m-4">
            <figure>
                <img
                src={harryPotter}
                alt="lawyer"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Harry Potter</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni nobis consequuntursr ldkfjkd lskdfjkd.
                    
                </p>
                <div className="card-actions justify-end">
                <button className="btn btn-link">View More</button>
                </div>
            </div>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
            <div className="card w-80 h-[450px] bg-base-100 shadow-lg m-4">
            <figure>
                <img
                src={andreaPiacquadio}
                alt="lawyer"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Harry Potter</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni nobis consequuntursr ldkfjkd lskdfjkd.
                    
                </p>
                <div className="card-actions justify-end">
                <button className="btn btn-link">View More</button>
                </div>
            </div>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
            <div className="card w-80 h-[450px] bg-base-100 shadow-lg m-4">
            <figure>
                <img
                src={julieOcean}
                alt="lawyer"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Harry Potter</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni nobis consequuntursr ldkfjkd lskdfjkd.
                    
                </p>
                <div className="card-actions justify-end">
                <button className="btn btn-link">View More</button>
                </div>
            </div>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
            <div className="card w-80 h-[450px] bg-base-100 shadow-lg m-4">
            <figure>
                <img
                src={buroMillennial}
                alt="lawyer"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Harry Potter</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni nobis consequuntursr ldkfjkd lskdfjkd.
                    
                </p>
                <div className="card-actions justify-end">
                <button className="btn btn-link">View More</button>
                </div>
            </div>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
            <div className="card w-80 h-[450px] bg-base-100 shadow-lg m-4">
            <figure>
                <img
                src={dinielleDeVeyra}
                alt="lawyer"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Harry Potter</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni nobis consequuntursr ldkfjkd lskdfjkd.
                    
                </p>
                <div className="card-actions justify-end">
                <button className="btn btn-link">View More</button>
                </div>
            </div>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
            <div className="card w-80 h-[450px] bg-base-100 shadow-lg m-4">
            <figure>
                <img
                src={jhonWick}
                alt="lawyer"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Harry Potter</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni nobis consequuntursr ldkfjkd lskdfjkd.
                    
                </p>
                <div className="card-actions justify-end">
                <button className="btn btn-link">View More</button>
                </div>
            </div>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
            <div className="card w-80 h-[450px] bg-base-100 shadow-lg m-4">
            <figure>
                <img
                src={teddyJoseph}
                alt="lawyer"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Harry Potter</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni nobis consequuntursr ldkfjkd lskdfjkd.
                    
                </p>
                <div className="card-actions justify-end">
                <button className="btn btn-link">View More</button>
                </div>
            </div>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
            <div className="card w-80 h-[450px] bg-base-100 shadow-lg m-4">
            <figure>
                <img
                src={mikeJhon}
                alt="lawyer"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Harry Potter</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni nobis consequuntursr ldkfjkd lskdfjkd.
                    
                </p>
                <div className="card-actions justify-end">
                <button className="btn btn-link">View More</button>
                </div>
            </div>
            </div>
        </div>
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          </div>

        </Swiper>

    </div>
  );
};

export default Lawyers;
