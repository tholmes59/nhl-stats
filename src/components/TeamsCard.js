import React from 'react'
import { Link } from 'react-router-dom';
import { fetchRoster } from '../actions/roster'
import { connect } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'

class TeamsCard extends React.Component {

    handleClick = event => {
        event.preventDefault();
        this.props.fetchRoster(this.props.team.id)
    }

    render () {
        const cardStyle = {
            width: '20rem',
            padding: '.2rem',
            margin: '.5rem',
            
        }
        const linkStyle = {
            color: 'white',
            textDecoration: 'none'
        }
        const buttonStyle = {
            width: '10rem',
            margin: '.5rem',
            backgroundColor: '#F86D02'
        }
        return (
            <div>
                <Card style={cardStyle}>
                    <Card.Body>
                        <Card.Title>{this.props.team.name}</Card.Title>
                        <Card.Text>Conference: {this.props.team.conference.name}</Card.Text>
                        <Card.Text>Division: {this.props.team.division.name}</Card.Text>
                        <Card.Text>Stadium: {this.props.team.venue.name} - {this.props.team.venue.city}</Card.Text>
                        <Card.Text>Inception: {this.props.team.firstYearOfPlay}</Card.Text>
                    </Card.Body>
                    <Button varient="primary" size="lg" style={buttonStyle} onClick={this.handleClick}><Link style={linkStyle} to={`/roster`}>View Roster</Link></Button>
                </Card>
            </div>
        )
    }
}

export default connect(null, {fetchRoster})(TeamsCard);