import React, { Component } from 'react';

class MidiTrackAdder extends Component {
  render() {
    return (
      <div className="MidiTrackAdder" style={{marginTop: '3px', marginBottom: '3px'}}>
        <div className="row">
          <div className="col">
            <button type="button" className="btn btn-primary" onClick={this.props.addMidiTrack}>Add track</button>
          </div>
        </div>
      </div>
    );
  }
}
export default MidiTrackAdder;
