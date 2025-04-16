import Navbar from "./components/navbar/navbar";
import Navmenu from './components/navmenu/navmenu';
import Footer from "./components/footer/footer";
import Card from "./components/card/card";
import './App.css'
function App() {
  return (
    <div className="App">
     <Navbar/>
     <Navmenu/>
     <Card/>
     <Footer/>
    </div>
  );
}

export default App;
