import React, { Component } from "react";
import "./App.css";
import Router from "./components/Router/Router";
import io from "socket.io-client";
import DownloadDialog from "./components/DownloadDialog/DownloadDialog";
const electron = window.require("electron").remote;
const fs = window.require("fs");

class App extends Component {
  state = {
    videos: [],
    downloading: false,
    fileBeingDownloaded: "",
    content: [
      { filename: "968M_-_Quad_and_Hip_Stretch_-_W2_ny_video.mp4" },
      { filename: "969F_-_Forward_Flexion_-_W2_testing_allday.mp4" }
    ]
  };

  componentDidMount() {
    console.log("dirname", __dirname);
    console.log("electron", electron.app.getAppPath());
    this.connection = io.connect("http://localhost:3001");
    this.connection.on("connect", () => {
      console.log("We are connected to the backend in realtime!!");
    });
    this.setState({ downloading: true });
    fs.readdir(
      `${electron.app.getAppPath().replace(/\\/g, "/")}/src/assets/videos`,
      async (err, files) => {
        if (err) console.log(err);
        for (let contentEntry of this.state.content) {
          console.log(
            contentEntry,
            "Should I download?",
            files.indexOf(contentEntry.filename)
          );
          if (files.indexOf(contentEntry.filename) == -1 || true) {
            console.log("Downloading", contentEntry.filename);
            this.setState({ fileBeingDownloaded: contentEntry.filename });
            await this.downloadFile();
          }
        }
        this.setState({ videos: files, downloading: false });
      }
    );
  }

  downloadFile = () => {
    return new Promise(resolve => {
      setTimeout(() => resolve(), 2000);
    });
  };

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
        <DownloadDialog
          downloading={this.state.downloading}
          file={this.state.fileBeingDownloaded}
        />
        <Router />
        {/*
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
        */}
      </div>
    );
  }
}

export default App;
