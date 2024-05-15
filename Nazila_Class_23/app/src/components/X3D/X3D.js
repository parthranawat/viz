import React from "react";
import { useEffect, useRef, useContext, useState } from "react";
import Plot from "./Plot";
import "./X3D.css";
import { videoDropdownItems } from "../../Data/Data";
import RotateOverlay from "./RotateOverlay";
import { AppContext } from "../../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";

const X3D = () => {
  // *****************************
  // * Getting states from App
  // *****************************
  const { mobileView, sceneState, overlay, setOverlay } =
    useContext(AppContext);

  // *****************************
  // * Hooks
  // *****************************
  const switchRef = useRef();
  // const videoRef = useRef();
  const videoRef = useRef(null); // Ref to the video element

  const [playButtonText, setplayButtonText] = useState(
    <FontAwesomeIcon icon={faPause} size="xl" />
  );
  const [sceneVideo, setSeceneVideo] = useState(
    videoDropdownItems[sceneState]["Mac"]
  );

  const mobileviewIsRunningRef = useRef(true);

  useEffect(() => {
    window.x3dom.reload();
    bindMe();

    // adding event listener to listen to gyroscope sensor
    window.addEventListener("deviceorientation", handleOrientation);
  }, []);

  useEffect(() => {
    if (navigator.userAgent.indexOf("Mac") !== -1) {
      console.log("Loading x3d file for mac");
      setSeceneVideo(videoDropdownItems[sceneState]["Mac"]);
    } else if (navigator.userAgent.indexOf("Android") !== -1) {
      console.log("Loading x3d file for android");
      setSeceneVideo(videoDropdownItems[sceneState]["Android"]);
    } else {
      console.log("Default video files");
      setSeceneVideo(videoDropdownItems[sceneState]["Mac"]);
    }
    let video = document.querySelector("movieTexture")._x3domNode._video;

    video.setAttribute("autoplay", "false");
    video.setAttribute("playsinline", "true");
    video.setAttribute("muted", "true");
    video.pause();

    setplayButtonText(<FontAwesomeIcon icon={faPause} size="xl" />);
  }, [sceneState]);

  // Optional code
  // Adds a delay to access the updated video from the DOM and pauses it by default

  // useEffect(() => {
  //   const timeoutId = setTimeout(() => {
  //     let video = document.querySelector("movieTexture")._x3domNode._video;
  //     console.log(video);
  //     video.pause();
  //   }, 500);

  //   // Clean up the timeout when component unmounts or when isActive changes
  //   return () => {
  //     clearTimeout(timeoutId);
  //   };
  // }, [sceneState]);

  useEffect(() => {
    //Request permission for iOS 13+ devices
    if (
      DeviceMotionEvent &&
      typeof DeviceMotionEvent.requestPermission === "function"
    ) {
      DeviceMotionEvent.requestPermission();
    }

    mobileviewIsRunningRef.current = !mobileviewIsRunningRef.current;
  }, [mobileView]);

  // *****************************
  // * Functions
  // *****************************
  var runtime = null;

  function bindMe() {
    var V = document.getElementById("vp");
    V.setAttribute("position", "0 0 10");
    V.setAttribute("bind", true);
    runtime = document.getElementById("x3dElement").runtime;
    runtime.resetView();
  }

  function shapeSwitch(id) {
    var sw = switchRef.current;
    sw.setAttribute("whichChoice", id);
    bindMe();
  }

  /* function added by sheeban for reference */
  function handleOrientation(event) {
    console.log("is running state", mobileviewIsRunningRef.current);
    if (!mobileviewIsRunningRef.current) {
      return;
    }
    var V = document.getElementById("vp");
    var degtorad = Math.PI / 180; // Degree-to-Radian conversion

    // if the alpha beta gamma in degrees give them radians

    var a = event.alpha * degtorad;
    var b = event.beta * degtorad;
    var c = event.gamma * degtorad;

    // console.log("This is x3dom", window.x3dom);

    var q1 = window.x3dom.fields.Quaternion.prototype.setFromEuler(c, b, a);

    var vector = new window.x3dom.fields.SFVec3f(1, 0, 0);
    var newmat = window.x3dom.fields.Quaternion.axisAngle(vector, -1.578);
    var m = newmat.toMatrix();
    newmat.setValue(m);
    var q2 = newmat.multiply(q1);
    var r = q2.toAxisAngle();

    V.setAttribute(
      "orientation",
      r[0].x + " " + r[0].y + " " + r[0].z + " " + r[1]
    );
  }

  function handlePlayButtonClick() {
    let video = document.querySelector("movieTexture")._x3domNode._video;
    if (video != null) {
      if (video.readyState === 4) {
        if (video.paused || video.ended) {
          video.play();
          // video.setAttribute("muted", "false");
          setplayButtonText(<FontAwesomeIcon icon={faPause} size="xl" />);
        } else {
          video.pause();
          setplayButtonText(<FontAwesomeIcon icon={faPlay} size="xl" />);
        }
      }
    }
  }

  return (
    <div id="x3d-div">
      <div id="x3dom-container" className="x3dom-container">
        <x3d
          is="x3d"
          id="x3dElement"
          showStat="false"
          showLog="false"
          disableDoubleClick="true"
        >
          {/* {overlay ? <RotateOverlay /> : null} */}
          <RotateOverlay></RotateOverlay>
          <scene is="scene" id="scene">
            <environment
              is="environment"
              id="gamma"
              gammaCorrectionDefault="linear"
            ></environment>

            <navigationInfo
              is="navigationInfo"
              DEF="NavigationInfo1"
              avatarSize=".25 1.6 .75"
              visibilityLimit="100"
              speed="0.2"
              headlight="false"
              type='"TURNTABLE" "ANY"'
            ></navigationInfo>

            <viewpoint
              is="viewpoint"
              id="vp"
              position="-3.01651 -0.34734 -0.37032"
              orientation="-0.50523 -0.85950 -0.07748 0.35315"
              zNear="0.00634"
              zFar="63.43376"
              centerOfRotation="0.00000 0.00000 0.00000"
              fieldOfView="0.80000"
              description="Plot Center 1"
            ></viewpoint>

            <worldInfo
              is="worldInfo"
              info='"Watershed Training with Professor Hession" "www.vt.edu" "Nicholas Polys" "Photosphere"'
              title="ICAT Virtual Tour"
            ></worldInfo>

            <switch
              ref={switchRef}
              is="switch"
              id="sphereSwitch"
              whichChoice="0"
            >
              <Plot url={sceneVideo}></Plot>
            </switch>
            <div id="play">
              <button onClick={handlePlayButtonClick}>{playButtonText}</button>
            </div>
          </scene>
        </x3d>
      </div>
    </div>
  );
};

export default X3D;
