import s from './Price.module.scss';

export const Price = () => {
  return (
    <div className={s.priceBlock}>
        <div className={s.container}>
            <h3 className={s.title}>Сколько стоит администрирование сайта?</h3>
            <p className={s.subtitle}>Тарифы сформированы под объем потребностей и размеры компании</p>
            <div className={s.columns}>
                
            </div>
        </div>
    </div>
  )
}