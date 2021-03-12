import './App.css';
import Counter from './Components/Counter';
import Footer from './Components/Footer';
import Todo from '../src/Components/Todo';
import Pokemon from './Pokemon/Pokemon';
function App() {
  return (
    <div className="App">
      <h2>This is basic Test</h2>
      <Counter name={'Hello I am Counter !!!'}/>
      <hr></hr>
      <Todo/>
      
      <Pokemon/>
      <Footer/>
      
    </div>
  );
}

export default App;
