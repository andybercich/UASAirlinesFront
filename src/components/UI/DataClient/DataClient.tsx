import styles from "./DataClient.module.css";

export const DataClient = () => {
  return (
    <div className={styles.container}>
      <h3>Datos Personales</h3>

      <div className={styles.containerInputs}>
        <input type="text" placeholder="Nombre/s" />
        <input type="text" placeholder="Apellido/s" />
        <input type="text" placeholder="Dia de Nacimiento (dd/mm/aaaa)" />
        <input type="text" placeholder="Nacionalidad" />
      </div>

      <p className={styles.line}></p>

      <h3>Documentación</h3>

      <div className={styles.containerInputsDocs}>
        <label className={styles.radioLabel}>
          <input type="radio" name="documento" value="dni" defaultChecked />
          DNI
        </label>

        <label className={styles.radioLabel}>
          <input type="radio" name="documento" value="pasaporte" />
          Pasaporte
        </label>
        <input type="text" placeholder="Número" />
      </div>

      <p className={styles.line}></p>

      <h2>NO SE LE PIDEN MAS COSAS AL CLIENTE</h2>
    </div>
  );
};
