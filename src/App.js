
import './App.css';
import Todolist from './components/Todolist';
import Addtodo from './components/Addtodo';




function App() {
  return (
    <div className="App">
      <h1>TODO-LIST-REDUX</h1>
      <Addtodo/>
     <Todolist/>
     
    </div>
  );
}

export default App;
