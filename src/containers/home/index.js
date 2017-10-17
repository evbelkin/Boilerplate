/* @flow */
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getHome } from '../../modules/actions/home';
import Jumbotron from './components/jumbotron';
import NewsRow from './components/news-grid';

type Props = {
  fetching: boolean,
  jumbotron: Array<{ id: number, title: string, body: string }>,
  news: Array<{ id: number, title: string, body: string }>,
  getHome: Function
};

type State = {
  fetching: boolean,
  jumbotron: Array<{ id: number, title: string, body: string }>,
  news: Array<{ id: number, title: string, body: string }>
};

class Home extends React.Component<Props, State> {

  componentDidMount() {
    this.props.getHome();
  }

  render() {
    return (
      <div>
        { !this.props.fetching ?
          <div>
            { this.props.jumbotron.length ? <Jumbotron jumbotron={ this.props.jumbotron[0] } /> : '' }
            { this.props.news.length ? <NewsRow news={ this.props.news } /> : '' }
          </div>
          : <div className="alert alert-warning" role="alert">Загружаем данные...</div> }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  jumbotron: state.home.jumbotron,
  news: state.home.news,
  fetching: state.home.fetching,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getHome
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
