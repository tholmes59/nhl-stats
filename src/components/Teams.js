import React from 'react'
import { connect } from 'react-redux'
import TeamsCard from './TeamsCard'

const Teams = (props) => {
    const teamCards = props.teams.teams && props.teams.teams.map(team => <TeamsCard key={team.id} team={team} />)
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