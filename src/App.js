import React, { Component } from "react"

class App extends Component{
  constructor(props){
    super(props);
    this.state ={
      viewActive: false,
      activeItem:{
        name: "",
        active: true
      },
      users:[]
    }
  }

  async componentDidMount(){
    try{
      const res = await fetch('http://localhost:8000/api/users')
      const users = await res.json()
      console.log(users)
      this.setState({
        users
      });
    } catch(e){
      console.log(e)
    }
  }

  renderItems = ()=>{

    return this.state.users.map(users => (
      <li>
            {users.active}, 
        {users.name} </li>
    ));
  }

  render(){
    return(
      <div>
        {this.renderItems()}
      </div>
    )
  }
}

export default App;
