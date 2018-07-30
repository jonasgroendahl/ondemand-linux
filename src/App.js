import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Main from "./views/Main/Main";
const electron = window.require("electron").remote;
const fs = window.require("fs");

class App extends Component {
  state = {
    videos: []
  };

  componentDidMount() {
    console.log("dirname", __dirname);
    console.log("electron", electron.app.getAppPath());
    fs.readdir("src/assets/videos", (err, files) => {
      if (err) console.log(err);
      files.forEach(file => console.log(file));
      this.setState({ videos: files });
    });
  }

  saveFile = () => {
    try {
      fs.writeFileSync("myfile.txt", "hello", "utf-8");
    } catch (e) {
      alert("Failed to save the file !!");
    }
  };

  render() {
    return (
      <div className="App">
        <Main />
        {this.state.videos.map(video => (
          <video
            src={`file:///${electron.app
              .getAppPath()
              .replace(/\\/g, "/")}/src/assets/videos/${video}`}
            width={500}
            autoPlay
            controls
            loop
          />
        ))}
        <button onClick={this.saveFile}>Save a file</button>
      </div>
    );
  }
}

export default App;
