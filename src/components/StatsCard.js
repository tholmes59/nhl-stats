import React from 'react'
import { connect } from 'react-redux';


class StatsCard extends React.Component {

    render () {
        return (
            <div>
                <p>Stats!</p>
                <p>{this.props.stat.stats.displayName}</p>
                
                
            </div>
        )
    }
}

export default connect(null)(StatsCard);
