import React from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../actions';

class TodoForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
                inputValue: ""
            }           
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    createNewTodo = e => {
        e.preventDefault();
        this.props.addTodo(this.state.inputValue);
        this.setState ({ inputValue: ""})
    }



    render(){
        return (
            <form>
                <input type = "text"
                        placeholder = "input-field"  
                        onChange = {this.handleChange}
                        name = "inputValue"
                        value = {this.state.inputValue}
                        />
                <button onClick = {this.createNewTodo} >Submit</button>
            </form>
        )
    }
}

function mapStateToProps(){
    return {}
}

export default connect(mapStateToProps, { addTodo: addTodo })(TodoForm)