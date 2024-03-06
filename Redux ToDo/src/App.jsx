import './App.css';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';

function App() {
  return (
    <>
    <div className='text-3xl text-white text-bold'>Create New To Do</div>
      <AddTodo/>
      <Todos />
    </>
  );
}

export default App;
