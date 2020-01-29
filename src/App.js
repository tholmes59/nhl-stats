import React from 'react';
import './App.css';
import { fetchTeams } from './actions/teams.js';
import { connect } from 'react-redux';
import Teams from './components/Teams'
import Roster from './components/Roster'
import Player from './components/Player'
import { BrowserRouter as Router, Route } from 'react-router-dom'


class App extends React.Component {

  componentDidMount() {
    this.props.fetchTeams()
  }

  render() {
    return (
      <div className="App">
        <h1>NHL Stats</h1>
        <Router>
          <Route exact path="/" render={props => <Teams key={this.props.teams && this.props.teams.id} teams={this.props.teams}/>} />
          <Route exact path="/roster" render={props => <Roster key={this.props.roster && this.props.roster.id} roster={this.props.roster} teams={this.props.teams}/>} />
          <Route exact path="/player" render={props => <Player key={this.props.player && this.props.player.id} player={this.props.player} stats={this.props.stats}/>}/>
        </Router>
        {/* <Teams tteams={this.props.teams}/> */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    teams: state.teams,
    roster: state.roster,
    player: state.player,
    stats: state.stats
  }
}

export default connect(mapStateToProps, {fetchTeams})(App);
