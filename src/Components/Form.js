import React from 'react';

class Form extends React.Component {

    constructor(props)
    {
        super(props);
        this.state = {text: '', output: ''}; 
    }

    handleClick = (event) =>
    {
        event.preventDefault();
        this.setState({output: this.state.text});
    }

    handleChange = (event) =>
    {
        this.setState({text: event.target.value})
    }
    
    render() {
        return (
            <div className="Form">
                <h1> Welcome </h1>
                <label> Enter any Text:  </label>
                <input type="text" name='text' onChange={this.handleChange}/><br />
                <button onClick={this.handleClick}>Submit</button><br />
                <label> {this.state.output} </label>
                
            </div>
        );
    }
}

export default Form;