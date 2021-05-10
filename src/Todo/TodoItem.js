import React, {useContext} from "react";
import PropTypes from 'prop-types';
import Context from '../Context';

const styles = {
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '.5rem 1rem',
        border: '1px solid #ccc',
        borderRadius: '4px',
        marginBottom: '.5rem'
    },
    input: {
        marginRight: '1rem',
        cursor: 'pointer'
    },
    strong: {
        marginRight: '.2rem'
    },
}
function TodoItem({todo, index, onChange}) {

    const { removeTodo, toggleTodo } = useContext(Context);

    return (
        <li style={styles.li} >
            <span className={todo.completed ? 'Done' : null }>
                <input id={todo.id} checked={todo.completed} style={styles.input} type="checkbox" onChange={()=> toggleTodo(todo.id)} />
                <label htmlFor={todo.id} style={{cursor: 'pointer'}}>
                    <strong style={styles.strong} >{index + 1}.</strong>
                    {todo.title}
                </label>
            </span>
             <button className="Button" onClick={() => removeTodo(todo.id)} >&times;</button>
        </li>
    )
}

TodoItem.propTypes = {
    index: PropTypes.number,
    todo: PropTypes.object.isRequired
}

export default TodoItem;