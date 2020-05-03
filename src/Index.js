
const data = [
    {name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook"},
    {name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Google"},
    {name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
];
const cardList = (props) => (
	<div>
  	{data.map(profile => <Card {...profile}/>)}
	</div>
);
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
	render() {
  	return (
    	<div>
    	  <div className="header">{this.props.title}</div>
        <cardList />
    	</div>
    );
  }	
}
ReactDOM.render(
  <App  title="The GitHub Cards App" />,
  mountNode,
);
