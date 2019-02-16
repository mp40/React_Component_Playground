import React from "react";
import "./App.css";
import Modal from "./Modal"
 
class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            showModal: false
        };
    }

    toggleModal(){
        this.setState({showModal: !this.state.showModal})
    }

    render(){
        return (
            <div>
                <button onClick={this.toggleModal.bind(this)}>
                    Click To Render Modal
                </button>
                {this.state.showModal ? <Modal/> : null}
            </div>
        )
    }
}

export default App;
