import React from "react";

import SubHeading from "../SubHeading/SubHeading";
import "./Newsletter.css";

const Newsletter = () => (
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <SubHeading title="Новостная рассылка" />
      <h1 className="headtext__cormorant">
        Подписывайтесь на нашу новостную рассылку
      </h1>
      <p className="p__opensans">
        И никогда не пропустите последние Обновления!
      </p>
    </div>
    <div className="app__newsletter-input flex__center">
      <input type="email" placeholder="Enter your email address" />
      <button type="button" className="custom__button">
        Подписаться
      </button>
    </div>
  </div>
);

export default Newsletter;
