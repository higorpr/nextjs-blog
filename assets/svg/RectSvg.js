import styled from "styled-components";

export default function RectSvg(props) {
	const w = `${props.width}px`;
	return (
		<TestDiv
			onDragStart={(event) => props.onDragStart(event, "rectangle")}
			draggable
			width={w}
		>
			<svg
				width={`${props.width}px`}
				height={props.height}
				style={{ overflow: "visible" }}
			>
				<rect
					x="0"
					y="0"
					rx="10"
					width={props.width}
					height={props.height}
					fill={props.color}
					// stroke-width="2"
					// stroke="#fff"
				></rect>
			</svg>
		</TestDiv>
	);
}

const TestDiv = styled.div`
	background-color: blue;
	display: inline-block;
	width: ${(p) => p.w};
`;
