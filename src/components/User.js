import React from 'react';



class User extends React.Component{
    render(){
        let age = this.props.age ? this.props.age : 'NA';
        
            return (
                <div>
                    <h1>Name: {this.props.children}  | Age: {age}<span><input type="text"  className="inputBox" value={this.props.value} onChange={this.props.onChangeHandler}/><button onClick={this.props.deletePerson}>Delete</button></span></h1>
                </div>
            )
        
      
    }
}
    



export default User;