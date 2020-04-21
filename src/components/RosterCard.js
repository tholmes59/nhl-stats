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
            // fontSize: '2.3vmin',
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
            background: 'none',
            textDecoration: 'none'
        }

        const playerBox = {
            width: 'fit-content',
            padding: '.3rem 1rem',
            border: '1px solid',
            margin: '1rem 0',
            borderRadius: '5px',
            boxShadow: '5px 10px 18px #888888'
        }
        const playerLink = {
            // textDecoration: 'none',
            color: 'black',
            fontWeight: 'bold'
        }

        const  viewTeamSite = () => {
            window.open(this.props.player.officialSiteUrl)
        }
    
        return (
            <div>
                <div style={headingStyle}>
                    <h1>Roster</h1>
                </div>
                <div style={headingStyle}>
                    <h3 className="player-style">{this.props.player.name}</h3>
                    <p className="player-style">{this.props.player.conference.name} Conference</p>
                    <p className="player-style">{this.props.player.division.name} Division</p>
                    <button onClick={viewTeamSite}>View Team Site</button>
                </div>
                <div style={playerStyle}>
                    {this.props.player.roster.roster.map((item, id) => 
                    <div style={playerBox} className="roster-button">
                        <span key={id}>#{item.jerseyNumber} |
                        <button type="button" style={playerButton} onClick={this.handleClick}><Link style={playerLink} key={item.person.id} id={item.person.id} to={'/player'}  >{item.person.fullName}</Link> </button>
                        | {item.position.abbreviation}</span>
                    </div>
                        )}
                </div>
            </div>
        )
    }
}

export default connect(null, {fetchPlayer, fetchPlayerStats})(RosterCard);