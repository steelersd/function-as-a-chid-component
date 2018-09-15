import React from 'react';
import ReactDOM from 'react-dom'

// HOC
export function withWidth (WrappedComponent) {
  return class extends React.Component {
     constructor(props) {
      super(props);
      this.state = { width: 0, height:0 };
    }  
    
//     componentDidMount() {
//       debugger
//       this.setState({ width: window.innerWidth });
//         window.addEventListener(
//         'resize',
//           ({ target }) => {
//             this.setState({ width: target.innerWidth });
//           }
//         );
//     }
   componentDidMount() {
      debugger
      const dom = ReactDOM.findDOMNode(this.refs.sizing)
      console.table(dom)
      this.setState({ width: dom.clientWidth });
      this.setState({ height: dom.clientHeight });
        dom.addEventListener(
        'resize',
          ({ target }) => {
            console.log('Size Change')
            this.setState({ width: target.clientWidth });
            this.setState({ height: target.clientHeight });
          }
        );
    }

    render() {
      // Wraps the input component in a container, without mutating it. Good!
      return <WrappedComponent ref="sizing" height={this.state.height} width={this.state.width}  />;
    }
  }
}

export default withWidth