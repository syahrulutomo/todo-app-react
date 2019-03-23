import React,{Component} from 'react';

export default class Input extends Component {
    render(){
        return(
            <input placeholder="add a task.." className="input" value={this.props.value} onChange={this.props.handleChange} onKeyUp={this.props.handleEnter}/>
        );
    }
};
