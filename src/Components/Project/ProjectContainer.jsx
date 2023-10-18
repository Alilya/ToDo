import React from "react";
import { connect } from "react-redux";
import Projects from "./Projects";
import { compose } from "redux";


class ProjectsContainer extends React.Component {
  render() {
    return (
      <Projects projects={this.props.projects}/>
    );
  }
}

let mapStateToProps = (state) => ({
    projects: state.projects.projectDB
});


export default connect (mapStateToProps,{}) (ProjectsContainer);
