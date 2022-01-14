import { useState } from "react";
import "./App.css";
import Clock from "./components/Clock/Clock";
import Quote from "./components/Quote/Quote";

const backgroundTime = {
  morning:
    "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  afternoon:
    "https://images.unsplash.com/photo-1521944521548-a8ed0caa8f38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  evening:
    "https://images.unsplash.com/photo-1472120435266-53107fd0c44a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  night:
    "https://images.unsplash.com/photo-1506606401543-2e73709cebb4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
};

function App() {
  const [background, setBackground] = useState("");

  const getBackgroundChangeHandler = (bg) => {
    setBackground(bg);
  };

  let bgStyles = {
    backgroundImage: `url(${backgroundTime[background]})`,
    backgroundSize: "cover",
  };
  return (
    <div className="App" style={bgStyles}>
      <Quote />
      <Clock onChangeBg={getBackgroundChangeHandler} />
    </div>
  );
}

export default App;
