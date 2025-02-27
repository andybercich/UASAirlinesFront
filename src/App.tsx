import HeroSection from "./components/UI/HeroSection/HeroSection";
import './index.css'
import NavBar from "./components/UI/NavBar/NavBar";
import { ShowVuelo } from "./components/ShowVuelo/ShowVuelo";
import { ComponentVuelo } from "./components/ComponentVuelo/ComponentVuelo";


function App() {
  return (
    <div >
      <NavBar />
      <HeroSection/>
      <ShowVuelo />
      <ComponentVuelo />
    </div>
  );
}

export default App;