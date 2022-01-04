import React, { Component } from 'react'
import { Radio } from 'antd';
const RadioGroup = Radio.Group;

export default class LeftSide extends Component {
  componentDidMount() {
    // 这里是通过动态方式注入拖拽功能
    const mapNodes = document.querySelectorAll('.tree-node');
    for (let index = 0; index < mapNodes.length; index++) {
      const mapNode = mapNodes[index];
      console.log('==mapNode', mapNode);
      mapNode.draggable = "true";
      mapNode.ondragstart = this.onDragStart;
    }
  }

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

  render() {
    const { previewCount, onPreviewCountChange } = this.props;

    return (
      <div>
        <div className="action-item">
          切换视图数量
          <RadioGroup
            value={previewCount}
            onChange={(event) => {
              onPreviewCountChange(event.target.value);
            }}
          >
            <Radio value={1}>1</Radio>
            <Radio value={4}>4</Radio>
            <Radio value={9}>9</Radio>
          </RadioGroup>
        </div>
        <ul className="tree-wrap">
          <li className="tree-node">树节点1</li>
          <li className="tree-node">树节点2</li>
          <li className="tree-node">树节点3</li>
        </ul>
      </div>
    )
  }
}
