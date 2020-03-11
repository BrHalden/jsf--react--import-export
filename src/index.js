import React from 'react';
import ReactDOM from 'react-dom';
// styles
import './css/index.css';
import Welcome from './components/Welcome.js';
import Image from './components/Image.js';
import Panel from './components/Panel.js';
import NestedComponentExample from './components/NestedComponentExample.js';
ReactDOM.render(<App />, document.getElementById('root'));

function App() {
    return (
        <div className="App">
            <Welcome name="Noroff" />
  
            <Image source="https://placedog.net/500/280" altText="Doggo" />
  
            <Panel heading="My panel box">
                <p>This content is inside the panel element.</p>
                <p>I can place whatever I want in here.</p>
            </Panel>
  
            <NestedComponentExample />
        </div>
    );
}