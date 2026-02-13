import styled from 'styled-components'
import { useTodoState } from '../Todo/TodoProvider'

const HeaderTitle = styled.h1`

`

const TodoCount = styled.mark`
  color: #32CD32;
  background-color: inherit;
`

const TodoHeader = () => {
  const todoState = useTodoState()
  const count = todoState.todos.filter(todo => !todo.isChecked).length
  return (
    <header>
      <HeaderTitle>
        <TodoCount>{count}</TodoCount>
        개의 할일
      </HeaderTitle>
    </header>
  )
}

export default TodoHeader