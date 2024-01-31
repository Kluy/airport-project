import React from 'react';
import './footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__nav">
        <ul className="footer__nav-item nav-passengers">
          <li>
            <b>Пасажирам</b>
          </li>
          <li>Розклад рейсів</li>
          <li>Замовлення послуг</li>
          <li>Контактна інформація</li>
          <li>Політика конфіденційності</li>
          <li>Форма відгуків та пропозицій</li>
        </ul>
        <ul className="footer__nav-item nav-partners">
          <li>
            <b>Партнерам</b>
          </li>
          <li>Головна</li>
          <li>Наземне обслуговування</li>
          <li>Характеристики аеродрому</li>
          <li>Учбовий центр</li>
          <li>Вакансії</li>
        </ul>
        <ul className="footer__nav-item nav-press">
          <li>
            <b>Пресцентр</b>
          </li>
          <li>Головна пресцентру</li>
          <li>Останні новини</li>
          <li>Соціальні та артпроекти</li>
          <li>Фінансова звітність</li>
          <li>Статистика пасажиропотоку</li>
        </ul>
        <div>
          <div>
            <b>Авіадовідка</b>
          </div>
          <div className="footer__tel">+38 (044) 500 49 73</div>
          <div>
            <b>Приєднуйтесь до нас</b>
          </div>

          <div className="footer__icons">
            <img className="footer__icon" src="../../images/facebook.svg" alt="Facebook" />
            <img className="footer__icon" src="../../images/twitter.svg" alt="Twitter" />
            <img className="footer__icon" src="../../images/instagram.svg" alt="Instagram" />
            <img className="footer__icon" src="../../images/youtube.svg" alt="Youtube" />
            <img className="footer__icon" src="../../images/linkedin.svg" alt="Linkedin" />
          </div>
        </div>
      </div>
      <div className="footer__copyrights">
        <div>
          <p>© 2011-2021</p>
          <p>Міжнародний аеропорт «Київ»</p>
        </div>
        <div>
          <p>
            Part of <b>Ufuture</b>
          </p>
          <p>
            <b>Investment Group</b>
          </p>
        </div>
        <div>
          <p>Розробка сайту</p>
          <p>
            <b>smp/solutions</b>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
