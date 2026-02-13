import { MessageSquarePlus } from 'lucide-react';
import { ChangeEvent, FormEvent, useCallback } from 'react';
import styled from 'styled-components'
import { useInputTodoDispatch, useInputTodoState, useTodoDispatch } from '../Todo/TodoProvider';

const Container = styled.div`
  display: flex;
`

const FormContainer = styled.form`
  display: flex;
  flex: 1;
`

const Input = styled.input`
  flex: 1;
  font-size: 20px;
  padding: 12px;
  border: 1px solid #c0c0c0;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
`

const EnterBtn = styled.button`
  color: #c0c0c0;
  padding: 8px 16px;
  background-color: white;
  border: 1px solid #c0c0c0;
  border-left: 0; 
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  cursor: pointer;
  :hover {
    color: #000000
  }
`

const TodoInput = () => {
  const todoDispatch = useTodoDispatch()
  const inputDispatch = useInputTodoDispatch()
  const inputState = useInputTodoState()
  
  const handleInputChanged = (e:ChangeEvent<HTMLInputElement>) => {
    inputDispatch({
        type: 'change',
        payload: e.target.value
     })
  }

  const handleSubmit = (e:FormEvent) => {
    e.preventDefault();
      if(!inputState.text) {
        return;
      }

      todoDispatch({
        type: 'add',
        payload: {
          text: inputState.text
        }
      })

      inputDispatch({
        type: 'clear',
      })
  }

  return (
    <Container>
      <FormContainer onSubmit={handleSubmit}>
        <Input placeholder="해야할 Todo" value={inputState.text}
        onChange={handleInputChanged}/>
        <EnterBtn type='submit'><MessageSquarePlus /></EnterBtn>
      </FormContainer>
    </Container>
  )
}

export default TodoInput