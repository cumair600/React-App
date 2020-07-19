import React from 'react';

class Form extends React.Component {

    constructor(props)
    {
        super(props);
        this.state = {text: ''}; 
    }

    foo = event => {
        this.setState({text : event.target.value})
    }
    
    render() {
        return (
            <div className="Form">
                <h1> Welcome </h1>
                <label> Enter any Text:  </label>
                <input type="text" name='text' /><br />
                <input id='field' type="submit" value="Submit" onClick={this.foo} /><br />
                <label> {this.state.text} </label>
                
            </div>
        );
    }
}

export default Form;