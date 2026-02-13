import './App.css';
import TodoDivider from './components/TodoDivider';
import TodoHeader from './components/TodoHeader';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import TodoListTools from './components/TodoListTools';
import TodoListArea from './components/TodoListArea';
import TodoProvider from './Todo/TodoProvider';



function App() {
  return (
    <main className="App">
      <TodoProvider>
        <TodoHeader />
        <TodoInput />
        <TodoListArea>
          <TodoListTools />
          <TodoDivider />
          <TodoList />
        </TodoListArea>
      </TodoProvider>
    </main>
  );
}

export default App;


