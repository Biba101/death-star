import React, {Component} from 'react';
import classes from './App.css';
import AuthForm from "./components/AuthForm/AuthForm";

class App extends Component {
    render() {
        return (
            <div className={classes.App}>
                <AuthForm/>
            </div>
        );
    }
}

export default App;
