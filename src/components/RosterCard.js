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

        const hrStyle = {
            height: '12px',
            border: '0',
            boxShadow: 'inset 0 12px 12px -12px rgba(0, 0, 0, 0.5)'
        }

        const rosterProfileStyle = {
            fontFamily: 'Sintony',
            fontSize: '2vw',
            margin: '1rem 1rem 2rem 1rem',
            border: '1px solid',
            width: 'fit-content',
            padding: '1rem',
            borderRadius: '5px',
            boxShadow: '5px 10px 18px #888888'
        }

        const headingTeam = {
            fontFamily: 'Sintony',
            fontSize: '2vw',
            margin: '1rem',
            // fontStyle: 'oblique'
        }

        const teamButton = {
            display: 'flex',
            color: '#FFFFFF',
            backgroundColor: '#F86D02',
            padding: '.5vw 1vh',
            borderRadius: '5px',
            border: 'solid #404040 .5px',
            width: 'fit-content',
            fontSize: '1vw'
        }
        const playerStyle = {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(15rem, 1fr))',
            gridGap: '.5rem',
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
            // width: 'fit-content',
            // padding: '.3rem 1rem',
            // border: '1px solid',
            // margin: '1rem 0',
            // borderRadius: '5px',
            // boxShadow: '5px 10px 18px #888888'
            padding: '.5rem 0',
            fontWeight: 'bold'
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
                    <hr style={hrStyle}/>
                </div>
                <div style={rosterProfileStyle}>
                    <p className="player-style">{this.props.player.name}</p>
                    <p className="player-style">{this.props.player.conference.name} Conference</p>
                    <p className="player-style">{this.props.player.division.name} Division</p>
                    <button onClick={viewTeamSite} style={teamButton}>View Team Site</button>
                </div>
                <hr style={hrStyle}/>
                <p style={headingTeam}><span className="player-style">Players:</span></p>
                <hr/>
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