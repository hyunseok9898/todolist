import { CircleCheckBig, Trash2, Circle } from 'lucide-react'
import { useCallback } from 'react'
import styled from 'styled-components'
import { useTodoDispatch, useTodoState } from '../Todo/TodoProvider'

const Container = styled.div`
  display: flex;
  padding: 0 5px;
  margin-top: 24px;
`

const CompleteBtn = styled.button`
  display: flex;
  border: 0;
  padding: 0;
  font-size: 16px;
  color: #c0c0c0;
  background-color: white;
  cursor: pointer;
  svg {
    margin-right: 8px;
  }
`

const DeleteBtn = styled.button`
  display: flex;
  border: 0;
  padding: 0;
  font-size: 16px;
  color: #c0c0c0;
  background-color: white;
  align-items: center;
  margin-left: auto;
  cursor: pointer;
  svg {
    margin-right: 8px;
  }
`


const TodoListTools = () => {
  const todoState = useTodoState()
  const todoDispatch = useTodoDispatch()

     const isTodoAllChecked = () => {
    return todoState.todos.every(todo => todo.isChecked)
  }

  const isAllChecked = isTodoAllChecked()

  const handleToggleAllClick = () => {
    todoDispatch({
      type: 'allChecked',
      payload: isAllChecked
    })
  }

    const handleRemoveAllClick = () => {
     todoDispatch({
      type: 'allRemove',
    })
  }

  return (
    <Container>
      <CompleteBtn onClick={handleToggleAllClick}>
        {isAllChecked ? 
        <>
         <Circle />전체해제
        </> : 
        <>
          <CircleCheckBig />전체완료
        </>}
        </CompleteBtn>
      <DeleteBtn onClick={handleRemoveAllClick}><Trash2 />전체삭제</DeleteBtn>
    </Container>
  )
}

export default TodoListTools