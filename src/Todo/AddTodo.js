import React from 'react';
import useInputValue from '../hooks/useInputValue';

function AddTodo({onCreate}) {
    const input = useInputValue('');

    function submitHandler(event) {
        event.preventDefault();

        if (input.value().trim()) {
            onCreate(input.value());
            input.clear()
        }
    }

    return (
        <form style={{marginBottom: '1rem'}} onSubmit={submitHandler} >
            <input type="text" {...input.bind} />
            <button type="submit">Add todo</button>
        </form>
    )
}

export default AddTodo;