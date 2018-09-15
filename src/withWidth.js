import React from 'react';
import ReactDOM from 'react-dom'

// HOC
export function withWidth (WrappedComponent) {
  return class extends React.Component {
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
      // Wraps the input component in a container, without mutating it. Good!
      return <WrappedComponent ref="sizing" width={this.state.width} {...this.props} />;
    }
  }
}

export default withWidth