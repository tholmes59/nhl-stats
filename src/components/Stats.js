import React from 'react'
import { connect } from 'react-redux'
import StatsCard from './TeamsCard'

const Stats = (props) => {
    const statsCards = props.stats && props.stats.map((stat, id) => <StatsCard key={id} stat={stat} />)
    console.log(statsCards)
    return (
        <div>
            {statsCards}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        stats: state.stats
    }
}

export default connect(mapStateToProps)(Stats)