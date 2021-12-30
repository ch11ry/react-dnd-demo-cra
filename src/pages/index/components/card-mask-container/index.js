import React, { Component } from 'react';
import CardItem from './components/card-item';
import './index.css';

export default class CardMaskContainer extends Component {
  render() {
    const { className, fillInfo, preview, cardMaskViewCount } = this.props;

    if (cardMaskViewCount === 1) {
      return (
        <div className={`card-mask-root ${className}`}>
          <div className="row">
            <CardItem order={1} fillInfo={fillInfo} preview={preview} />
          </div>
        </div>
      );
    }

    if (cardMaskViewCount === 4) {
      return (
        <div className={`card-mask-root ${className}`}>
          <div className="row">
            <CardItem order={1} fillInfo={fillInfo} preview={preview} />
            <CardItem order={2} fillInfo={fillInfo} preview={preview} />
          </div>

          <div className="row">
            <CardItem order={3} fillInfo={fillInfo} preview={preview} />
            <CardItem order={4} fillInfo={fillInfo} preview={preview} />
          </div>
        </div>
      );
    }

    return (
      <div className={`card-mask-root ${className}`}>
        <div className="row">
          <CardItem order={1} fillInfo={fillInfo} preview={preview} />
          <CardItem order={2} fillInfo={fillInfo} preview={preview} />
          <CardItem order={3} fillInfo={fillInfo} preview={preview} />
        </div>

        <div className="row">
          <CardItem order={4} fillInfo={fillInfo} preview={preview} />
          <CardItem order={5} fillInfo={fillInfo} preview={preview} />
          <CardItem order={6} fillInfo={fillInfo} preview={preview} />
        </div>

        <div className="row">
          <CardItem order={7} fillInfo={fillInfo} preview={preview} />
          <CardItem order={8} fillInfo={fillInfo} preview={preview} />
          <CardItem order={9} fillInfo={fillInfo} preview={preview} />
        </div>
      </div>
    )
  }
}