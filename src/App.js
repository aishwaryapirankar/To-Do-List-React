import React, { useState } from 'react';
import './App.css';
import {Button, FormControl, InputLabel, Input} from '@material-ui/core';

import CheckboxList from './CheckboxList';

function App() {
  const [todos, setTodos] = useState(['Eat', 'Sleep','Code','Workout', 'Watch TV']);
  const [input, setInput] = useState('');

  const addTodo = (event) => {
    event.preventDefault();
    console.log('Hello');
    setTodos([...todos, input]);
    setInput('');
  }


  return (
    <div className="App">
      <h1>To Do List</h1>

      <form>
        <FormControl>
          <InputLabel>Enter task:</InputLabel>
          <Input value ={input} onChange={event => setInput(event.target.value)} />
        </FormControl>

        <Button disabled={!input} style={{margin: 5}} variant="contained" color="secondary" type = "submit" onClick={addTodo}>Add Task</Button>
      </form>

      <div id="space">
        <ol>
          {todos.map(todo =>(
            <CheckboxList text={todo}/>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default App;