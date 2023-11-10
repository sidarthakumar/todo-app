import AppName from './components/AppName';
import AppTodo from './components/AppTodo';
import TodoItems from './components/todoItems';
import './App.css';

function App() {
  const todoItems = [
    { name: 'Buy Milk', dueDate: '2023/10/04' },
    { name: 'Go to college', dueDate: '2023/10/04' },
    { name: 'Like this video', dueDate: 'Right Now' },
  ];
  return (
    <center className='todo-container'>
      <AppName />
      <AppTodo />
      <TodoItems todoItems={todoItems} />
    </center>
  );
}
export default App;
