import React from 'react'
import { connect } from 'react-redux'
import RosterCard from './RosterCard'

const Roster = (props) => {

    const rosterCards = props.roster.roster && props.roster.roster.map(player => <RosterCard key={player.id} player={player} />)
    return (
        <div>
            {rosterCards}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        roster: state.roster
    }
}

export default connect(mapStateToProps)(Roster)