import React from "react";
import "./App.css";
import Modal from "./Modal"
 
class App extends React.Component{
    render(){
        return (
            <div>
                <button>
                    Click To Render Modal
                </button>
                <Modal/>
            </div>
            
        )
    }
}

export default App;
