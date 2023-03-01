import React from "react";
import { SubHeading } from "../../components";
import { images } from "../../constants";

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Контакты" />
      <h1 className="headtext__cormorant" style={{ marginBottom: "3rem" }}>
        Найди нас
      </h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">
          Казань: Чистопольская, 9а, ул. Минская, 9, ул. Баруди, 8
        </p>
        <p
          className="p__cormorant"
          style={{ color: "#DCCA87", margin: "2rem 0" }}
        >
          Рабочие часы
        </p>
        <p className="p__opensans">Понедельник-Пятница: 11:00 - 23:30</p>
        <p className="p__opensans">уббота-Воскресенье: 2:00 - 23:30</p>
      </div>
      <button
        type="button"
        className="custom__button"
        style={{ marginTop: "2rem" }}
      >
        Забронировать столик
      </button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="finus_img" />
    </div>
  </div>
);

export default FindUs;
