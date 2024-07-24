// package used - react-player
// https://cookpete.com/react-player/
// to install - npm i react-player

import ReactPlayer from "react-player";


export default function VideoPlayer() {
    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <ReactPlayer
                url="https://www.youtube.com/watch?v=7sDY4m8KNLc&list=PLC3y8-rFHvwhAh1ypBvcZLDO6I7QTY5CM&index=12"
                controls
                width='480px'
                height='240px'
                onReady={() => console.log("onReady Callback called")}
                onStart={() => console.log("onStart Callback called")}
                onPause={() => console.log("onPause Callback called")}
                onEnded={() => console.log("onEnded Callback called")}
                onError={() => console.log("onError Callback called")}
            />
        </div>
    )
}