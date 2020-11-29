import React from 'react';

export default class Message extends React.Component {

    constructor() {
        super()
        this.state = {
            message: 'Welcome vistor'
        }
    }
 
    changeMessage() {
        this.setState({
            message: "Welcome subsciber"
        })
    }
    render() {
        return (
         <div>
            <h1><code>Hey I'm Tenzin, Welcome to tenzin.land, {this.state.message}</code></h1>
            <button onClick={() => this.changeMessage()}>Subscibe</button>
        </div>
        )
    }
}