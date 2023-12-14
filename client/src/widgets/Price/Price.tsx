import type { IRate } from '@/types/IRate';
import s from './Price.module.scss';

const prices: IRate[] = [
    {
        price: 10000,
        hourFromAbove: 2000,
        reactionTime: 'в течение суток',
        title: 'Базовый',
        workTime: '4 часа работ',
        services: [
            {
                done: true,
                serviceText: 'Администрирование сайта',
            },
            {
                done: true,
                serviceText: 'Мониторинг работоспособности',
            },
            {
                done: true,
                serviceText: 'Обслуживание сайта (CMS)',
            },
            {
                done: true,
                serviceText: 'Резервное копирование 1 раз/нед',
            },
            {
                done: true,
                serviceText: 'Вопросы с тех. службами',
            },
            {
                done: true,
                serviceText: 'Защита от вирусов',
            },
            {
                done: true,
                serviceText: 'Критические',
            },
            {
                done: true,
                serviceText: 'Поддержка электронной почты',
            },
            {
                done: true,
                serviceText: 'Общие вопросы',
            },
            {
                done: true,
                serviceText: 'Стоимость часа сверх тарифа',
            },
        ],
    },
    {
        price: 15000,
        hourFromAbove: 1700,
        reactionTime: '6 часов',
        title: 'Оптимальный',
        workTime: '10 часов работ',
        listTitle: 'Всё из тарифы «Базовый», плюс:',
        services: [
            {
                done: true,
                serviceText: 'Изменение функционала',
            },
            {
                done: false,
            },
            {
                done: false,
            },
            {
                done: false,
            },
            {
                done: false,
            },
            {
                done: false,
            },
            {
                done: false,
            },
        ],
    },
    {
        title: 'Комплексный',
        price: 27000,
        hourFromAbove: 1300,
        reactionTime: '4 часа',
        workTime: '20 часов работ',
        listTitle: 'Всё из тарифы «Оптимальный», плюс:',
        services: [
            {
                done: true,
                serviceText: 'Аналитика',
            },
            {
                done: false,
            },
            {
                done: false,
            },
            {
                done: false,
            },
            {
                done: false,
            },
            {
                done: false,
            },
            {
                done: false,
            },
            {
                done: false,
            },
            {
                done: false,
            },
        ],
    },
    {
        price: 40000,
        hourFromAbove: 1100,
        reactionTime: '2 часа',
        title: 'Бизнес',
        workTime: '35 часов работ',
        listTitle: 'Всё из тарифы «Комплексный», плюс:',
        services: [
            {
                done: true,
                serviceText: 'Резервное копирование ежедневно',
            },
            {
                done: false,
            },
            {
                done: false,
            },
            {
                done: false,
            },
            {
                done: false,
            },
            {
                done: false,
            },
            {
                done: false,
            },
            {
                done: false,
            },
            {
                done: false,
            },
        ],
    },
]

const isDoneElement = (value: { done: boolean, serviceText?: string } | null): string => {
    return value && value.done ? s.active : s.disactive;
}

export const Price = () => {
    return (
        <div className={s.priceBlock}>
            <div className={s.container}>
                <h3 className={s.title}>Сколько стоит администрирование сайта?</h3>
                <p className={s.subtitle}>Тарифы сформированы под объем потребностей и размеры компании</p>
                <div className={s.columns}>
                    {prices && prices.length !== 0 && prices.map((rate, i) => (
                        <div className={s.rateCol} key={i}>
                            <h4 className={s.rateTitle}>{rate.title}</h4>
                            <p className={s.ratePrice}>{rate.price.toLocaleString('ru')} ₽/мес</p>
                            <div className={s.rateTimes}>
                                <p className={s.rateTime}>{rate.workTime}</p>
                                <p className={s.rateTime}>Время реакции: {rate.reactionTime}</p>
                            </div>
                            <div className={s.services}>
                                <p className={s.servicesTitle}>{rate.listTitle ? rate.listTitle : 'Включенные услуги:'}</p>
                                <ul className={s.serviceList}>
                                    {rate.services.map((service, i) => (
                                        <li className={`${s.serviceItem} ${isDoneElement(service)}`} key={i}>{service && service.done ? service.serviceText : ''}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}