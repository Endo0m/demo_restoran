import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import { FooterOverlay, Newsletter } from "../../components";
import { images } from "../../constants";
import "./Footer.css";

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links" id="contacts">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Контакты</h1>
        <p className="p__opensans">
          «Траттория на Чистопольской» Чистопольская, 9а{" "}
        </p>
        <p className="p__opensans">Бронь столов: 580-50-59</p>
        <p>/</p>
        <p className="p__opensans">Ресторан «FEST» ул. Минская, 9 (ТК Азино)</p>
        <p className="p__opensans">Бронь столов: 537-16-16 </p>
        <p>/</p>
        <p className="p__opensans"> Ресторан «FOR FASHION» ул. Баруди, 8 </p>
        <p className="p__opensans">Бронь столов: 210-11-21 </p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="footer_logo" />
        <p className="p__opensans">
          &quot;#ТратторияДляКаждогоСвоя INFO/RESERVE: 210-28-28.&quot;
        </p>
        <img
          src={images.spoon}
          className="spoon__img"
          style={{ marginTop: 15 }}
        />
        <div className="app__footer-links_icons">
          <a href="https://www.facebook.com">
            <FiFacebook />
          </a>
          <FiTwitter
            onClick={(event) =>
              (window.location.href = "https://www.twitter.com")
            }
          />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Рабочие часы</h1>
        <p className="p__opensans">Понедельник-Пятница:</p>
        <p className="p__opensans">11:00 - 23:30</p>
        <p className="p__opensans">Суббота-Воскресенье:</p>
        <p className="p__opensans">12:00 - 23:30</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2023 Demo WebSite.</p>
    </div>
  </div>
);

export default Footer;
