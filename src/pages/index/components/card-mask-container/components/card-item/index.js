import React, { Component } from 'react';
import { DropTarget } from 'react-dnd'
import { acceptType } from '../../../../constant';
import './index.css';

const getContainerName = (order) => `九宫格容器 - ${order}`;

class CardItem extends Component {
  render() {
    const { connectDropTarget, canDrop, isOver, fillInfo, order, preview } = this.props;
    const hasFillElement = fillInfo.find(q => q.containerName === getContainerName(order));

    if (preview) {
      return (
        <div className="col">
          {hasFillElement && `已填充：${hasFillElement.elementName}`}
        </div>
      )
    }

    const isActive = canDrop && isOver;
    const extraStyle = {};
    if (isActive) {
      extraStyle.backgroundColor = 'darkgreen'
    } else if (canDrop) {
      extraStyle.backgroundColor = 'darkkhaki'
    }

    return (
      connectDropTarget &&
      connectDropTarget(
        <div className="col" style={extraStyle}>
          {hasFillElement && `已填充：${hasFillElement.elementName}`}
        </div>
      )
    )
  }
}

const spce = {
  drop(props) {
    const { order } = props;
    return { name: getContainerName(order) }
  },
}

export default DropTarget(
  acceptType.DragElement,
  spce,
  (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
  }),
)(CardItem);
