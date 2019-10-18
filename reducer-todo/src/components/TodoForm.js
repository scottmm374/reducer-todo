import React, { useState, useReducer } from 'react'
import { initialState, reducer } from '../reducers/reducer'

const TodoForm = () => {
    const[todo, setTodo] = useState({});
    const[completed, setCompleted] = useState(false);


    return(
        <div>
            <form>
             {/* onSubmit={handleSubmit}> */}
                <input type='text'
                         value="task" 
                         placeholder="Add Todo" 
                        //  onChange={handleChange}
                          />
            </form>
            <div>
                <button>Add Todo</button>
                <button>Clear Completed</button>
            </div>
        </div>
    )    
}

export default TodoForm;