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
                <div>
                    <p>
                    THIS IS THE MAIN BODY HERER HERE HERE HERE HERE HERE
                    </p>
                    <p>
                    THIS IS THE MAIN BODY HERER HERE HERE HERE HERE HERE
                    </p>
                    <p>
                    THIS IS THE MAIN BODY HERER HERE HERE HERE HERE HERE
                    </p>
                    <p>
                    THIS IS THE MAIN BODY HERER HERE HERE HERE HERE HERE
                    </p>
                    <p>
                    THIS IS THE MAIN BODY HERER HERE HERE HERE HERE HERE
                    </p>
                    <p>
                    THIS IS THE MAIN BODY HERER HERE HERE HERE HERE HERE
                    </p>
                </div>
                {this.state.showModal ? <Modal/> : null}
            </div>
        )
    }
}

export default App;
