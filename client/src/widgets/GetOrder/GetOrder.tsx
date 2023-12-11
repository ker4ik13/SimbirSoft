import s from "./GetOrder.module.scss";

export const GetOrder = () => {
  return (
    <div className={s.getOrderPage}>
      <div className={s.getOrderModal}>
        <h2 className={s.title}>Закажите сайт и получите подарок!</h2>
        <p className={s.desc}>
          Мы зарегистрируем ваш сайт в авторитетном Яндекс.Каталоге в подарок,
          что даст моментальный прирост позиций
        </p>

        <form className={s.inputs}>
          <div className={s.inputWrapper}>
            <input
              type='text'
              name='name'
              id='name'
              className={s.input}
              placeholder='Ваше имя *'
            />
          </div>
          <div className={s.inputWrapper}>
            <input
              type='number'
              name='tel'
              id='tel'
              className={s.input}
              placeholder='Телефон'
            />
          </div>
          <div className={s.inputWrapper}>
            <input
              type='email'
              name='email'
              id='email'
              className={s.input}
              placeholder='Эл. почта *'
            />
          </div>
          <button type='button' className={s.submitButton}>
            Заказать сайт
          </button>
        </form>
      </div>
    </div>
  );
};
