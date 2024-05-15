// import Scene1Day from "../Data/videos/scene1/Scene1Day.mp4";
// import Scene1Fog from "../Data/videos/scene1/Scene1Fog.mp4";
// import Scene1Night from "../Data/videos/scene1/Scene1Night.mp4";

// import Scene1DayAndroid from "../Data/videos/scene1/Scene1Day_android.mp4";
// import Scene1FogAndroid from "../Data/videos/scene1/Scene1Fog_android.mp4";
// import Scene1NightAndroid from "../Data/videos/scene1/Scene1Night_android.mp4";

// import Scene2Day from "../Data/videos/scene2/Scene2Day.mp4";
// import Scene2Fog from "../Data/videos/scene2/Scene2Fog.mp4";
// import Scene2Night from "../Data/videos/scene2/Scene2Night.mp4";

// import Scene2DayAndroid from "../Data/videos/scene2/Scene2Day_android.mp4";
// import Scene2FogAndroid from "../Data/videos/scene2/Scene2Fog_android.mp4";
// import Scene2NightAndroid from "../Data/videos/scene2/Scene2Night_android.mp4";

// import Scene3Day from "../Data/videos/scene3/Scene3Day.mp4";
// import Scene3Fog from "../Data/videos/scene3/Scene3Fog.mp4";

// import Scene3DayAndroid from "../Data/videos/scene3/Scene3Day_android.mp4";
// import Scene3FogAndroid from "../Data/videos/scene3/Scene3Fog_android.mp4";

console.log(process.env.REACT_APP_VIDEO_BASE_URL);
const Scene1Day =
  process.env.REACT_APP_VIDEO_BASE_URL + "/scene1/Scene1Day.mp4";

const Scene2Day =
  process.env.REACT_APP_VIDEO_BASE_URL + "/videos/scene2/Scene2Day.mp4";
// *****************************
// * Header buttons data
// *****************************
export const navItems = [
  {
    id: 1,
    title: "View Scene",
  },
  {
    id: 2,
    title: "Resources",
  },
  {
    id: 3,
    title: "Mobile",
  },
];

// *****************************
// * View Plot dropdown data
// *****************************
export const videoDropdownItems = [
  {
    id: 0,
    title: "Scene 1 Day",
    Mac: Scene1Day,
    // Android: Scene1DayAndroid,
  },
  {
    id: 1,
    title: "Scene 2 Day",
    // Mac: Scene2Day,
    // Android: Scene2DayAndroid,
  },
  {
    id: 2,
    title: "Scene 3 Day",
    // Mac: Scene3Day,
    // Android: Scene3DayAndroid,
  },
  {
    id: 3,
    title: "Scene 1 Fog",
    // Mac: Scene1Fog,
    // Android: Scene1FogAndroid,
  },
  {
    id: 4,
    title: "Scene 2 Fog",
    // Mac: Scene2Fog,
    // Android: Scene2FogAndroid,
  },
  {
    id: 5,
    title: "Scene 3 Fog",
    // Mac: Scene3Fog,
    // Android: Scene3FogAndroid,
  },
  {
    id: 6,
    title: "Scene 1 Night",
    // Mac: Scene1Night,
    // Android: Scene1NightAndroid,
  },
  {
    id: 7,
    title: "Scene 2 Night",
    // Mac: Scene2Night,
    // Android: Scene2NightAndroid,
  },
];

// ***********
// * Exporting Project Name
// ***********
export const projectName = "Construction";
