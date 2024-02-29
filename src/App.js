
import './App.css';
import { ItemListcontainer } from './Componentes/ItemListcontainer/ItemListcontainer';
import { Navbar } from './Componentes/Navbar/Navbar';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListcontainer bienvenida = "Bienvenidos a mi futura pagina e-commerce"/>
    </div>
  );
}

export default App;
