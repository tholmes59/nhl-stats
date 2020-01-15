import React from 'react'
import { connect } from 'react-redux'
import TeamCard from './TeamCard'

const Teams = (props) => {

    const teamCards = props.teams.teams && props.teams.teams.map(team => <TeamCard key={team.id} team={team} />)
    return (
        <div>
            {teamCards}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        teams: state.teams
    }
}

export default connect(mapStateToProps)(Teams)