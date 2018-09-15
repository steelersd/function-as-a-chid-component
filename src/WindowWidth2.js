import React from 'react';

class WindowWidth2 extends React.Component {
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
    const { Width } = this.props;
    return <Width width={width} />;
  }
}

export default WindowWidth2