import React from "react";

export default class Counter extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            counter: 0
        }
        this.decrement = () => this.setState({ counter: this.state.counter - 1 })
        this.increment = () => this.setState({ counter: this.state.counter + 1 })
        
    }

    render() {
        return <div className="   flex flex-col min-h-screen justify-center items-center">
            <div className="counter bg-red-100 p-40 rounded-md shadow-xl ">
                
                <button className="bg-white hover:bg-gray-50 shadow-xl text-gray-600 font-bold p-5 rounded-lg" onClick={this.decrement}>Decrease</button>
                <div className="text-6xl py-3 text-gray-700 m-7">
                    {this.state.counter}
                </div>
                <button className="bg-white hover:bg-gray-50 shadow-xl text-gray-600 font-bold p-5 rounded-lg  " onClick={this.increment}>Increase</button>
                
            </div>
        </div>
    }
}