import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPlayer } from '../actions/player'
import { fetchPlayerStats } from '../actions/player'
import { Redirect } from 'react-router-dom';

class RosterCard extends React.Component {

    handleClick = event => {
        event.preventDefault();
        this.props.fetchPlayer(event.target.id);
        this.props.fetchPlayerStats(event.target.id);
        return <Redirect to="/player" />
    }

    render () {
        return (
            <div>
                <p>{this.props.player.name}</p>
                {this.props.player.roster.roster.map(item => <p>#{item.jerseyNumber} <button type="button" onClick={this.handleClick}><Link key={item.person.id} id={item.person.id} to={'/player'}  >{item.person.fullName}</Link> </button>- {item.position.abbreviation}</p>)}
                
            </div>
        )
    }
}

export default connect(null, {fetchPlayer, fetchPlayerStats})(RosterCard);
