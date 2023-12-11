'use client';

import { type IEscortWork } from '@/types/IEscortWork';
import s from './EscorsWorks.module.scss';
import { SlActionRedo } from "react-icons/sl";
import { MdDisplaySettings } from "react-icons/md";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard } from 'swiper/modules';
import 'swiper/css';


const works: IEscortWork[] = [
    {
        title: 'Переносим сайты',
        description: 'При необходимости осуществляем перенос сайта на другой хостинг или домен. Делаем это правильно, без негативных последствий для поисковых систем.',
        icon: <SlActionRedo />
    },
    {
        title: 'Администрируем',
        description: 'Администрирование сайта — это внесение мелких правок: меняем стоимость услуг/товаров, добавляем/изменяем текста, новости, баннеры, картинки и т.д.',
        icon: <MdDisplaySettings />,
    },
    {
        title: 'Дорабатываем дизайн',
        description: 'Прорабатываем и внедряем дизайн как интернет сайта полностью, так и в отдельности необходимых блоков. Проверяем, чтобы все красиво отображалась.',
        icon: <MdDisplaySettings />,
    },
    {
        title: 'Размещаем информацию',
        description: 'Размещаем на веб сайте новую информацию: новости, тексты, товары, услуги, цены. Выполняем работы по всему контент-менеджменту.',
        icon: <MdDisplaySettings />,
    },
    {
        title: 'Лечим вирусы',
        description: 'Все CMS имеют уязвимости. Лечим зараженные сайты, устраняем «дыры» для предотвращения последующих атак злоумышленников.',
        icon: <MdDisplaySettings />,
    },
    {
        title: 'Переносим сайты',
        description: 'При необходимости осуществляем перенос сайта на другой хостинг или домен. Делаем это правильно, без негативных последствий для поисковых систем.',
        icon: <SlActionRedo />
    },
    {
        title: 'Администрируем',
        description: 'Администрирование сайта — это внесение мелких правок: меняем стоимость услуг/товаров, добавляем/изменяем текста, новости, баннеры, картинки и т.д.',
        icon: <MdDisplaySettings />,
    },
    {
        title: 'Дорабатываем дизайн',
        description: 'Прорабатываем и внедряем дизайн как интернет сайта полностью, так и в отдельности необходимых блоков. Проверяем, чтобы все красиво отображалась.',
        icon: <MdDisplaySettings />,
    },
    {
        title: 'Размещаем информацию',
        description: 'Размещаем на веб сайте новую информацию: новости, тексты, товары, услуги, цены. Выполняем работы по всему контент-менеджменту.',
        icon: <MdDisplaySettings />,
    },
    {
        title: 'Лечим вирусы',
        description: 'Все CMS имеют уязвимости. Лечим зараженные сайты, устраняем «дыры» для предотвращения последующих атак злоумышленников.',
        icon: <MdDisplaySettings />,
    },
    // {
    //     title: 'Находим ошибки',
    //     description: 'Веб сайт может содержать несуществующие страницы, неправильную верстку, проблемы с работой модулей на разных устройствах и браузерах. Все это устраняем.',
    //     icon: <MdDisplaySettings />,
    // },
]

export const EscortWorks = () => {
  return (
    <div className={s.excortWorksPage}>
        <h2 className={s.title}>Работы по сопровождению сайта</h2>
        <Swiper
        modules={[Keyboard]}
        spaceBetween={85}
        slidesPerView={5}
        centerInsufficientSlides
        centeredSlidesBounds
        centeredSlides
        className={s.works}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
        }}
        keyboard={{
            enabled: true,
        }}
        loop
        >
        {works.map((work, index) => (
            <SwiperSlide className={s.work} key={index}>
                {work.icon}
                <p className={s.workTitle}>{work.title}</p>
                <p className={s.workDesc}>{work.description}</p>
            </SwiperSlide>
        ))}
            
        </Swiper>
    </div>
  )
}
