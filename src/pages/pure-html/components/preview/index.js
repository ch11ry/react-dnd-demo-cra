import React, { Component } from 'react';
import './index.css';

window.vedioOrderData = [];

export default class Preview extends Component {
  handleDrop = (event) => {
    event.preventDefault();

    var order = event.target.dataset["order"]; // 这里就是定义在九宫格中的 data-order 里的值
    var id = event.dataTransfer.getData("node-id"); // 这是树节点的 id
    var name = event.dataTransfer.getData("node-name"); // 这是树节点的 name

    event.target.innerText = name;
    window.vedioOrderData[order] = {
      id,
      name,
    }

    console.log('=======================');
    Object.keys(window.vedioOrderData).forEach((key) => {
      const item = window.vedioOrderData[key];
      console.log("第", key, "号视频的内容是", item.name, "id 是", item.id)
    })
  }

  handleDragOver = (event) => {
    event.preventDefault();
  }

  render() {
    const { previewCount } = this.props;

    let result;
    if (previewCount === 1) {
      result = (
        <div className="preview-wrap">
          <div className="row">
            <div className="col" data-order="1" onDrop={this.handleDrop} onDragOver={this.handleDragOver}></div>
          </div>
        </div>
      );
    }

    if (previewCount === 4) {
      result = (
        <div className="preview-wrap">
          <div className="row">
            <div className="col" data-order="1" onDrop={this.handleDrop} onDragOver={this.handleDragOver}></div>
            <div className="col" data-order="2" onDrop={this.handleDrop} onDragOver={this.handleDragOver}></div>
          </div>

          <div className="row">
            <div className="col" data-order="3" onDrop={this.handleDrop} onDragOver={this.handleDragOver}></div>
            <div className="col" data-order="4" onDrop={this.handleDrop} onDragOver={this.handleDragOver}></div>
          </div>
        </div>
      );
    }

    if (previewCount === 9) {
      result = (
        <div className="preview-wrap">
          <div className="row">
            <div className="col" data-order="1" onDrop={this.handleDrop} onDragOver={this.handleDragOver}></div>
            <div className="col" data-order="2" onDrop={this.handleDrop} onDragOver={this.handleDragOver}></div>
            <div className="col" data-order="3" onDrop={this.handleDrop} onDragOver={this.handleDragOver}></div>
          </div>

          <div className="row">
            <div className="col" data-order="4" onDrop={this.handleDrop} onDragOver={this.handleDragOver}></div>
            <div className="col" data-order="5" onDrop={this.handleDrop} onDragOver={this.handleDragOver}></div>
            <div className="col" data-order="6" onDrop={this.handleDrop} onDragOver={this.handleDragOver}></div>
          </div>

          <div className="row">
            <div className="col" data-order="7" onDrop={this.handleDrop} onDragOver={this.handleDragOver}></div>
            <div className="col" data-order="8" onDrop={this.handleDrop} onDragOver={this.handleDragOver}></div>
            <div className="col" data-order="9" onDrop={this.handleDrop} onDragOver={this.handleDragOver}></div>
          </div>
        </div>
      )
    }

    return result;
  }
}
