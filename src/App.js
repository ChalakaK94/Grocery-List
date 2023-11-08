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

  function deleteItem(id){
    setItems(items=> {
      return items.filter(item=> item.id !== id);
    })
  }
  function onItemSelected(id){
    setItems(items=> {
      return items.map((item)=>{
        return item.id === id ? {...item, selected: !item.selected} : item
      })
    })
  }
  return (
    <div>
       <Header/>
    <div className="container">
      <AddItem addItem={addItem} />
      <ItemsList items={items} deleteItem={deleteItem} itemSelected={onItemSelected}/>
      <Footer items={items}/>
      
    </div>
    </div>
  );
}

export default App;
