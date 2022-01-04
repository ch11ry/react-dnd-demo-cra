import React, { Component } from 'react';
import './index.css';

export default class MapContainer extends Component {
  onDragStart = (event) => {
    console.log('===tree node event', event);
    const text = event.target.innerText;

    // 自己找到对应数据
    const nodeData = {
      id: 1,
      name: text,
    }

    event.dataTransfer.setData("node-id", nodeData.id);
    event.dataTransfer.setData("node-name", nodeData.name);
  }

  componentDidMount() {
    const mapNode = document.createElement('div');
    mapNode.innerText = '地图节点1';
    mapNode.draggable = true;
    mapNode.ondragstart = this.onDragStart;
    document.querySelector('#map-container').appendChild(mapNode);
  }

  render() {
    return (
      <div id="map-container" className="map-container">

      </div>
    )
  }
}
