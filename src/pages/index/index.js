import React, { Component } from 'react';
import { DragDropContextProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import MapConainer from './components/map-container'
import DragElement from './components/drag-element'
import './index.css';
import CardMask from './components/card-mask-container';
import { Radio } from 'antd';

const RadioGroup = Radio.Group;

console.log('===React')
console.dir(Component)
export default class Container extends Component {
	state = {
		fillInfo: [],
		cardMaskViewCount: 9,
	}

	handleSaveFillInfo = (fillInfo) => {
		this.setState(prevValue => ({
			...prevValue,
			fillInfo: [
				...prevValue.fillInfo.filter(q => q.containerName !== fillInfo.containerName),
				fillInfo
			]
		}));
	}

	render() {
		const { fillInfo, cardMaskViewCount } = this.state;

		return (
			<DragDropContextProvider backend={HTML5Backend}>
				<div>
					<div className="action-container">
						<div className="action-item">
							切换视图数量
							<RadioGroup
								value={cardMaskViewCount}
								onChange={(value) => {
									this.setState(prev => ({
										...prev,
										fillInfo: [],
										cardMaskViewCount: value.target.value,
									}));
								}}
							>
								<Radio value={1}>1</Radio>
								<Radio value={4}>4</Radio>
								<Radio value={9}>9</Radio>
							</RadioGroup>
						</div>
					</div>
					<div className="root">
						<div className="left-container">
							<DragElement name="元素1" onFillContainer={this.handleSaveFillInfo} />
							<DragElement name="元素2" onFillContainer={this.handleSaveFillInfo} />
							<DragElement name="元素3" onFillContainer={this.handleSaveFillInfo} />
						</div>
						<div className="right-container">
							<MapConainer onFillContainer={this.handleSaveFillInfo} />
						</div>
					</div>
					<div className="preview-container">
						<h2>预览区域：</h2>
						<div className="preview-card-mask-container">
							<CardMask fillInfo={fillInfo} cardMaskViewCount={cardMaskViewCount} />
						</div>
					</div>
				</div>
			</DragDropContextProvider>
		)
	}
}