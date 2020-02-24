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
        const headingStyle = {
            margin: '1rem',
            paddingTop: '.5rem',
            paddingBottom: '.5rem'
        }
        const playerStyle = {
        fontFamily: 'Sintony',
        fontSize: '2vmin',
        margin: '1rem'
    }
        const playerButton = {
            border: 'none',
            background: 'none'
        }
        return (
            <div>
                <div style={headingStyle}>
                    <h1>{this.props.player.name}</h1>
                </div>
                <div style={playerStyle}>
                    {this.props.player.roster.roster.map((item, id) => 
                    <p key={id}>#{item.jerseyNumber} 
                    <button type="button" style={playerButton} onClick={this.handleClick}><Link key={item.person.id} id={item.person.id} to={'/player'}  >{item.person.fullName}</Link> </button>
                    - {item.position.abbreviation}</p>)}
                </div>
            </div>
        )
    }
}

export default connect(null, {fetchPlayer, fetchPlayerStats})(RosterCard);