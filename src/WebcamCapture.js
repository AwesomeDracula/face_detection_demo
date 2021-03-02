import React, { useState } from 'react';
import Webcam from 'react-webcam';

const videoConstraints = {
    width: 500,
    height: 500,
    facingMode: "user"
  };

function WebcamCapture() {
    const [url, setUrl] = useState();
    const webcamRef = React.useRef(null);

    const capture = React.useCallback(
    () => {
        const imageSrc = webcamRef.current.getScreenshot();
        setUrl(imageSrc);
        },
        [webcamRef]
    );

    return (
        <>
        <Webcam
            audio={false}
            height={500}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            width={500}
            videoConstraints={videoConstraints}
        />
        <button onClick={capture}>Capture photo</button>
        <img src={url} alt='check'></img>
        <a href={url} download>Download</a>
        </>
    );
}

export default WebcamCapture
