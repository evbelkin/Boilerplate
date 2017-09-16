import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getNavigationLinks } from '../../../modules/actions/navigation';

class NavLinks extends React.Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
    fetching: PropTypes.bool.isRequired, 
    links: PropTypes.array.isRequired,
    getNavigationLinks: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.getNavigationLinks();
  }

  render() {
    return (
      <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
        { !this.props.fetching ?
            <ul className="navbar-nav">
              { this.props.links.length ?
                this.props.links.map(item => {
                    return (
                      <li
                        key={ item.id }
                        className={ this.props.location.pathname === item.value ? 'nav-item active' : 'nav-item'}>
                        <Link to={ item.value } className="nav-link">{ item.title }</Link>
                      </li>
                    );
                  })                    
                : '' }
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
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getNavigationLinks
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavLinks);
