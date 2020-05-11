import React from "react";
import { connect } from "react-redux";
import RosterCard from "./RosterCard";

const Roster = props => {
  const rosterCards =
    props.roster.teams &&
    props.roster.teams.map(player => (
      <RosterCard key={player.id} player={player} />
    ));

  const rosterStyle = {
    paddingBottom: "3rem"
  };
  
  return <div style={rosterStyle}>{rosterCards}</div>;
};

const mapStateToProps = state => {
  return {
    roster: state.roster
  };
};

export default connect(mapStateToProps)(Roster);
