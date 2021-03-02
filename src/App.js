import React, { useState } from 'react';
import './App.css';
import 'react-picojs/dist/index.css';
import ReactPico from './pico/ReactPico';
import 'antd/dist/antd.css';
import WebcamCapture from './WebcamCapture';
import {FileUploadPage} from './UploadImage';

function App() {
  const [face, setFace] = useState(null);
  return (
    <div className="app">
      {/* upload images */}
      <FileUploadPage />
      <ReactPico onFaceFound={face => setFace(face)}/>
      {/* check face */}
      {face && <WebcamCapture />}
    </div>
  );
}

export default App;
