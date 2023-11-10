import AppName from './components/AppName';
import AppTodo from './components/AppTodo';
import TodoItem from './components/TodoItem';
import TodoItem1 from './components/TodoItem1';
import './App.css';

function App() {
  return (
    <center className='todo-container'>
      <AppName />
      <AppTodo />
      <TodoItem />
      <TodoItem1 />
    </center>
  );
}
export default App;
