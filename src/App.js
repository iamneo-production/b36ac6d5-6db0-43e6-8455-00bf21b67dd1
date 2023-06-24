import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.css";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import Navbar from "./components/Navbar";


function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div> 
     
   
    <div className={darkMode ? "app dark" : "app"}>
      {/* <Navbar/> */}
      <BrowserRouter>
      <Navbar style={{marignLeft:'50px'}}/>
        <Routes>
        
          <Route path="/">
            <Route index element={<Home />} />
            
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route>
            
          </Route>
        </Routes>
      </BrowserRouter>
     
    </div>
    </div>
  );
}

export default App;
