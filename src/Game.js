import React from 'react';

class Game extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>Game!</h1>

        {this.props.children}
      </div>    );
  }
}

export default Game;
