import React, { Component } from 'react';
import './index.css';
import createDragElementWithDom from '../create-drag-element-with-dom';

export default class MapContainer extends Component {
  componentDidMount() {
    const { onFillContainer } = this.props;
    const divImg = document.createElement('div');
    const name = '地图上的自定义元素';
    divImg.innerText = name;
    divImg.style = "cursor: move;background-color: #fff;"

    // mark: 原本是通过 appendChild 追加到地图上
    // document.querySelector('#features-container').appendChild(divImg);

    // mark: 现在改成这种方式追加内容
    createDragElementWithDom({
      onFillContainer,
      parentComponent: this,
      container: document.querySelector('#features-container'),
      element: divImg,
      name: name,
    });
  }

  render() {
    return (
      <div className="map-root">
        这里是地图组件，当拖拽左侧元素时，会显示九宫格组件
        <div style={{ position: 'absolute', left: 100, top: 100 }} className="features-container" id="features-container">
        </div>
      </div>
    )
  }
}