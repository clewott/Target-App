import React, { Component } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../styles/style.scss";
import Products from "./Products";

class App extends Component {
    render() {
        return (
            <div>
                <Products />
            </div>
        );
    }
}

export default App;