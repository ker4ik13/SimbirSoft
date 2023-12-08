import Link from 'next/link';
import s from './EscortFirstScreen.module.scss';
import Image from 'next/image';
import pc1 from '@/data/images/pc1.png';
import icon1 from '@/data/images/send-mail.svg';
import icon2 from '@/data/images/data-analytics.svg';
import icon3 from '@/data/images/bug.svg';
import icon4 from '@/data/images/backup-file.svg';
import icon5 from '@/data/images/browsers.svg';

const advantages = [
    {
        icon: icon1,
        text: 'Оперативный ответ на заявки',
    },
    {
        icon: icon2,
        text: 'Улучшаем сайт для поисковых систем',
    },
    {
        icon: icon3,
        text: 'Защита сайта от вирусов',
    },
    {
        icon: icon4,
        text: 'Ежедневное резервное копирование сайта',
    },
    {
        icon: icon5,
        text: 'Бесперебойная работа сайта 24/7',
    },
]

export const EscortFirstScreen = () => {
  return (
    <div className={s.firstScreen}>
        <div className={s.container}>
            <div className={s.string}>
                <div className={s.leftSide}>
                    <h1 className={s.title}>Комплексное сопровождение сайта</h1>
                    <h2 className={s.subtitle}>Возьмем на себя все трудности по администрированию любых сайтов</h2>
                    <Link href='#' className={s.redButton}>Заказать обслуживание</Link>
                </div>
                <Image src={pc1} alt="PC" className={s.image} draggable={false} />
            </div>

            <div className={s.advantages}>
                {advantages.map((advantage, index) => (
                    <div className={s.advantage} key={index}>
                        <Image alt={advantage.text} src={advantage.icon} className={s.icon} draggable={false}/>
                        <p className={s.text}>{advantage.text}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}
