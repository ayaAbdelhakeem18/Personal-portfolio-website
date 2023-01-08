import '../styling/App.css';
import "../styling/screen-sizes.css";
import Navbar from "./Nav";
import Home from "./Home";
import Section2 from "./section2";
import Section3 from "./section3";
import Section4 from "./section4";
import Section5 from "./section5";
import Contact from "./contact";

function App() {

   return (
    <div className="app">
    <Navbar />
    <Home />
    <Section2 />
    <Section3 />
    <Section4 />
    <Section5 />
    <Contact  />
    </div>
  );
}

export default App;
