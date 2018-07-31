import React, { PureComponent } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  CircularProgress
} from "@material-ui/core";

export default class DownloadDialog extends PureComponent {
  render() {
    return (
      <div>
        <Dialog open={this.props.downloading}>
          <DialogTitle>Downloading assets...</DialogTitle>
          <DialogContent>
            <p>{`Downloading ${this.props.file}...`}</p>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <CircularProgress />
            </div>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}
