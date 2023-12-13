import s from "./OneHour.module.scss";

interface IOneHourCard {
  worker: string;
  works: string[];
}
const cards: IOneHourCard[] = [
  {
    worker: "Дизайнер",
    works: [
      "Разработать простой логотип или баннер для сайта;",
      "Нарисовать 5-6 иконок для сайта;",
      "Разработать прототип страницы (Axure);",
      "Разработать дизайн листовки.",
    ],
  },
  {
    worker: "Программист",
    works: [
      "Разработать простой логотип или баннер для сайта;",
      "Нарисовать 5-6 иконок для сайта;",
      "Разработать прототип страницы (Axure);",
      "Разработать дизайн листовки.",
    ],
  },
  {
    worker: "Верстальщик",
    works: [
      "Разработать простой логотип или баннер для сайта;",
      "Нарисовать 5-6 иконок для сайта;",
      "Разработать прототип страницы (Axure);",
      "Разработать дизайн листовки.",
    ],
  },
  {
    worker: "Контент-менеджер",
    works: [
      "Разработать простой логотип или баннер для сайта;",
      "Нарисовать 5-6 иконок для сайта;",
      "Разработать прототип страницы (Axure);",
      "Разработать дизайн листовки.",
    ],
  },
];

export const OneHour = () => {
  return (
    <div className={s.oneHourPage}>
      <div className={s.container}>
        <h2 className={s.title}>
          Что можно получить за час работы специалистов?
        </h2>
        <div className={s.cards}>
          {cards.map((card, index) => (
            <div className={s.card} key={index}>
              <p className={s.worker}>{card.worker}</p>
              {card.works.map((work) => (
                <p className={s.text} key={work}>
                  {work}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
