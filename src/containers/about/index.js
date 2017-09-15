import React from 'react';

class About extends React.Component {
  render() {
    return (
      <div>
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="#">Home</a></li>
          <li className="breadcrumb-item active">About</li>
        </ol>
        <h3>About page</h3>
      </div>
    );
  }
}

export default About;
