export type TodoType = {
  id: number
  text: string
  isChecked: boolean
}

export type TodoStateType = {
  todos: TodoType[]
}

export type TodoActionType = {
  type: 'add',
  payload: {
    text: string
  }
} | {
  type: 'remove'
  payload: {
    id: number
  }
} | {
  type: 'checked'
  payload: {
    id: number
  }
} | {
  type: 'allChecked'
  payload: boolean
} | {
  type: 'allRemove'
}

export const todoReducer = (state:TodoStateType, action:TodoActionType) => {
  switch(action.type) {
    case 'add':
      return {
        todos: state.todos.concat({
        id: Date.now(),
        text: action.payload.text,
        isChecked: false,
        })
      }
        case 'remove':
      return {
        todos: state.todos.filter(todo => 
        todo.id !== action.payload.id
       )
      }
    case 'checked':
      return {
        todos: state.todos.map((todo) => 
        todo.id === action.payload.id ?  {...todo, isChecked: !todo.isChecked} : todo)
       }
    case 'allChecked':
      const allChecked = state.todos.every(todo => todo.isChecked)
      return {
        todos: state.todos.map((todo) => ({
          ...todo,
          isChecked: !allChecked
        }))
      }
    case 'allRemove':
      return {
       todos: []
      }
  }
}