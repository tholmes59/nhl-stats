import React from "react";
import { connect } from "react-redux";
import TeamsCard from "./TeamsCard";

const Teams = props => {
  const pageLayout = {
    paddingBottom: "3rem"
  };

  const gridLayout = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(20rem, 1fr))",
    gridGap: "0.625rem",
    margin: "0.625rem 0.625rem"
  };
  
  const teamCards =
    props.teams.teams &&
    props.teams.teams.map(team => <TeamsCard key={team.id} team={team} />);
  return (
    <div style={pageLayout}>
      <div style={gridLayout}>{teamCards}</div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    teams: state.teams
  };
};

export default connect(mapStateToProps)(Teams);
