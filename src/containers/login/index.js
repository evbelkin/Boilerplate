import React from 'react';
import { Link } from 'react-router-dom'

class Login extends React.Component {
  render() {
    return (
      <div>
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to='/'>Home</Link></li>
          <li className="breadcrumb-item active">Login</li>
        </ol>
        <h3>Login page</h3>
      </div>
    );
  }
}

export default Login;
