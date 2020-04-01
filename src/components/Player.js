import React from 'react'
import { connect } from 'react-redux'
import Table from 'react-bootstrap/Table';


const Player = (props) => {

    const playerStyle = {
        paddingBottom: '3rem'
    }

    const headingStyle = {
        margin: '1rem',
        paddingTop: '.5rem',
        paddingBottom: '.5rem'
    }

    const playerProfileStyle = {
        fontFamily: 'Sintony',
        fontSize: '2vw',
        margin: '1rem'
    }
    const tableStyle = {
            fontSize: '1.2vw',
            margin: '1rem'
    }

    let table;
    let position = (props.player.people && props.player.people.map(pos => (pos.primaryPosition.type)))
    // console.log(props.player.people && props.player.people.map(pos => (pos.primaryPosition.type)))
    // console.log(position = "Goalie")
    if (position == 'Goalie'){
        table =  <Table responsive bordered hover style={tableStyle} >
        <thead>
            <tr>
                <th colspan="3"></th>
                <th colspan="4">Goalie</th>
            </tr>
            <tr>
                <th>Season</th>
                <th>Team</th>
                <th>League</th>
                <th>Games</th>
               
            </tr>
        </thead>
        <tbody>
            {props.stats.stats && props.stats.stats.map(val => (val.splits.map(yr => (<tr>
                <td>{yr.season.slice(0, 4) + '-' + yr.season.slice(4,8)}</td>
                <td>{yr.team.name}</td>
                <td>{yr.league.name}</td>
                <td>{yr.stat.games}</td>
                
                </tr>))))
            }
        </tbody>
    </Table>} else {
        table =  <Table responsive bordered hover style={tableStyle} >
        <thead>
            <tr>
                <th colspan="3"></th>
                <th colspan="4">Position Player</th>
            </tr>
            <tr>
                <th>Season</th>
                <th>Team</th>
                <th>League</th>
                <th>Games</th>
                <th>Goals</th>
                <th>Assists</th>
                <th>Points</th>
                <th>Penatly Minutes</th>
            </tr>
        </thead>
        <tbody>
            {props.stats.stats && props.stats.stats.map(val => (val.splits.map(yr => (<tr>
                <td>{yr.season.slice(0, 4) + '-' + yr.season.slice(4,8)}</td>
                <td>{yr.team.name}</td>
                <td>{yr.league.name}</td>
                <td>{yr.stat.games}</td>
                <td>{yr.stat.goals}</td>
                <td>{yr.stat.assists}</td>
                <td>{yr.stat.points}</td>
                <td>{yr.stat.pim}</td>
                </tr>))))
            }
        </tbody>
    </Table>
    }
   
    return (
        <div style={playerStyle}>
            <div style={headingStyle}>
                <h1>Statistics</h1>
            </div>
            <div style={playerProfileStyle}>
                <p>{props.player.people && props.player.people.map(name => name.fullName)} #{props.player.people && props.player.people.map(name => name.primaryNumber)}</p>
                <p>{props.player.people && props.player.people.map(pos => (pos.primaryPosition.type))}</p>
                <p>{props.player.people && props.player.people.map(name => name.currentTeam.name)}</p>
                <p>{props.player.people && props.player.people.map(ht => ht.height)}   {props.player.people && props.player.people.map(wt => wt.weight)}lbs</p>
                <p>DOB: {props.player.people && props.player.people.map(bd => bd.birthDate)}  Age: {props.player.people && props.player.people.map(age => age.currentAge)}</p>
            </div>
            {/* <Table responsive bordered hover style={tableStyle} >
                <thead>
                    <tr>
                        <th colspan="3"></th>
                        <th colspan="4">Position Player</th>
                    </tr>
                    <tr>
                        <th>Season</th>
                        <th>Team</th>
                        <th>Games</th>
                        <th>Goals</th>
                        <th>Assists</th>
                        <th>Points</th>
                        <th>Penatly Minutes</th>
                    </tr>
                </thead>
                <tbody>
                    {props.stats.stats && props.stats.stats.map(val => (val.splits.map(yr => (<tr>
                        <td>{yr.season.slice(0, 4) + '-' + yr.season.slice(4,8)}</td>
                        <td>{yr.team.name}</td>
                        <td>{yr.stat.games}</td>
                        <td>{yr.stat.goals}</td>
                        <td>{yr.stat.assists}</td>
                        <td>{yr.stat.points}</td>
                        <td>{yr.stat.pim}</td>
                        </tr>))))
                    }
                </tbody>
            </Table> */}
            <div>
                {table}
            </div>
            
        </div>
    )
}



export default connect(null)(Player)