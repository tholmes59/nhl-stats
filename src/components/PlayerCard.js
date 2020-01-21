import React from 'react'
import { connect } from 'react-redux';
import { fetchPlayerStats } from '../actions/stats';
import Stats from './Stats'


class PlayerCard extends React.Component {

    handleClick = event => {
        event.preventDefault();
        this.props.fetchPlayerStats(this.props.player.id)
    }

    render () {
        console.log(this.props.stats)
        return (
            <div>
               <p>{this.props.player.fullName} {this.props.player.primaryNumber}</p>
               <p>{this.props.player.currentTeam.name}</p>
                <button type="button" onClick={this.handleClick}>See Stats</button>
                
                <Stats />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        stats: state.stats
    }
}


export default connect(mapStateToProps, {fetchPlayerStats})(PlayerCard);