/* @flow */
import React from 'react';
import { Link } from 'react-router-dom';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getNavigationLinks } from '../../../modules/actions/navigation';
import { logout } from '../../../modules/actions/auth';

type Props = {
  location: Object,
  loggedIn: boolean,
  fetching: boolean,
  username: string,
  links: Array<{ id: number, title: string, value: string}>,
  getNavigationLinks: Function,
  logout: Function
};

type State = {
  links: Array<{ id: number, title: string, value: string}>,
  fetching: boolean,
  loggedIn: boolean,
  username: string
};

class NavLinks extends React.Component<Props, State> {
  componentDidMount() {
    this.props.getNavigationLinks();
  }

  handleLogout = (e) => {
    e.preventDefault();
    this.props.logout();
  }

  render() {
    let props = this.props;
    return (
      <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
        { !props.fetching ?
            <ul className="navbar-nav">
              { props.links.length ?
                props.links.map(item => {
                    return (
                      <li
                        key={ item.id }
                        className={ props.location.pathname === item.value ? 'nav-item active' : 'nav-item'}>
                        <Link to={ item.value } className="nav-link">{ item.title }</Link>
                      </li>
                    );
                  })                    
                : '' }
              { props.loggedIn ? 
                  <li key="logout" className="nav-item">
                    <a href="/logout" className="nav-link" onClick={ this.handleLogout }>Logout ({ props.username })</a>
                  </li> :
                  <li key="login" className="nav-item">
                    <Link to="/login" className="nav-link">Login</Link>
                  </li>
              }
            </ul>
          : <span className="navbar-text">Загружаем элементы навигации...</span>
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  links: state.navigation.links,
  fetching: state.navigation.fetching,
  loggedIn: state.auth.loggedIn,
  username: state.auth.username
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getNavigationLinks,
  logout
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavLinks);
