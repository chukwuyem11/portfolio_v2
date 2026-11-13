/** @jsxImportSource @emotion/react */
import React, { useRef, useState } from "react";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import facepaint from "facepaint";
const breakpoints = [576, 768, 1200];
const mq = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}px)`));
const MusicAudioPlayer = ({media_link}) => {
  
    
    
  const audioRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1); // Volume starts at max (1)

  // Format time in MM:SS
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  const handleSeek = (event) => {
    const progressBarWidth = event.target.clientWidth;
    const clickPosition = event.nativeEvent.offsetX;
    const newTime = (clickPosition / progressBarWidth) * duration;
    audioRef.current.currentTime = newTime;
  };

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (event) => {
    const newVolume = event.target.value;
    setVolume(newVolume);
    audioRef.current.volume = newVolume; // Set the audio volume
  };

  return (
    <div>
         <div
        css={{
         display:"flex",
         justifyContent:"right",
          fontSize: "10px",
          color: "#999",
          fontWeight:600,
          marginBottom:2
        }}
      >
        {formatTime(currentTime)} / {formatTime(duration)}
      </div>
    <div
      css={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Audio Element (Hidden) */}
      <audio
        ref={audioRef}
        src={media_link}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        style={{ display: "none" }}
      />

      {/* Play/Pause Button */}
    

      {/* Time Display */}
    

      {/* Progress Tracker */}
      <div
        css={{
          width: "100%",
          height: "8px",
          backgroundColor: "#e0e0e0",
          borderRadius: "5px",
          border:"1px solid #e0e0e0",
          cursor: "pointer",
          position: "relative",
        }}
        onClick={handleSeek}
      >
        <div
          css={{
            width: `${(currentTime / duration) * 100}%`,
            height: "100%",
            backgroundColor: "#fff",
            borderRadius: "5px",
            fontWeight:500
          }}
        ></div>
      </div>
      <div css={{
        display:"flex",
        justifyContent:"space-between",
        marginTop:8,
        width:"100%"
      }}>
        <div>  <button
        onClick={togglePlayPause}
        css={{
        //   padding: "10px 20px",
          backgroundColor: isPlaying ? "#111" : "#c4c4c4",
          color: "#fff",
          border: "none",
          outline:"none",
          borderRadius: "5px",
          fontSize: "16px",
          cursor: "pointer",
          marginBottom: "10px",
          display:"flex",
          justifyContent:"center",
          alignItems:"center",
          width: 24,
          height: 24,
        }}
      >
        {isPlaying ?    <motion.img
                    initial={{
                      opacity: 0,
                      scale: 1,
                    }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    whileHover={{
                      scale: 0.9,
                    }}
                    transition={{
                      // ease: "easeInOut",
                      duration: 0.6,
                    }}
                    css={mq({
                     
                      objectFit: "cover",
                      objectPosition: "center",

                      width: 16,
                      height: 16,

                      // transform: "scale(1.9)",
                    })}
                    src="/divard/svg/music/pause.svg"
                  /> :    <motion.img
                    initial={{
                      opacity: 0,
                      scale: 1,
                    }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    whileHover={{
                      scale: 0.9,
                    }}
                    transition={{
                      // ease: "easeInOut",
                      duration: 0.6,
                    }}
                    css={mq({
                    

                      objectFit: "cover",
                      objectPosition: "center",

                      width: 16,
                      height: 16,

                      // transform: "scale(1.9)",
                    })}
                    src="/divard/svg/music/play.svg"
                  />}
     
      </button></div>
      
      <div>
     
     {isPlaying && <div
        css={{
          marginTop: "8px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        
        <input
          id="volume-slider"
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
          css={{
            width: "100%",
            maxWidth: "200px",
            cursor: "pointer",
            height:4
          }}
        />
      </div>}
      
      </div>
      </div>
     
      {/* Volume Control */}
      
    </div></div>
  );
}

export default MusicAudioPlayer;
