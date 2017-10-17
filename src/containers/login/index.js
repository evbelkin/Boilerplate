/* @flow */
import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { login } from '../../modules/actions/auth';

type Props = {
  login: Function,
  loggedIn: boolean,
  fetching: boolean,
  message: { type?: string, text?: string },
};

type State = {
  username: string,
  password: string,
  valid: string
};

class Login extends React.Component<Props, State> {
  state = {
    username: '',
    password: '',
    valid: 'none'
  }

  handleSubmit = (e) => {
    e.preventDefault();

    let username = this.state.username;
    let password = this.state.password;

    if (username === '' || password === '') {
      this.setState({
        valid: 'error'
      });
    } else {
      this.setState({
        valid: 'none'
      }); 
      
      this.props.login({ username, password });
    }
  }

  render() {
    let props = this.props;
    return (
      <div>
        { props.loggedIn ? 
          <Redirect to="/home" push /> :
          <div>
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link to='/'>Home</Link></li>
              <li className="breadcrumb-item active">Login</li>
            </ol>
            <h3>Login page</h3>
            { this.state.valid === 'error' ?
                <div className="alert alert-danger">Поля формы должны быть заполнены!</div>
              : '' }
            { Object.keys(props.message).length ?
                <div
                  className={ props.message.type === 'fail' ? 'alert alert-danger' : 'alert alert-success' }
                >
                { props.message.text }
                </div>
              : '' }
            <form onSubmit={ this.handleSubmit }>
              <div className="form-group">
                <label htmlFor="usernameInput">Username</label>
                <input
                  type="text"
                  className="form-control"
                  id="usernameInput"
                  placeholder="Enter username"
                  value={ this.state.username }
                  onChange={ (e) => this.setState({ username: e.target.value }) }
                  disabled={ props.fetching }
                />
              </div>
              <div className="form-group">
                <label htmlFor="passwordInput">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="passwordInput"
                  placeholder="Password"
                  value={ this.state.password }
                  onChange={ (e) => this.setState({ password: e.target.value }) }
                  disabled={ props.fetching }
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={ props.fetching }
              >
                Submit
              </button>
            </form>
          </div>
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.loggedIn,
  fetching: state.auth.fetching,
  message: state.auth.message,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  login
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
