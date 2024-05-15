import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import X3D from "./components/X3D/X3D";
import { useState, createContext } from "react";

export const AppContext = createContext();

function App() {
  // *****************************
  // * Component States
  // *****************************
  const [mobileView, setMobileView] = useState(false);
  const [overlay, setOverlay] = useState(false);
  const [sceneState, setSceneState] = useState(0);

  return (
    <AppContext.Provider
      value={{
        mobileView,
        setMobileView,
        sceneState,
        setSceneState,
        overlay,
        setOverlay,
      }}
    >
      <div className="App">
        <Header></Header>
        <div>
          <X3D></X3D>
        </div>

        <Footer></Footer>
      </div>
    </AppContext.Provider>
  );
}

export default App;
