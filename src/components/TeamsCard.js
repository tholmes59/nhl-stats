import React from 'react'
import { Link } from 'react-router-dom';
import { fetchRoster } from '../actions/roster'
import { connect } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import { withRouter } from "react-router-dom";

class TeamsCard extends React.Component {

    handleClick = event => {
        event.preventDefault();
        this.props.fetchRoster(this.props.team.id);
        this.props.history.push('/roster')
    }

    render () {
        const cardStyle = {
            width: '20rem',
            height: '19rem',
            padding: '.2rem',
            margin: '.5rem',
            borderRadius: '12px',
            boxShadow: '5px 10px 18px #888888'
        }
        const linkStyle = {
            color: 'white',
            textDecoration: 'none'
        }
        const buttonStyle = {
            width: '9.5rem',
            margin: '.5rem',
            padding: '.2rem',
            backgroundColor: '#F86D02'
        }
        return (
            <div>
                <Card style={cardStyle}>
                    <Card.Body>
                        <Card.Title>{this.props.team.name}</Card.Title>
                        <Card.Text>{this.props.team.conference.name} Conference</Card.Text>
                        <Card.Text>{this.props.team.division.name} Division</Card.Text>
                        <Card.Text>Arena: {this.props.team.venue.name} | {this.props.team.venue.city}</Card.Text>
                        <Card.Text>Started {this.props.team.firstYearOfPlay}</Card.Text>
                    </Card.Body>
                    <Button varient="primary" size="lg" style={buttonStyle} onClick={this.handleClick}><Link style={linkStyle} className="link-style" to={`/roster`}>View Roster</Link></Button>
                </Card>
            </div>
        )
    }
}

export default connect(null, {fetchRoster})(withRouter(TeamsCard));