import styled from "styled-components";
import ArrowBoxSvg from "../../assets/svg/ArrowBoxSvg";
import RectSvg from "../../assets/svg/RectSvg";
import React from "react";

export default function ShapesBar() {
	function onDragStart(event, nodeType) {
		console.log(event);
		console.log(nodeType);
		event.dataTransfer.setData("application/reactflow", nodeType);
		event.dataTransfer.effectAllowed = "move";
	}

	const initialNodes = [
		<ArrowBoxSvg
			width="130"
			height="60"
			color="#000"
			onDragStart={onDragStart}
		/>,
		<RectSvg
			width="130"
			height="60"
			color="#000"
			onDragStart={onDragStart}
		/>,
	];
	return (
		<StyledBar>
			{initialNodes.map((comp, idx) => (
				<IconHolder key={idx+1}>{comp}</IconHolder>
			))}
		</StyledBar>
	);
}

const StyledBar = styled.div`
	height: 10vh;
	display: flex;
	justify-content: space-around;
	align-items: center;
	padding: 10px;
`;

const IconHolder = styled.div`
	width: 130px;
`;
