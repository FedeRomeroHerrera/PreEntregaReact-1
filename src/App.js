import './App.css';
import Navbar from './components/NabBar';
import ItemList from './components/ItemListContainer';

function App() {
  return (
    <div id="root">
      <Navbar /> 

      <div className='item-list-container'>
        <ItemList 
          saludo=""/> 
      </div>
    </div>
    
  );
}

export default App;
