import styles from "./DetailBuy.module.css";

export const DetailBuy = () => {
  return (
    <div className={styles.container}>
      <div className={styles.showDataIda}>
        <div className={styles.showDataDD}>
          <p className={styles.txtDestino}><b>Mendoza - Buenos Aires</b></p>
          <p className={styles.txtDia}>Jueves, 18 de enero</p>
        </div>

        <div className={styles.showDataAD}>
          <div className={styles.containerData}>
            <p className={styles.txt}><b>MDZ</b></p>
            <div className={styles.lineContainer}>
              <span className={styles.directo}>Directo</span>
              <span className={styles.line}></span>
            </div>
            <p className={styles.txt}><b>AEP</b></p>
          </div>

          <div className={styles.showDuracion}>
            <p className={styles.txtDuration}>Duración</p>
            <p className={styles.txtTime}>1h 40m</p>
          </div>
        </div>
      </div>

      <span className={styles.lineDiv}></span>

      <div className={styles.showDataVuelta}>
      <div className={styles.showDataDD}>
          <p className={styles.txtDestino}><b>Buenos Aires - Mendoza</b></p>
          <p className={styles.txtDia}>Viernes, 26 de enero</p>
        </div>

        <div className={styles.showDataAD}>
          <div className={styles.containerData}>
            <p className={styles.txt}><b>AEP</b></p>
            <div className={styles.lineContainer}>
              <span className={styles.directo}>Directo</span>
              <span className={styles.line}></span>
            </div>
            <p className={styles.txt}><b>MDZ</b></p>
          </div>

          <div className={styles.showDuracion}>
            <p className={styles.txtDuration}>Duración</p>
            <p className={styles.txtTime}>1h 40m</p>
          </div>
        </div>
      </div>
    </div>
  );
};
