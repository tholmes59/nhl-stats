import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class RosterCard extends React.Component {

    render () {
        return (
            <div>
                <p>{this.props.player.name}</p>
                {this.props.player.roster.roster.map(item => <p>#{item.jerseyNumber} <Link href="">{item.person.fullName}</Link> - {item.position.abbreviation}</p>)}
            </div>
        )
    }
}

export default connect(null)(RosterCard);
