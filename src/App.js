import { FaReact } from 'react-icons/fa';
import { MdAccessAlarm } from "react-icons/md";
import { IconContext } from 'react-icons';

import './App.css';
import ReactIcons from './components/ReactIcons';
import ToastNotification from './components/ToastNotifications';
import VideoPlayer from './components/VideoPlayer';



function App() {
  return (
    <div>
      <h1 style={{ color: "green", textAlign: 'center' }}>Uncomment Any of the components below visualize</h1>
      {/*
        
        <ReactIcons />
      <ToastNotification />
      <VideoPlayer />

      */}
    </div>
  );
}

export default App;
