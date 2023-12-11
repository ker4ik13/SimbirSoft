import s from './Map.module.scss';

export const Map = () => {
  return (
    <iframe className={s.iframe} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2334.421478372445!2d45.186204877129526!3d54.190320911241216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4144096e448d8443%3A0xa0b1c7f3eead52ea!2sSimbirSoft!5e0!3m2!1sru!2sru!4v1702275755346!5m2!1sru!2sru" width="600" height="450" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
  )
}