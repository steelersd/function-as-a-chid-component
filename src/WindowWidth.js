import React from 'react';

class WindowWidth extends React.Component {
  constructor(props) {
    super(props);
    this.state = { width: 0 };
  }

  componentDidMount() {
    this.setState({ width: window.innerWidth });
    window.addEventListener(
      'resize',
      ({ target }) => {
        this.setState({ width: target.innerWidth });
      }
    );
  }

  render() {
    const { width } = this.state;
    return this.props.children(width);
  }
}

export default WindowWidth