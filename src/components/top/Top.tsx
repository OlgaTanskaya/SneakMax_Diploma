import React from "react";
import styles from "./Top.module.scss";
import { NavLink } from "react-router-dom";
export const Top: React.FC = () => {
  return (
    <div className={styles.bannerWrapper}>
      <div className="container">
        <div className={styles.content}>
          <h1>
            Кроссовки известных брендов <br /> с доставкой по России и СНГ
          </h1>
          <p>
            Мы продаем кроссовки брендов Nike, Adidas, Puma, Reebok, Converse и
            многие другие по низким ценам
          </p>
          <NavLink to="/">
            <button className={styles.button}>Перейти к покупкам</button>
          </NavLink>
        </div>
        <div className={styles.backgroundText}>SneakMax</div>
      </div>
    </div>
  );
};
