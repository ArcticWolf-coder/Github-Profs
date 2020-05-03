import React, { useState } from 'react';
const axios=require('axios');
const data=[
    {name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "Facebook"},
    {name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Google"},

];
const CardList=(props)=>(
    <div>
        {props.profiles.map(prof=> <Card {...prof}/>)}
    </div>
);
class Form extends React.Component{
  state={ username: ''};
  handleSubmit= async(event)=>{
    event.preventDefault();
    const resp=await
    axios.get(`https://api.github.com/users/${this.state.username}`);
    this.props.onSubmit(resp.data);
    this.setState({username:''});
  }
  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder ="Github username" value={this.state.username} 
        onChange={event=>this.setState({username:event.target.value})} required />
        <button> Add</button>
      </form>
    );
  }
}
class Card extends React.Component {
	render() {
  	const profile = this.props;
  	return (
    	<div className="github-profile">
    	  <img src={profile.avatar_url} />
        <div className="info">
          <div className="name">{profile.name}</div>
          <div className="company">{profile.company}</div>
        </div>
    	</div>
    );
  }
}
class App extends React.Component {
  state = {
    profiles: [],
  };
  addProf=(newData)=>{
    this.setState(prevState=>({
      profiles:[...prevState.profiles,newData],
    }));
  }
  
	render() {
  	return (
    	<div>
    	  <div className="header">{this.props.title}</div>
        <Form onSubmit={this.addProf} />
        <CardList profiles={this.state.profiles} />
    	</div>
    );
  }	
}

export default App;
