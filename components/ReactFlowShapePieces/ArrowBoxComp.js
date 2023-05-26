import { ReactFlow } from "reactflow";
import ArrowBox from "../ShapedNodes/ArrowBoxNode/ArrowBox";

export default function ArrowBoxComp() {
	const node = [
		{
			id: "1",
			type: "arrow",
			position: { x: 0, y: 0 },
			data: {
				label: "",
			},
		},
	];

	const nodeType = {
		arrow: ArrowBox,
	};

	return (
		<div style={{ width: "10vw", height: "10vh" }}>
			<ReactFlow
				nodes={node}
				nodeTypes={nodeType}
				nodesConnectable={false}
				nodesDraggable={false}
				// fitView={true}
			/>
		</div>
	);
}
