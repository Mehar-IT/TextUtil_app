/* eslint-disable jsx-a11y/anchor-is-valid */
// import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import { Alter } from "./Components/Alter";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Components/About";
import Footer from "./Components/Footer";

function App() {
  const [themeState, setThemeState] = useState("light");
  const [alertState, setAlertState] = useState(null);

  const setAlert = (type, message) => {
    setAlertState({
      type: type,
      message: message,
    });
    setTimeout(() => {
      setAlertState(null);
    }, 1500);
  };

  const setTheme = () => {
    if (themeState === "light") {
      setThemeState("dark");
      document.body.style.background = "rgb(50 52 54)";
      document.body.style.color = "white";
      document.title = "TextUtils - Dark Mode";
      setAlert("success", "Dark Mode is enabled");
    } else {
      setThemeState("light");
      document.body.style.background = "white";
      document.title = "TextUtils - light Mode";
      document.body.style.color = "black";
      setAlert("success", "Light Mode is enabled");
    }
  };

  return (
    <Router>
      <Navbar
        title="Text Utils"
        theme={themeState}
        setThemeCallback={setTheme}
      />
      <div className="container">
        <Alter alert={alertState} />
        <Routes>
          <Route path="/about" element={<About theme={themeState} />}></Route>
          <Route
            path="/"
            element={
              <TextForm
                textTitle="Enter the text to Analyze"
                theme={themeState}
                setAlert={setAlert}
              />
            }
          ></Route>
        </Routes>
      </div>
      <Footer theme={themeState} />
    </Router>
  );
}

export default App;
