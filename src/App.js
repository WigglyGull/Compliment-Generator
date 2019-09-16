import React from "react";
import Header from "./components/Header";
import Compliment from "./components/Compliment";

class App extends React.Component{
    render(){
        return(
            <div className="App">
                <Header />
                <Compliment/>
            </div>
        )
    }
}

export default App