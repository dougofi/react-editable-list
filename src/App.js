import React from 'react';
import Users from './components/Users';
import './App.css';

class App extends React.Component{



  
  render(){
    return (
      <div className="App">
        <Users title="List of Customers"/>
      </div>
    );
  }
}
 


export default App;
