import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

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
                <TextField id="standard-basic" label="Enter Any Text"type="text" name='text' onChange={this.handleChange}/><br /><br />
                <Button variant="contained" color="primary" onClick={this.handleClick} >Submit</Button><br /><br />
                <label> {this.state.output} </label>
            
            </div>
        );
    }
}

export default Form;