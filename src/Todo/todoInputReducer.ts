export type TodoInputStateType = {
  text: string
}

export type TodoInputActionType = {
  type: 'change',
  payload: {
    text: string
  }
} | {
  type: 'clear'
}

export const todoInputReducer = (state:TodoInputStateType, action:TodoInputActionType) => {
  switch (action.type) {
    case 'change' : 
      return {
        text: action.payload.text
      }
    case 'clear' :
      return {
        text: ''
      }
  }
}