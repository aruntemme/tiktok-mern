import React from "react";
import "./VideoFooter.css";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import Ticker from "react-ticker";

function VideoFooter() {
  return (
    <div>
      <div className="videoFooter">
        <div className="videoFooter__text">
          <h3>@aruntemme</h3>
          <p>This is some description</p>
          <div className="videoFooter__ticker">
            <MusicNoteIcon className="videoFooter__icon" />
            <Ticker mode="smooth">
              {({ index }) => (
                <>
                  <p>I am baby</p>
                </>
              )}
            </Ticker>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoFooter;
