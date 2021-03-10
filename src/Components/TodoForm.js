import React, {useState} from 'react'
import {
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  Button,
  Form,
  Container
} from "reactstrap"

import {v4} from "uuid"

const TodoForm = ({addTodos}) => {

  const[todoString, setTodoString] = useState("")

  const handleSubmit = e =>{
    e.preventDefault()
    if (todoString === "") {
      return alert("Please eneter todo")
    }

    const todo = {
      todoString,
      id: v4()
    }

    addTodos(todo)

    setTodoString("")
  }


  return(
    <Form>
      <FormGroup>
        <FormGroup>
          <InputGroup>
            <Input 
              type="text"
              name="todo"
              id="todo"
              placeholder="Enter todo"
              value={todoString}
              onChange={e => setTodoString(e.target.value)}
            />
            <InputGroupAddon addonType="prepend">
            <Button onClick={handleSubmit} color="success">Add Todo</Button>
          </InputGroupAddon>
          </InputGroup>
        </FormGroup>
      </FormGroup>
    </Form>
  )

}

export default TodoForm;