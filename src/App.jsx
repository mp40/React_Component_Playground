import React from "react";
import "./App.css";
import Modal from "./Modal"
 
class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            modalButton: false
        };
    }

    toggleModal(){
        this.setState({modalButton: !this.state.modalButton})
    }

    render(){
        return (
            <div>
                <button onClick={this.toggleModal.bind(this)}>
                    Click To Render Modal
                </button>
                {this.state.modalButton ? <Modal/> : null}
            </div>
        )
    }
}

export default App;
