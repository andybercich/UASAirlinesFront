import styles from "./ComponentVuelo.module.css";

export const ComponentVuelo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerInfo}>
        <div className={styles.content1}>
          <input type="checkbox" className={styles.inputCheck} />
          <h3 className={styles.nameAirline}>UASAirlines</h3>
        </div>
        <div className={styles.contentInfoVuelo}>
          <p className={styles.txt}>MDZ</p>
          <span className={styles.line}></span>
          <p className={styles.txt}>AEP</p>
        </div>
        <div className={styles.contentbutton}>
          <p>$127.600</p>
          <button>Ver Oferta</button>
        </div>
      </div>
    </div>
  );
};
