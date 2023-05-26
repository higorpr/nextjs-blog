import { ReactFlow } from "reactflow";
import styled from "styled-components";
import ArrowBox from "../ShapedNodes/ArrowBoxNode/ArrowBox";
import ArrowBoxComp from "../ReactFlowShapePieces/ArrowBoxComp";

export default function ShapesBar({ nodes }) {
	function onDragStart(event, nodeType) {
		event.dataTransfer.setData("application/reactflow", nodeType);
		event.dataTransfer.effectAllowed = "move";
	}
	return (
		<StyledBar>
			<ArrowBoxComp />
			{/* <ArrowBox data={{ label: "" }} /> */}
			{/* <TitleDiv>Flowchart Elements</TitleDiv> */}
			{/* <hr /> */}
			{/* <div style={{ width: "100vw", height: "10vh" }}>
				<ReactFlow nodesDraggable={false} nodesConnectable={false} />
			</div> */}
			{/* <hr /> */}
		</StyledBar>
	);
}

const StyledBar = styled.div`
	height: 10vh;
`;

const TitleDiv = styled.div`
	margin-left: 5px;
	margin-top: 5px;
`;
