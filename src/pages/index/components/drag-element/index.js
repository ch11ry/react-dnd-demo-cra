import React, { Component } from 'react'
import { DragSource } from 'react-dnd'
import { acceptType } from '../../constant'
import './index.css';

class DragElement extends Component {
	render() {
		const { name, isDragging, connectDragSource } = this.props;
		const opacity = isDragging ? 0.4 : 1

		return (
			connectDragSource &&
			connectDragSource(
				<div style={{ opacity }} className="drag-element-root">
					{name}
				</div>
			)
		)
	}
}

const spec = {
	beginDrag(props) {
		return {
			name: props.name,
		}
	},

	endDrag(props, monitor) {
		const { onFillContainer } = props;
		const item = monitor.getItem()
		const dropResult = monitor.getDropResult()

		if (item && dropResult) {
			onFillContainer({
				containerName: dropResult.name,
				elementName: item.name,
			});
		}
	},
}

export default DragSource(
	acceptType.DragElement,
	spec,
	(connect, monitor) => ({
		connectDragSource: connect.dragSource(),
		isDragging: monitor.isDragging(),
	}),
)(DragElement);