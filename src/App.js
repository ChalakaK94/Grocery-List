import './App.css';
import AddItem from './components/AddItems';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="continer">
      <Header/>
      <AddItem/>
      <ItemsList/>
      <Footer/>
      
    </div>
  );
}

export default App;
