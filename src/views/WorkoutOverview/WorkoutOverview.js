import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
const electron = window.require("electron").remote;
const screen = window.require("electron").screen;

export default class WorkoutOverview extends Component {
  componentDidMount() {
    console.log(screen);
  }

  playClass = () => {
    const window = new electron.BrowserWindow({
      webPreferences: { webSecurity: false },
      x: 1920,
      y: 1080,
      fullscreen: true,
      frame: false
    });
    window.loadURL(
      `file:///${electron.app
        .getAppPath()
        .replace(/\\/g, "/")}/public/videoWindow.html?hello=4&tak=4`
    );
    window.webContents.on("did-finish-load", () => {
      console.log("Window Ready!");
      window.webContents.send(
        "id",
        "968M_-_Quad_and_Hip_Stretch_-_W2_ny_video.mp4"
      );
    });
  };

  render() {
    return (
      <div>
        <Link to="/">Back</Link>
        <video
          src={`file:///${electron.app
            .getAppPath()
            .replace(
              /\\/g,
              "/"
            )}/src/assets/videos/968M_-_Quad_and_Hip_Stretch_-_W2_ny_video.mp4`}
          width={500}
          autoPlay
          controls
          loop
        />
        <Button onClick={this.playClass}>Play class!</Button>
      </div>
    );
  }
}
