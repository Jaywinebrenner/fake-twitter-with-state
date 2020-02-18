import React from "react";
import Header from "./Header";
import Profile from "./Profile";
import TweetList from './TweetList';
import NewTweetForm from './NewTweetForm';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';
import OtherPeeps from './OtherPeeps';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterTweetList: []
    };
    this.handleAddingNewTweetToList = this.handleAddingNewTweetToList.bind(this);
  }

  handleAddingNewTweetToList(newTweet){
    var newMasterTweetList = this.state.masterTweetList.slice();
    newMasterTweetList.push(newTweet);
    this.setState({masterTweetList: newMasterTweetList});
  }

  render(){
    var appBody = {
      textAlign: 'center'
    }


    return (
      <div style={appBody}>
      <Header/>
      <br></br>
      <br></br>
      <br></br>
      <Profile/>
      <div>
      <OtherPeeps/>
      </div>
      <Switch>
      <Route exact path='/' render={()=><TweetList tweetList={this.state.masterTweetList} />}  />
      <Route path='/newtweet' render={()=><NewTweetForm onNewTweetCreation={this.handleAddingNewTweetToList} />}  />
      <Route component={Error404} />
      </Switch>


      </div>
    );
  }
}

export default App;
