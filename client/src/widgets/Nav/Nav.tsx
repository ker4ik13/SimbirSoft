'use client';

import Logo from "@/shared/Logo/Logo";
import s from "./Nav.module.scss";
import Link from "next/link";
import { BsFillGeoAltFill } from "react-icons/bs";
import { FaPhoneAlt, FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import { useRef, type MouseEvent } from "react";

export const Nav = () => {

  const contactsBlock = useRef<HTMLDivElement | null>(null);
  const linksBlock = useRef<HTMLDivElement | null>(null);

  const handleNav = (event: MouseEvent<HTMLButtonElement>) => {
    event.currentTarget.classList.toggle(s.active);
    if (contactsBlock.current && linksBlock.current) {
      contactsBlock.current.classList.toggle(s.active);
      linksBlock.current.classList.toggle(s.active);
      document.body.classList.toggle('overflow');
      document.body.classList.toggle('blur');
    }
  }

  return (
    <nav className={s.nav}>
      <div className={s.navWrapper}>
        <div className={s.upperWrapper}>
          <Logo />
          <button type="button" className={s.burger} onClick={(event) => handleNav(event)}>
            <span></span>
            <span></span>
          </button>
        </div>
        <div className={s.contacts} ref={contactsBlock}>
          <Link
            href='https://yandex.ru/maps/-/CDquBKo8'
            target='_blank'
            className={s.place}
          >
            <BsFillGeoAltFill />
            <p className={s.grayText}>Саранск, пр. Ленина, 25</p>
          </Link>
          <Link href='tel:+78124245699' target='_blank' className={s.place}>
            <FaPhoneAlt />
            <p className={s.boldText}>+7 (812) 424-56-99</p>
          </Link>
          <Link
            href='https://t.me/ker4ik13'
            target='_blank'
            className={s.circleButton}
          >
            <FaTelegramPlane />
          </Link>
          <Link
            href='https://t.me/ker4ik13'
            target='_blank'
            className={s.circleButton}
          >
            <FaWhatsapp />
          </Link>

          <button type='button' className={s.button}>
            Заказать звонок
          </button>
        </div>
      </div>
      <div className={s.navWrapper} ref={linksBlock}>
        <div className={s.links}>
          <Link href='#' className={s.navLink}>
            О нас
          </Link>
          <Link href='#' className={s.navLink}>
            Создание сайтов
          </Link>
          <Link href='#' className={s.navLink}>
            Сопровождение сайтов
          </Link>
          <Link href='#' className={s.navLink}>
            Портфолио
          </Link>
          <Link href='#' className={s.navLink}>
            Цены
          </Link>
          <Link href='#' className={s.navLink}>
            Контакты
          </Link>
        </div>
      </div>
    </nav>
  );
};
