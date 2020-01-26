import React from 'react'
import { connect } from 'react-redux'


const Player = (props) => {
   
    return (
        <div>
            <p>{props.player.people && props.player.people.map(name => name.fullName)} #{props.player.people && props.player.people.map(name => name.primaryNumber)}</p>
            <p>{props.player.people && props.player.people.map(name => name.currentTeam.name)}</p>
            <table>
                <tr>
                    <th>Season</th>
                    <th>Team</th>
                    <th>Goals</th>
                    <th>Assists</th>
                </tr>
                <tr>
                    <td>{props.stats.stats && props.stats.stats.map(val => val.splits.map(yr => <p>{yr.season}</p>))}</td>
                    <td>{props.stats.stats && props.stats.stats.map(val => val.splits.map(yr => <p>{yr.team.name}</p>))}</td>
                    <td>{props.stats.stats && props.stats.stats.map(val => val.splits.map(yr => <p>{yr.stat.goals}</p>))}</td>
                    <td>{props.stats.stats && props.stats.stats.map(val => val.splits.map(yr => <p>{yr.stat.assists}</p>))}</td>
                </tr>
            </table>
            
        </div>
    )
}



export default connect(null)(Player)