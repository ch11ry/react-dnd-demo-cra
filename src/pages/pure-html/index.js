import React, { Component } from 'react';
import LeftSide from './components/left-side';
import MapContainer from './components/map-container';
import Preview from './components/preview';

export default class index extends Component {
  state = {
    fillInfo: [],
    previewCount: 9,
  }

  render() {
    const { previewCount } = this.state;

    return (
      <div>
        <LeftSide
          previewCount={previewCount}
          onPreviewCountChange={(newValue) => {
            window.vedioOrderData = [];
            this.setState(prev => ({
              ...prev,
              previewCount: newValue,
            }))
          }}
        />
        <MapContainer />
        <Preview key={previewCount} previewCount={previewCount} />
      </div>
    )
  }
}
