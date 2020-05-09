import React from 'react'
import { connect } from 'react-redux'
import Table from 'react-bootstrap/Table';


const Player = (props) => {

   let birth = (string) => {
    let birArr = string.split('-')
 
    let months = [
      {id: '01', name: "January"}, 
      {id: '02', name:'February'},
      {id: '03', name: 'March'},
      {id: '04', name: 'April'},
      {id: '05', name: 'May'},
      {id: '06', name: 'June'},
      {id: '07', name: 'July'},
      {id: '08', name: 'August'},
      {id: '09', name: 'September'},
      {id: '10', name: 'October'},
      {id: '11', name: 'November'},
      {id: '12', name: 'December'}
      ]
   
      let year = birArr[0];
      let day = birArr[2]
      let month = ''
      months.map(x => {
        if(x.id === birArr[1]){
         month = x.name;
        }
      })
    return (month + ' ' + day + ', ' + year);
   }

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
        margin: '1rem',
        border: '1px solid',
        width: 'fit-content',
        padding: '1rem',
        borderRadius: '5px',
        boxShadow: '5px 10px 18px #888888'
    }
    const tableStyle = {
        // fontSize: '1.2vw',
        margin: '1rem',
        borderRadius: '10px',
        boxShadow: '5px 10px 18px #888888'
    }
    const hrStyle = {
        height: '12px',
        border: '0',
        boxShadow: 'inset 0 12px 12px -12px rgba(0, 0, 0, 0.5)'
    }

    let table;
    let position = (props.player.people && props.player.people.map(pos => (pos.primaryPosition.type)))
    // console.log(props.player.people && props.player.people.map(pos => (pos.primaryPosition.type)))
    // console.log(position = "Goalie")
    if (position == "Goalie"){
        table =  <Table bordered hover responsive style={tableStyle} className="table-style">
        <thead>
            <tr>
                <th>Season</th>
                <th>Team</th>
                <th>League</th>
                <th>Games</th>
                <th>Goals Against</th>
                <th>Goals Against Average</th>
                <th>Shutouts</th>
            </tr>
        </thead>
        <tbody>
            {props.stats.stats && props.stats.stats.map(val => (val.splits.map(yr => (<tr>
                <td>{yr.season.slice(0, 4) + '-' + yr.season.slice(4,8)}</td>
                <td>{yr.team.name}</td>
                <td>{(yr.league.name==="National Hockey League") ? "NHL" : yr.league.name}</td>
                <td>{yr.stat.games}</td>
                <td>{yr.stat.goalsAgainst}</td>
                <td>{yr.stat.goalAgainstAverage && yr.stat.goalAgainstAverage.toFixed(2)}</td>
                <td>{yr.stat.shutouts}</td>
                </tr>))))
            }
        </tbody>
    </Table>} else {
        table =  <Table bordered hover responsive style={tableStyle} className="table-style">
        <thead>
            <tr>
                <th>Season</th>
                <th>Team</th>
                <th>League</th>
                <th>Games</th>
                <th>Goals</th>
                <th>Assists</th>
                <th>Points</th>
                <th>Penatly Minutes</th>
                <th>Plus/Minus</th>
            </tr>
        </thead>
        <tbody>
            {props.stats.stats && props.stats.stats.map(val => (val.splits.map(yr => (<tr>
                <td>{yr.season.slice(0, 4) + '-' + yr.season.slice(4,8)}</td>
                <td>{yr.team.name}</td>
                <td>{(yr.league.name==="National Hockey League") ? "NHL" : yr.league.name}</td>
                <td>{yr.stat.games}</td>
                <td>{yr.stat.goals}</td>
                <td>{yr.stat.assists}</td>
                <td>{yr.stat.points}</td>
                <td>{yr.stat.pim}</td>
                <td>{yr.stat.plusMinus}</td>
                </tr>))))
            }
        </tbody>
    </Table>
    }
   
    return (
      <div style={playerStyle}>
        <div style={headingStyle}>
          <h1>
            {props.player.people &&
              props.player.people.map(name => name.firstName)}
            's Stats
          </h1>
          <hr style={hrStyle} />
        </div>
        <div style={playerProfileStyle}>
          <p className="player-style">
            {props.player.people &&
              props.player.people.map(name => name.fullName)}{" "}
            #
            {props.player.people &&
              props.player.people.map(name => name.primaryNumber)}
          </p>
          <p className="player-style">
            {props.player.people &&
              props.player.people.map(pos => pos.primaryPosition.name)}
          </p>
          <p className="player-style">
            {props.player.people &&
              props.player.people.map(name => name.currentTeam.name)}
          </p>
          <p className="player-style">
            {props.player.people && props.player.people.map(ht => ht.height)}{" "}
            {props.player.people && props.player.people.map(wt => wt.weight)}{" "}
            lbs
          </p>
          <p className="player-style">
            Age:{" "}
            {props.player.people &&
              props.player.people.map(age => age.currentAge)}{" "}
            | Born:{" "}
            {props.player.people &&
              props.player.people.map(bd => birth(bd.birthDate))}
          </p>
          <p className="player-style">
            Birthplace:{" "}
            {props.player.people &&
              props.player.people.map(city => city.birthCity)}
            ,{" "}
            {props.player.people &&
              props.player.people.map(state => state.birthStateProvince)}{" "}
            {props.player.people &&
              props.player.people.map(country => country.birthCountry)}
          </p>
        </div>
        <div>{table}</div>
      </div>
    );
}



export default connect(null)(Player)