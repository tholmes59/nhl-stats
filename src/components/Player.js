import React from 'react'
import { connect } from 'react-redux'


class Player extends React.Component {

    render() {
        console.log(this.props.people)
        return (
            
            <div>
                <p>Player!</p>
                <p>{this.props.people}</p>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        people: state.player.people,
        stats: state.player.stats
    }
}

export default connect(mapStateToProps)(Player)