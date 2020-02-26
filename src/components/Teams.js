import React from 'react'
import { connect } from 'react-redux'
import TeamsCard from './TeamsCard'

const Teams = (props) => {

    const pageLayout = {
        margin: '10px'
    }
    const gridLayout = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(20rem, 1fr))',
        gridGap: '10px',
        margin: '10px 10px'
    }
    const teamCards = props.teams.teams && props.teams.teams.map(team => <TeamsCard key={team.id} team={team} />)
    return (
        <div style={pageLayout}>
            <div style={gridLayout}>
                {teamCards}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        teams: state.teams
    }
}

export default connect(mapStateToProps)(Teams)