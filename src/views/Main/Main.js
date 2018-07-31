import React, { Component } from "react";
import logo from "../../assets/images/wexer_logo.png";
import "./Main.css";
import {
  SignalWifi1Bar,
  Event,
  ChevronRight,
  ChevronLeft,
  VolumeUp,
  PlayArrow
} from "@material-ui/icons";
import { format } from "date-fns";
import { Link } from "react-router-dom";

export default class Main extends Component {
  state = {
    videos: [
      {
        filename: "Q317_Virtual_SB_45min_EN_wexer_profile_LEQ-23.mp4",
        name: "SH´BAM 29"
      },
      {
        filename: "VIRTUAL_Q118_BR02_30min_JA_wexer_profile_LEQ-23.mp4",
        name: "BARRE 2"
      },
      {
        filename: "VIRTUAL_Q118_GP24_30min_DE_wexer_profile_LEQ-23.mp4",
        name: "GRIT 24 Plyometrics (DE)"
      },
      {
        filename: "Q317_Virtual_CX_30min_EN_wexer_profile_LEQ-23.mp4",
        name: "CXWORX 28"
      }
    ]
  };

  componentDidMount() {
    console.log("Main mounted!", this.props);
    setInterval(() => this.setState({ time: format(new Date(), "HH:mm:ss") }));
  }

  render() {
    const { videos, time } = this.state;

    return (
      <div>
        <div className="main-bg">
          <img src={logo} height={35} />
          <div className="featured-list">
            <ChevronLeft className="svg" />
            {videos.map(video => (
              <Link to="/workout/1">
                <img
                  src={`https://nfoo-server.com/wexerpreview/13_${video.filename.substr(
                    0,
                    video.filename.length - 4
                  )}Square.jpg`}
                  height={35}
                />
              </Link>
            ))}
            <ChevronRight className="svg" />
          </div>
          <div className="filter-list">
            <h1>Favourites</h1>

            <h1>Level</h1>

            <h1>Duration</h1>

            <h1>Type</h1>

            <h1>Provider</h1>
          </div>
          <div className="main-bottom-menu">
            <div className="main-bottom-left">
              <p>../..</p>
              <p>Make your selection</p>
            </div>
            <SignalWifi1Bar className="svg" />
            <Event className="svg" />
            <div className="main-bottom-right">
              <p>Next class: --</p>
              <p>Please make your selection</p>
            </div>
          </div>
          <div className="main-footer">
            <div>{time}</div>
            <div>{format(new Date(), "d. MMMM YYYY")}</div>
            <div>English</div>
            <div>
              <VolumeUp />
            </div>
            <div style={{ marginLeft: "auto" }}>
              <PlayArrow />
              <img src={logo} height={25} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
