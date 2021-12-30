import React, { Component } from 'react';
import { DropTarget } from 'react-dnd'
import { acceptType } from '../../constant'
import './index.css';
import CardMask from '../card-mask-container';

class MapContainer extends Component {
  render() {
    const { canDrop, fillInfo, connectDropTarget, cardMaskViewCount } = this.props;
    const cardMaskCls = canDrop ? '' : 'card-mask-hide';

    return (
      connectDropTarget &&
      connectDropTarget(
        <div className="map-root">
          这里是地图组件，当拖拽左侧元素时，会显示九宫格组件
          <CardMask
            fillInfo={fillInfo}
            className={cardMaskCls}
            cardMaskViewCount={cardMaskViewCount}
          />
        </div>
      )
    )
  }
}

const spec = {
}

export default DropTarget(
  acceptType.DragElement,
  spec,
  (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    canDrop: monitor.canDrop(),
  }),
)(MapContainer);
