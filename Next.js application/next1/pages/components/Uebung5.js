import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';


function App() {
  const fallbackVideo = '/fallback1.mp4'; 
  const [playing, setPlaying] = useState(false);
  const [filter, setFilter] = useState('none');
  const [percentage, setPercentage] = useState(100);

  const myVideo = useRef(null);
  const myCanvas = useRef(null);

  useEffect(() => {
    const startVideo = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { width: 640, height: 480 }, audio: false
        });
        myVideo.current.srcObject = stream;
      } catch (error) {
        console.log(error);
        myVideo.current.src = fallbackVideo;
        myVideo.current.loop = true;
      } finally {
        setPlaying(true);
      }
    };
    startVideo();
  }, []);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleIntensityChange = (event) => {
    setPercentage(parseInt(event.target.value));
  };

  const filterType = () => {
    switch (filter) {
      case 'invert':
        return `invert(${percentage}%)`;
      case 'saturate':
        return `saturate(${percentage}%)`;
      case 'contrast':
        return `contrast(${percentage}%)`;
      default:
        return 'none';
    }
  };

  const takeSnapshot = () => {
    if (myCanvas.current && myVideo.current) {
      const ctx = myCanvas.current.getContext('2d');
      if (ctx) {
        myCanvas.current.style.filter = filterType();
        ctx.drawImage(myVideo.current, 0, 0, myCanvas.current.width, myCanvas.current.height);
      }
    }
  };

  const snapshotJSX = playing && (
    <div style={{ textAlign: 'center' }}>
      <canvas width={640} height={480} ref={myCanvas}></canvas>
    </div>
  );

  return (
  
    <div style={{ textAlign: 'center' }}>
      <h4>Snapshot Filters!</h4>
      <Link href='/'>Home</Link>
      <video width={640} height={480} autoPlay muted ref={myVideo} style={{ filter: filterType() }} /><br/>
      <div>
        <h4>Filter Options</h4>
        <label>
          <input
            type="radio"
            value="none"
            checked={filter === 'none'}
            onChange={handleFilterChange}
          />
          None
        </label>
        <label>
          <input
            type="radio"
            value="invert"
            checked={filter === 'invert'}
            onChange={handleFilterChange}
          />
          Invert
        </label>
        <label>
          <input
            type="radio"
            value="saturate"
            checked={filter === 'saturate'}
            onChange={handleFilterChange}
          />
          Hue
        </label>
        <label>
          <input
            type="radio"
            value="contrast"
            checked={filter === 'contrast'}
            onChange={handleFilterChange}
          />
          Contrast
        </label>
        <br/> 
        <input type="range" min="0" max="100" value={percentage} onChange={handleIntensityChange} />
        <button onClick={takeSnapshot}>Take Snapshot</button>
      </div>
      {snapshotJSX}
    </div>
  );
}

export default App;
