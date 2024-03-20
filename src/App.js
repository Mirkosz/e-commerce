
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ItemListcontainer } from './Componentes/ItemListcontainer/ItemListcontainer';
import { Navbar } from './Componentes/Navbar/Navbar';
import { ItemDetailContainer } from './Componentes/ItemDetailContainer/ItemDetailContainer';
import './App.css';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>

        <Routes>
          <Route path='/' element={<ItemListcontainer/>}></Route>
          <Route path='category/:categoryId' element={<ItemListcontainer/>}></Route>
          <Route path='item/:itemId' element={<ItemDetailContainer/>}></Route>
          <Route path='*' element={<h1>404 Not Found</h1>}/>
        </Routes>
        
      </BrowserRouter>
  
    </div>
  );
}

export default App;
