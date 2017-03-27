import React, { Component } from 'react'


class TodoInput extends Component {

    constructor(props, context) {
        super(props, context)
        this.state = {
            inputText: ''
        }
    }

    handleSubmit(event){
        event.preventDefault();
        console.log('submit button clicked')
    }

    handleChange(event) {
        //console.log(this)
        //console.log(event.target.value);
        this.setState({
            inputText : event.target.value
        })
    }

    render(){
        return (
            <div>
                <input 
                    placeholder= "Type in your todo" 
                    type="text"
                    value={this.state.inputText}
                    onChange={this.handleChange.bind(this)}
                />
                <button onClick={this.handleSubmit.bind(this)}>Submit</button>
            </div>
        )
    }
}

export default TodoInput