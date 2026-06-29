import styled from "styled-components"
import TodoItem from "./TodoItem"
import { useTodoState } from "../Todo/TodoProvider"


const Container = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`


const TodoList = () => {
 const todoState = useTodoState()
  return (
    <Container>
      {
        todoState.todos.map((todo) => {
          return <TodoItem id={todo.id} key={todo.id} text={todo.text} isChecked={todo.isChecked}/>
        })
      }
    </Container>
  )
}

export default TodoList