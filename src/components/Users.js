import React from 'react';
import User from '../components/User';


class Users extends React.Component{
    state = {
        users: [
           {id:  "adss", name: "John", age: 20},
            {id:  "adsq", name: "Doe", age: 21},
            {id:  "adswes", name: "Eric", age: 24},
            {id:  "adssdsds", name: "Foo", age: 34},
            {id:  "adxcxcvbvss", name: "Bar", age: 19},
            {id:  "amvds",name: "James", age: 23},
            {id:  "adsdf", name: "Kelly", age: 22},
            {id:  "adsjjj",name: "Jill", age: 14},
        ],
        title: "Users List",
        newUserAge: "",
        newUserName: "",
        newUser: {id: '' , name: '', age:''}
    }

    makeYounger = () => {
      const newState = this.state.users.map((user) => {
          const tempUser = user;
          if(tempUser.age > 2){
            tempUser.age -= 2;
          }
          return tempUser
      })
      this.setState({
          users: newState
      })
    } 


    onChangeHandler = (userid,e) =>{
       const index = this.state.users.findIndex((user) => {
           return user.id === userid;
       });

       let user = {...this.state.users[index]};

       user.name = e.target.value;

       const users = [...this.state.users];

       users[index] = user ;

       this.setState({
           users: users
       })
    
    }

    deletePerson = (e,index) => {
        const users = [...this.state.users];
        users.splice(index,1);

        this.setState({
            users: users
        })

    }

    onAgeChange = (e) =>{
        let incoming = [this.state.newUserAge];

        incoming = e.target.value;

        this.setState({
            newUserAge: incoming
        })
    }

    onNameChange = (e) =>{
        let incoming = [this.state.newUserName];

        incoming = e.target.value;

        this.setState({
            newUserName: incoming
        })
    }
    
    addPerson = (event) => {
        event.preventDefault();
       const timestamp = Date.now();
        const guy = this.state.newUser;
        guy.name = this.state.newUserName;
        guy.age = this.state.newUserAge;
        guy.id = timestamp;

        this.setState({
            newUser: guy
        })

      
        const users = [guy,...this.state.users];

        this.setState({
            users
        })

        this.setState({
            newUserAge: undefined,
            newUserName: undefined,
            newUser: {id: ''}
        }); 

    

         


    }

    render(){
        return(
            <div>
            <button onClick={this.makeYounger}>Make Us Younger</button>
            <br />
                <h2>{this.props.title}</h2>
                <form ref={(input) => this.smallForm = input} onSubmit={this.addPerson}>
                <input type="text" placeholder="name"
                    value ={this.state.newUserName || ''}
                    onChange={this.onNameChange}
                />
                <input type="text" placeholder="age"
                    value ={this.state.newUserAge || ''}
                    onChange={this.onAgeChange}
                />
                   <button type="submit">Add New Customer</button>
                </form>
                
                 
                {this.state.users.map((user,index) => {
                    return(
                        
                        <User key={user.id} age={user.age} value={user.name} onChangeHandler={this.onChangeHandler.bind(this,user.id)} deletePerson={this.deletePerson.bind(this,index)}>{user.name}</User>
                        
                        
                    )
                    
                })}
                
                
               
            </div>
        )
    }
}

export default Users;