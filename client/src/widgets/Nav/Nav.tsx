import Logo from "@/shared/Logo/Logo";
import s from "./Nav.module.scss";

export const Nav = () => {
  return (
    <nav className={s.nav}>
      <Logo />
    </nav>
  );
};
