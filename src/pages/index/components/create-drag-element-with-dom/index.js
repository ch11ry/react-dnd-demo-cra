import React, { Component } from 'react'
import { DragSource } from 'react-dnd'
import { acceptType } from '../../constant'
import './index.css';
import ReactDOM from 'react-dom';

class DragElement extends Component {
	componentDidMount() {
		const { dom, id } = this.props;
		document.querySelector(`#${id}`).appendChild(dom);
	}

	render() {
		const { isDragging, connectDragSource, id } = this.props;
		const opacity = isDragging ? 0.4 : 1

		return (
			connectDragSource &&
			connectDragSource(
				<div id={id} style={{ opacity }} className="drag-element-root">
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

const DragElementWrap = DragSource(
	acceptType.DragElement,
	spec,
	(connect, monitor) => ({
		connectDragSource: connect.dragSource(),
		isDragging: monitor.isDragging(),
	}),
)(DragElement);

let _id = 0;
const getId = () => {
	_id += 1;
	return `drag-element-with-dom-${_id}`;
}
export default function createDragElementWithDom({ name, onFillContainer, parentComponent, element, container }) {
	ReactDOM.unstable_renderSubtreeIntoContainer(
		parentComponent,
		<DragElementWrap onFillContainer={onFillContainer} name={name} dom={element} id={getId()} />,
		container
	);
}
