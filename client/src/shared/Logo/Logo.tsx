import logoWithText from "@/data/images/logoWithText.png";
import styles from "./Logo.module.scss";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"} className={styles.logo}>
      <p>SimbirSoft</p>
    </Link>
  );
};

export default Logo;
