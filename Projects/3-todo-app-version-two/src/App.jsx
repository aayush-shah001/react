import AppName from "./components/AppName"
import AppTodo from "./components/AppTodo"
import TodoItem1 from "./components/TodoItem1"
import TodoItem2 from "./components/TodoItem2"
import TodoItem from "./components/TodoItem"
import TodoItems from "./components/TodoItems"
import "./App.css"

function App() {

  const todoItems = [
    {
    name: 'Buy Milk',
    dueDate: '2024/07/07'
    },
    {
      name: 'Go To College',
      dueDate: '2024/07/07'
    }
] 

  return (
    <>
      <center className="Todo-container">
        <AppName />
        <AppTodo />
        <TodoItems todoItems={todoItems}></TodoItems>

      </center>
    </>
  )
}

export default App
