import React from 'react';
import { connect } from 'react-redux';

const TodoList = (props) => {
    return (
        <div>
        
                {props.todos.map((todo, index) => {
                    return <div key = {index}> {todo.todo} </div>
                })}
            
        </div>
    )
}

function mapStateToProps(state){
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps)(TodoList);