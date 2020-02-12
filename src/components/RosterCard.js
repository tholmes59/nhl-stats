import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPlayer } from '../actions/player'
import { fetchPlayerStats } from '../actions/stats'


class RosterCard extends React.Component {

    handleClick = event => {
        event.preventDefault();
        this.props.fetchPlayer(event.target.id);
        this.props.fetchPlayerStats(event.target.id);
    }

    render () {
        const playerButton = {
            border: 'none'
        }
        return (
            <div>
                <p>{this.props.player.name}</p>
                {this.props.player.roster.roster.map((item, id) => 
                <p key={id}>#{item.jerseyNumber} 
                <button type="button" style={playerButton} onClick={this.handleClick}><Link key={item.person.id} id={item.person.id} to={'/player'}  >{item.person.fullName}</Link> </button>
                - {item.position.abbreviation}</p>)}
                
            </div>
        )
    }
}

export default connect(null, {fetchPlayer, fetchPlayerStats})(RosterCard);