import React from "react";
import styles from "./Top.module.scss";
import { useNavigate } from "react-router-dom";
export const Top: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigation = (id: string, route?: string) => {
    if (route !== window.location.pathname) {
      navigate(`${route}#${id}`);
    } else {
      window.location.hash = id;
    }
  };
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

          <button
            onClick={() => handleNavigation("catalog", "/")}
            className={styles.button}
          >
            Перейти к покупкам
          </button>
        </div>
        <div className={styles.backgroundText}>SneakMax</div>
      </div>
    </div>
  );
};
