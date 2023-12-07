import Logo from "@/shared/Logo/Logo";
import s from "./Nav.module.scss";
import Link from "next/link";

export const Nav = () => {
  return (
    <nav className={s.nav}>
      <div className={s.navWrapper}>
        <Logo />
      </div>
      <div className={s.navWrapper}>
        <div className={s.links}>
          <Link href='#' className={s.navLink}>О нас</Link>
          <Link href='#' className={s.navLink}>Создание сайтов</Link>
          <Link href='#' className={s.navLink}>Сопровождение сайтов</Link>
          <Link href='#' className={s.navLink}>Портфолио</Link>
          <Link href='#' className={s.navLink}>Цены</Link>
          <Link href='#' className={s.navLink}>Контакты</Link>
        </div>
      </div>
    </nav>
  );
};
