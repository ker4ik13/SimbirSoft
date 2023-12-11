import Logo from "@/shared/Logo/Logo";
import s from "./Footer.module.scss";
import Link from "next/link";
import { FaTelegram, FaWhatsapp } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className={s.footer}>
      <div className={s.container}>
        <div className={s.containerWrapper}>
          <div className={s.column}>
            <Logo />
            <div className={s.copy}>
              © 2023 SimbirSoft, ISO 9001:2015. Мы разрабатываем уникальные
              программные решения для компаний из разных стран.
            </div>
          </div>
          <div className={s.links}>
            <div className={s.column}>
              <p className={s.linksTitle}>Разделы</p>
              <Link href='#' className={s.link}>
                Главная
              </Link>
              <Link href='#' className={s.link}>
                О нас
              </Link>
              <Link href='#' className={s.link}>
                Портфолио
              </Link>
              <Link href='#' className={s.link}>
                Карта сайта
              </Link>
              <Link href='#' className={s.link}>
                Контакты
              </Link>
            </div>
            <div className={s.column}></div>
          </div>
          <div className={s.links}>
            <div className={s.column}>
              <p className={s.linksTitle}>Разделы</p>
              <Link href='#' className={s.link}>
                SEO продвижение
              </Link>
              <Link href='#' className={s.link}>
                Контекстная реклама
              </Link>
              <Link href='#' className={s.link}>
                Создание сайтов
              </Link>
              <Link href='#' className={s.link}>
                Верстка сайта
              </Link>
              <Link href='#' className={s.link}>
                Администрирование сайта
              </Link>
            </div>
            <div className={s.column}></div>
          </div>
          <div className={s.column}>
            <p className={s.linksTitle}>Контакты</p>
            <Link href='tel:+78124245699' className={`${s.link} ${s.big}`}>
              +7(812) 424-56-99
            </Link>
            <Link href='tel:+78124245699' className={s.link}>
              Заказать звонок
            </Link>
            <Link
              href='mailto:info@simbirsoft.com'
              className={`${s.link} ${s.big}`}
            >
              info@simbirsoft.com
            </Link>
            <div className={s.linksRow}>
              <Link href={"#"} className={s.linkIcon}>
                <FaTelegram />
              </Link>
              <Link href={"#"} className={s.linkIcon}>
                <FaWhatsapp />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
