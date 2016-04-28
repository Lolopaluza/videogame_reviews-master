import React from 'react';

class Games extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>Games!</h1>
        <p>ID: {this.props.params.id}
        {this.props.children}
      </div>    );
  }
}

export default Games;
