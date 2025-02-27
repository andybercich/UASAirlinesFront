import HeroSection from "./components/UI/HeroSection/HeroSection";
import './index.css'
import NavBar from "./components/UI/NavBar/NavBar";
import { ShowVuelo } from "./components/UI/ShowVuelo/ShowVuelo";
import { ComponentVuelo } from "./components/UI/ComponentVuelo/ComponentVuelo";


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