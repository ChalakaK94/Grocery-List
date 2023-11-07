import './App.css';
import AddItem from './components/AddItems';
import Footer from './components/Footer';
import Header from './components/Header';
import ItemsList from './components/ItemList';

function App() {
  return (
    <div>
       <Header/>
    <div className="container">
      <AddItem/>
      <ItemsList/>
      <Footer/>
      
    </div>
    </div>
  );
}

export default App;
