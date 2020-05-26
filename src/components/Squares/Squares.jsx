import React, { Component } from 'react';
// import ReactDOM from 'react-dom';

class Squares extends Component {

  constructor(props) {
    super(props);

    this.state = {
      value: null,
    };
  }

  render() {
    return (
      <button
        className="square"
        onClick={() => {
          alert(`You clicked: Square ${this.props.value}`)
          this.setState({ value: 'X' })
        }}
      >
        {this.state.value}
      </button>
    );
  }
}

export default Squares