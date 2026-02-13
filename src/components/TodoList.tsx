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
        todoState.todos.map((v, index) => <TodoItem id={v.id} key={v.id} text={v.text} isChecked={v.isChecked}/>)
      }
    </Container>
  )
}

export default TodoList