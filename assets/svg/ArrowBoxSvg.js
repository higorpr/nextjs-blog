import styled from "styled-components";

export default function ArrowBoxSvg(props) {
	const horizontalLineXCoord = Number(props.width) * 0.9;
	const middlePointYCoord = Number(props.height) * 0.5;
	return (
		<TestDiv
			onDragStart={(event) => props.onDragStart(event, "arrow")}
			draggable
			width={`${props.width}px`}
		>
			<svg
				width={props.width}
				height={props.height}
				style={{ overflow: "visible" }}
			>
				<path
					d={`M0,0 L${horizontalLineXCoord},0  L${props.width},${middlePointYCoord} L${horizontalLineXCoord},${props.height} L0,${props.height} z`}
					fill={props.color}
					// stroke-width="2"
					// stroke="#fff"
				></path>
			</svg>
		</TestDiv>
	);
}

const TestDiv = styled.div`
	background-color: blue;
	width: 130px;
`;
