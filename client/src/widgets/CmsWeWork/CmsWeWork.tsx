import s from "./CmsWeWork.module.scss";
import cms1 from "@/data/images/bitrics.png";
import cms2 from "@/data/images/drupal.png";
import cms3 from "@/data/images/joomla.png";
import cms4 from "@/data/images/netcat.png";
import cms5 from "@/data/images/opencart.png";
import cms6 from "@/data/images/uml.png";
import cms7 from "@/data/images/wordpress.png";
import Image from "next/image";

export const CmsWeWork = () => {
  return (
    <div className={s.cmsPage}>
      <div className={s.container}>
        <h2 className={s.title}>Мы работаем со всеми популярными CMS</h2>
        <ul className={s.allCms}>
          <li className={s.cmsItem}>
            <Image src={cms1} alt='Битрикс' className={s.cmsImg} />
          </li>
          <li className={s.cmsItem}>
            <Image src={cms3} alt='Битрикс' className={s.cmsImg} />
          </li>
          <li className={s.cmsItem}>
            <Image src={cms2} alt='Битрикс' className={s.cmsImg} />
          </li>
          <li className={s.cmsItem}>
            <Image src={cms7} alt='Битрикс' className={s.cmsImg} />
          </li>
          <li className={s.cmsItem}>
            <Image src={cms4} alt='Битрикс' className={s.cmsImg} />
          </li>
          <li className={s.cmsItem}>
            <Image src={cms6} alt='Битрикс' className={s.cmsImg} />
          </li>
          <li className={s.cmsItem}>
            <Image src={cms5} alt='Битрикс' className={s.cmsImg} />
          </li>
        </ul>
      </div>
    </div>
  );
};
