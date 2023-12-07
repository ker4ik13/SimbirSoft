import Link from 'next/link';
import s from './EscortFirstScreen.module.scss';

const advantages = [
    {
        icon: 'icon',
        text: 'Оперативный ответ на заявки',
    },
    {
        icon: 'icon',
        text: 'Улучшаем сайт для поисковых систем',
    },
    {
        icon: 'icon',
        text: 'Защита сайта от вирусов',
    },
    {
        icon: 'icon',
        text: 'Ежедневное резервное копирование сайта',
    },
    {
        icon: 'icon',
        text: 'Бесперебойная работа сайта 24/7',
    },
]

export const EscortFirstScreen = () => {
  return (
    <div className={s.firstScreen}>
        <div className={s.container}>
            <h1 className={s.title}>Комплексное сопровождение сайта</h1>
            <h2 className={s.subtitle}>Возьмем на себя все трудности по администрированию любых сайтов</h2>
            <Link href='#' className={s.redButton}>Заказать обслуживание</Link>

            <div className={s.advantages}>
                {advantages.map((advantage, index) => (
                    <div className={s.advantage} key={index}>
                        <p className={s.icon}>{advantage.icon}</p>
                        <p className={s.text}>{advantage.text}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}
