import React from 'react'
import { Link } from 'react-router-dom';
import { fetchRoster } from '../actions/roster'
import { connect } from 'react-redux';

class TeamsCard extends React.Component {

    handleClick = event => {
        event.preventDefault();
        this.props.fetchRoster(this.props.team.id)
    }

    render () {
        return (
            <div>
                <p>{this.props.team.name}</p>
                <button type="button" onClick={this.handleClick}><Link className="linkbutton" to={`/roster`}>View Roster</Link></button>
            </div>
        )
    }
}

export default connect(null, {fetchRoster})(TeamsCard);