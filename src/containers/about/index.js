import React from 'react';
import { Link } from 'react-router-dom'

class About extends React.Component {
  render() {
    return (
      <div>
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to='/'>Home</Link></li>
          <li className="breadcrumb-item active">About</li>
        </ol>
        <h3>About page</h3>
      </div>
    );
  }
}

export default About;
