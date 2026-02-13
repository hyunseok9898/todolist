import { Check, CircleMinus } from "lucide-react"
import { useCallback } from "react"
import styled from "styled-components"
import { useTodoDispatch } from "../Todo/TodoProvider"

const Container = styled.li<ContainerProps>`
  display: flex;
  align-items: center;
  font-size: 18px;
  margin: 16px 0;
  padding: 8px;
  cursor: pointer;
  
  &:hover {
    background-color: #f5f5f5;
    transition: background-color 0s;

    svg:last-child {
    visibility: visible;
  }
  }

  span {
    font-size: 24px;
  }

  svg {
    cursor: pointer;
  }
  
  svg:first-child {
    margin-right: 16px;
    color: ${({$checked}) => ($checked ? "#32cd32" : "#c0c0c0")};
  }

  svg:last-child {
    margin-left: auto;
    color: ${({$checked}) => ($checked ? "red" : "#c0c0c0")};
    visibility: hidden;
  }
`

const ListText = styled.span<ContainerProps>`
  text-decoration: ${({$checked}) => ($checked ? "line-through" : 'none')};
  color: ${({$checked}) => ($checked ? "#c0c0c0" : "black")};
`

interface TodoItemProps {
  id: number
  text: string
  isChecked: boolean
}

interface ContainerProps {
  $checked: boolean
}

const TodoItem = (props: TodoItemProps) => {
  const todoDispatch = useTodoDispatch()

  const handleToggleClick = () => {
      todoDispatch({
        type: 'checked',
        payload: {
          id: props.id
        }
      })
  }

  const handleRemoveClick = () => {
      todoDispatch({
        type: 'remove',
        payload: {
          id: props.id
        }
      })
  }

  return (
    <Container $checked = {props.isChecked}>
      <Check onClick={handleToggleClick}/>
      <ListText $checked = {props.isChecked}>{props.text}</ListText>
      <CircleMinus onClick={handleRemoveClick}/>
    </Container>
  )
}

export default TodoItem