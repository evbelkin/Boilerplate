/* @flow */
import React from 'react';

type Props = {
  jumbotron: { id: number, title: string, body: string }
};

class Jumbotron extends React.Component<Props> {
  render () {
    let props = this.props;
    return (
      <div className="jumbotron">
        <h1 className="display-3">{ props.jumbotron.title }</h1>
        <p className="lead">{ props.jumbotron.body}</p>
        <p><a className="btn btn-lg btn-success" href="#" role="button">View details</a></p>
      </div>
    );
  }
}

export default Jumbotron;