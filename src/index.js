import React from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import WindowWidth from './WindowWidth';
import WindowWidth2 from './WindowWidth2';
import withWidth from './withWidth';
import {toClass} from 'recompose'
import { withResizeDetector } from 'react-resize-detector';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const aStyle = { 
  textDecoration: 'none',
  color : 'blue',
  'a:visited': {
     textDecoration: 'none',
  }
}

// const DisplayWindowWidthText2 = React.forwardRef((props, ref) => { 
//   return <h2 ref={ref} >DisplayWindowWidthText: window is {props.width}</h2>;
// });

// const DisplayWindowWidthText2 = React.forwardRef((props, ref) => { 
//   return <h2 ref={ref} >DisplayWindowWidthText: window is {props.width}</h2>;
// });

const DisplayWindowWidthText = ({ width}) => {
  return <h2>DisplayWindowtWidthText: window is {width} </h2>;
};

const DisplayElementWidthHeightText = ({ width, height }) => {
  return <h2>DisplayWindowWidthText: window is {width} {height}</h2>;
};

const DisplayDevice = ({ width }) => {
  let device = null;
  if (width <= 480) {
    device = 'mobile';
  } else if (width <= 768) {
    device = 'tablet';
  } else {
    device = 'desktop';
  }
  return <h2>You are using a <span style={{color : 'blue'}}>{device}</span></h2>;
};

const Element = withResizeDetector(DisplayElementWidthHeightText)

const App = () => (
  <div style={styles}>
    <Hello name="CodeSandbox" />
    <a  style={aStyle} target="_blank" href='http://americanexpress.io/faccs-are-an-antipattern/'>Sample from: Function as Child Components Are an Anti-Pattern </a>
    <WindowWidth>
      {width => <h2>Window is {width}</h2>}
    </WindowWidth>
    <WindowWidth2 Width={DisplayWindowWidthText} />  
    <WindowWidth2 Width={DisplayDevice} />  
    <Element />  
  </div>
);

render(<App />, document.getElementById('root'));
