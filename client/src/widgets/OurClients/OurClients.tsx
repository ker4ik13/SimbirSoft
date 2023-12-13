"use client";

import s from "./OurClients.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import client1 from "@/data/images/client1.png";
import client2 from "@/data/images/client2.png";
import client3 from "@/data/images/client3.png";
import client4 from "@/data/images/client4.png";
import client5 from "@/data/images/client5.png";

export const OurClients = () => {
  return (
    <div className={s.ourClientsPage}>
      <div className={s.container}>
        <h2 className={s.title}>Наши клиенты</h2>
        <Swiper
          modules={[Navigation, Keyboard]}
          spaceBetween={85}
          slidesPerView={5}
          navigation
          centerInsufficientSlides
          centeredSlidesBounds
          centeredSlides
          className={s.slider}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          keyboard={{
            enabled: true,
          }}
          loop
        >
          <SwiperSlide className={s.slide}>
            <Image
              src={client1}
              alt='Клиент'
              draggable={false}
              className={s.img}
            />
          </SwiperSlide>
          <SwiperSlide className={s.slide}>
            <Image
              src={client2}
              alt='Клиент'
              draggable={false}
              className={s.img}
            />
          </SwiperSlide>
          <SwiperSlide className={s.slide}>
            <Image
              src={client3}
              alt='Клиент'
              draggable={false}
              className={s.img}
            />
          </SwiperSlide>
          <SwiperSlide className={s.slide}>
            <Image
              src={client4}
              alt='Клиент'
              draggable={false}
              className={s.img}
            />
          </SwiperSlide>
          <SwiperSlide className={s.slide}>
            <Image
              src={client5}
              alt='Клиент'
              draggable={false}
              className={s.img}
            />
          </SwiperSlide>
          <SwiperSlide className={s.slide}>
            <Image
              src={client1}
              alt='Клиент'
              draggable={false}
              className={s.img}
            />
          </SwiperSlide>
          <SwiperSlide className={s.slide}>
            <Image
              src={client2}
              alt='Клиент'
              draggable={false}
              className={s.img}
            />
          </SwiperSlide>
          <SwiperSlide className={s.slide}>
            <Image
              src={client3}
              alt='Клиент'
              draggable={false}
              className={s.img}
              priority
            />
          </SwiperSlide>
          <SwiperSlide className={s.slide}>
            <Image
              src={client4}
              alt='Клиент'
              draggable={false}
              className={s.img}
            />
          </SwiperSlide>
          <SwiperSlide className={s.slide}>
            <Image
              src={client5}
              alt='Клиент'
              draggable={false}
              className={s.img}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
