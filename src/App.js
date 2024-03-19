
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { ItemListcontainer } from './Componentes/ItemListcontainer/ItemListcontainer';
import { Navbar } from './Componentes/Navbar/Navbar';
import { ItemDetailContainer } from './Componentes/ItemDetailContainer/ItemDetailContainer';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<ItemListcontainer bienvenida = "Bienvenidos"/>}></Route>
          <Route path='category/:categoryId' element={<ItemListcontainer bienvenida = "Bienvenidos"/>}></Route>
          <Route path='item/:ItemId' element={<ItemDetailContainer/>}></Route>
          <Route path='*' element={<h1>404 Not Found</h1>}/>

        </Routes>
      </BrowserRouter>
      
  
    </div>
  );
}

export default App;
