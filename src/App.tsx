import { ComponentVuelo } from "./components/UI/ComponentVuelo/ComponentVuelo";
import styles from "./App.module.css";
import { Header } from "./components/UI/Header/Header";
import { ShowVuelo } from "./components/UI/ShowVuelo/ShowVuelo";

function App() {
  return (
    <div className={styles.containerMain}>
      <Header />
      <ComponentVuelo />
      <ShowVuelo />
    </div>
  );
}

export default App;