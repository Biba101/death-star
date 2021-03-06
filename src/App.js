import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
// import logo from './logo.svg';
import './App.css';




class App extends Component {
  render() {
    return (
      <div className="App">
          <div className>
              <Button variant="contained">Default</Button>
              <Button variant="contained" color="primary">
                  Primary
              </Button>
              <Button variant="contained" color="secondary">
                  Secondary
              </Button>
              <Button variant="contained" disabled>
                  Disabled
              </Button>
              <Button variant="contained" color="primary" href="#contained-buttons">
                  Link
              </Button>
          </div>
      </div>
    );
  }
}

export default App;
