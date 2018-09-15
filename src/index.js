import React from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import WindowWidth from './WindowWidth';
import WindowWidth2 from './WindowWidth2';
import withWidth from './withWidth';
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

const DisplayWindowWidthText = ({ width, text='DisplayWindowtWidthText'}) => {
  return <h2>{text}: window is {width} </h2>;
};

const DisplayElementWidthHeightText = ({ width, height }) => {
  return <h2>DisplayElementWidthHeightText: Element is {width} {height}</h2>;
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
const WindowWithWidth= withWidth(DisplayWindowWidthText)

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
    <WindowWithWidth text="Using withWindow"/>  
  </div>
);

render(<App />, document.getElementById('root'));
