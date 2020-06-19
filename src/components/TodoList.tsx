import React from 'react'

interface TodoListProps {
  items: {id: string, text: string}[]
}

const TodoList: React.FC<TodoListProps> = props => {
  
  return (
    <React.Fragment>
      <ul>
        {props.items.map(todo => <li key={todo.id}>{todo.text}</li>)}
      </ul>
    </React.Fragment>
  )
}

export default TodoList
