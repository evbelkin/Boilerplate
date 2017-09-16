import React from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getNavigationLinks } from '../../modules/actions/navigation';
import { NavLinks } from './components/nav-links';

class Navigation extends React.Component {
  componentDidMount() {
    this.props.getNavigationLinks();
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-light">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          { !this.props.fetching ?
            <NavLinks links={ this.props.links} />
            : <span className="navbar-text">Загружаем элементы навигации...</span> }
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  links: state.navigation.links,
  fetching: state.navigation.fetching,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getNavigationLinks
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation);
