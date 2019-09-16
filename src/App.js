import React from "react";
import Header from "./components/Header";
import Compliment from "./components/Compliment";
import Footer from "./components/Footer";

class App extends React.Component{
    render(){
        return(
            <div className="App">
                <Header />
                <Compliment/>
                <Footer />
            </div>
        )
    }
}

export default App