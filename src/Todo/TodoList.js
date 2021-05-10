import React from "react";
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

const styles = {
    ul: {
        listStyle: 'none',
        margin: 0,
        padding: 0
    }
} 

function TodoList(props) {
    const { todos } = props;
 
    return (
        <ul style={styles.ul}>
            {todos.map((todo,index) => {
                const unique = Date.now();
                return <TodoItem key={unique + todo.id} todo={todo} index={index} />
            })}
        </ul>
    )
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default  TodoList;