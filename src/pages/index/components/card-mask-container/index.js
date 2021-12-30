import React, { Component } from 'react';
import CardItem from './components/card-item';
import './index.css';
import { DropTarget } from 'react-dnd'
import { acceptType } from '../../constant'

class CardMaskContainer extends Component {
  render() {
    const { fillInfo, cardMaskViewCount, connectDropTarget } = this.props;

    let result;
    if (cardMaskViewCount === 1) {
      result = (
        <div className={`card-mask-root`}>
          <div className="row">
            <CardItem order={1} fillInfo={fillInfo} />
          </div>
        </div>
      );
    }

    if (cardMaskViewCount === 4) {
      result = (
        <div className={`card-mask-root`}>
          <div className="row">
            <CardItem order={1} fillInfo={fillInfo} />
            <CardItem order={2} fillInfo={fillInfo} />
          </div>

          <div className="row">
            <CardItem order={3} fillInfo={fillInfo} />
            <CardItem order={4} fillInfo={fillInfo} />
          </div>
        </div>
      );
    }

    if (cardMaskViewCount === 9) {
      result = (
        <div className={`card-mask-root`}>
          <div className="row">
            <CardItem order={1} fillInfo={fillInfo} />
            <CardItem order={2} fillInfo={fillInfo} />
            <CardItem order={3} fillInfo={fillInfo} />
          </div>

          <div className="row">
            <CardItem order={4} fillInfo={fillInfo} />
            <CardItem order={5} fillInfo={fillInfo} />
            <CardItem order={6} fillInfo={fillInfo} />
          </div>

          <div className="row">
            <CardItem order={7} fillInfo={fillInfo} />
            <CardItem order={8} fillInfo={fillInfo} />
            <CardItem order={9} fillInfo={fillInfo} />
          </div>
        </div>
      )
    }

    return connectDropTarget && connectDropTarget(result);
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
)(CardMaskContainer);
