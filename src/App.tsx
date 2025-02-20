import { ComponentVuelo } from "./components/UI/ComponentVuelo/ComponentVuelo";
import styles from "./App.module.css";
import { Header } from "./components/UI/Header/Header";
import { ShowVuelo } from "./components/UI/ShowVuelo/ShowVuelo";
import { DataClient } from "./components/UI/DataClient/DataClient";
import { DetailPayment } from "./components/UI/DetailPayment/DetailPayment";
import { DetailBuy } from "./components/UI/DetailBuy/DetailBuy";

function App() {
  return (
    <div className={styles.containerMain}>
      {/*<Header />
      <ComponentVuelo />
      <ShowVuelo />*/}
      <DataClient />
      <DetailPayment />
      <DetailBuy />
    </div>
  );
}

export default App;