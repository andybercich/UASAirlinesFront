import styles from "./DetailBuy.module.css";

export const DetailBuy = () => {
  return (
    <div className={styles.container}>
      <div className={styles.showDataIda}>
        <div className={styles.showDataDD}>
          <p className={styles.txtDestino}>Mendoza - Buenos Aires</p>
          <p className={styles.txtDia}>Jueves, 18 de enero</p>
        </div>

        <div className={styles.showDataAD}>

            <div className={styles.containerData}>

          <p className={styles.txt}>MDZ</p>
          <span className={styles.line}></span>
          <p className={styles.txt}>AEP</p>
            </div>

          <div className={styles.showDuracion}>
            <p className={styles.txtDuration}>Duración</p>
            <p className={styles.txtTime}>1h 40min</p>
          </div>
        </div>
      </div>
      

      <div className={styles.showDataVuelta}></div>
    </div>
  );
};
