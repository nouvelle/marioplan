import React from "react";

const ProjectDetails = props => {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id} </span>
          <p>
            Hey gang, in this React, Redux & Firebase tutorial we'll create the
            template for our project details component. We'll also set up a
            route to load the component in.
          </p>
          <div className="card-action gret lighten-4 grey-text">
            <div>Posted by The Net Ninja</div>
            <div>2nd September, 2am</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
