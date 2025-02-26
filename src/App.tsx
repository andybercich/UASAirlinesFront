import { ComponentVuelo } from "./components/UI/ComponentVuelo/ComponentVuelo";
import styles from "./App.module.css";

import { ShowVuelo } from "./components/UI/ShowVuelo/ShowVuelo";
import { DataClient } from "./components/UI/DataClient/DataClient";
import { DetailPayment } from "./components/UI/DetailPayment/DetailPayment";
import { DetailBuy } from "./components/UI/DetailBuy/DetailBuy";
import HeroSection from "./components/UI/HeroSection/HeroSection";
import './index.css'
import NavBar from "./components/UI/NavBar/NavBar";


function App() {
  return (
    <div className={styles.containerMain}>
      <NavBar />
      <HeroSection/>
      
    </div>
  );
}

export default App;