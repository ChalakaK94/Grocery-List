import { useState } from 'react';
import './App.css';
import AddItem from './components/AddItems';
import Footer from './components/Footer';
import Header from './components/Header';
import ItemsList from './components/ItemList';

function App() {
  const [items, setItems] = useState([])

  function addItem(item){
    setItems(items=> [...items,item])
  }
  return (
    <div>
       <Header/>
    <div className="container">
      <AddItem addItem={addItem} />
      <ItemsList items={items}/>
      <Footer/>
      
    </div>
    </div>
  );
}

export default App;
