import React, { Component } from 'react'

export class Counter extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
            counter: 0
        }
    }
    
    setCounter() {
        // this.setState({
        //     counter: this.state.counter + 1
        // })
        this.setState(prevState => ({
            counter: prevState.counter + 1
        }))
    }

    setCounter5() {
        this.setCounter()
        this.setCounter()
        this.setCounter()
        this.setCounter()
        this.setCounter()
    }

    render() {
        return (
            <div>
                <h1>Count - {this.state.counter}</h1>
                <button onClick={() => { this.setCounter()}}>Increment</button>
                <button onClick={() => { this.setCounter5()}}>Increment 5</button>
            </div>
        )
    }
    
}

export default Counter
