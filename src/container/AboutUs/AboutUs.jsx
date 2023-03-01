import React from "react";
import { images } from "../../constants";

import "./AboutUs.css";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="g letter" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">О нас</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          Рестораны «Trattoria Group» <br /> это итальянская, японская и
          восточная кухня, а также пивной паб в лучших ирландских традициях.
          Каждый из наших ресторанов в Казани индивидуален и может предложить
          вам что-то особенное.
        </p>
        <button type="button" className="custom__button">
          Узнать больше
        </button>
      </div>

      <div className="app__aboutus-content_knife">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Найти нас</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          «Траттория на Чистопольской» Чистопольская, 9а <br />
          Бронь столов: 580-50-59 <br />
          Ресторан «FEST» ул. Минская, 9 (ТК Азино)
          <br />
          Бронь столов: 537-16-16
          <br /> Ресторан «FOR FASHION» ул. Баруди, 8<br /> Бронь столов:
          210-11-21
        </p>
        <button type="button" className="custom__button">
          Узнать больше
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
