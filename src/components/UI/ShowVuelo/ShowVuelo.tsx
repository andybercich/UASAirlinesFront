import styles from "./ShowVuelo.module.css";

export const ShowVuelo = () => {
  return (
    <div className={styles.container}>
      <h2>Vuelo</h2>
      <p className={styles.line}></p>
      <div className={styles.showDestiny}>
        <div className={styles.origen}>
          <h3>Origen</h3>
          <p>Mendoza, Argentina</p>
        </div>

        <div className={styles.destino}>
          <h3>Destino</h3>

          <p>Buenos Aires, Argentina</p>
        </div>
      </div>
      <div className={styles.showDays}>
        <div className={styles.ida}>
          <p>Domingo</p>
          <p>18 Diciembre</p>
        </div>
        <div className={styles.regreso}>
          <p>Sabado</p>
          <p>30 Septiembre</p>
        </div>
      </div>

      <div className={styles.showClass}>
        <p>2 pasajeros, Bussines</p>
      </div>
    </div>
  );
};