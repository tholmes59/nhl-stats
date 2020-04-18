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
            fontFamily: 'Sintony',
            // fontSize: '4vmin',
            margin: '1rem',
            paddingTop: '.5rem',
            paddingBottom: '.5rem',
            
        }
        const playerStyle = {
            fontFamily: 'Sintony',
            // fontSize: '2.5vmin',
            margin: '1rem'
        }
        const playerButton = {
            border: 'none',
            background: 'none'
        }

        const playerBox = {
            width: 'fit-content',
            padding: '.3rem 1rem',
            border: '1px solid',
            margin: '1rem 0',
            borderRadius: '5px',
            boxShadow: '5px 10px 18px #888888'
        }
    
        return (
            <div>
                <div style={headingStyle}>
                    <span>{this.props.player.name}</span>
                </div>
                <div style={playerStyle}>
                    {this.props.player.roster.roster.map((item, id) => 
                    <div style={playerBox} className="roster-button">
                        <span key={id}>#{item.jerseyNumber} 
                        <button type="button" style={playerButton} onClick={this.handleClick}><Link key={item.person.id} id={item.person.id} to={'/player'}  >{item.person.fullName}</Link> </button>
                        - {item.position.abbreviation}</span>
                    </div>
                        )}
                </div>
            </div>
        )
    }
}

export default connect(null, {fetchPlayer, fetchPlayerStats})(RosterCard);