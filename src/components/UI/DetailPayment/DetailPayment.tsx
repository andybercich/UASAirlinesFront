import styles from "./DetailPayment.module.css";

export const DetailPayment = () => {
  return (
    <div className={styles.container}>
      <div className={styles.showDetail}>
        <p>
          Vuelo de una persona <span className={styles.price}>$124.503</span>
        </p>
        <p>
          Impuestos, tasas y cargos <span className={styles.price}>$82.530</span>
        </p>
      </div>

      <p className={styles.line}></p>

      <div className={styles.showTotal}>
        <h4>
          TOTAL <span>$207.033</span>
        </h4>
      </div>
    </div>
  );
};
