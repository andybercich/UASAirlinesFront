import styles from "./Header.module.css"


export const Header = () => {
  return (
    <div className={styles.containerHeader}>
        <div className={styles.titulo}>
        <h3>UAS<p className={styles.line}></p><span className={styles.textAir}>Airlines</span></h3>
        </div>
        <div className={styles.componentsHeader}>
            <ul>
                <li>Mis Reservas</li>
                <li>Servicios</li>
                <li>Informacion</li>
            </ul>
        </div>
    </div>
  )
}
