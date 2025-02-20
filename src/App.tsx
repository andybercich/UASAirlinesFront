import { ComponentVuelo } from "./components/UI/ComponentVuelo/ComponentVuelo";
import styles from "./App.module.css";
import { Header } from "./components/UI/Header/Header";

function App() {
  return (
    <div className={styles.containerMain}>
      <Header />
      <ComponentVuelo />
    </div>
  );
}

export default App;