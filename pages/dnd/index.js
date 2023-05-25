import { useCallback, useState } from "react";
import ReactFlow, {
	useNodesState,
	useEdgesState,
	addEdge,
	Controls,
	Background,
	Panel,
	MarkerType,
} from "reactflow";
import "reactflow/dist/style.css";
import ArrowBox from "./ShapedNodes/ArrowBoxNode/ArrowBox";
import Document from "./ShapedNodes/DocumentNode/Document";
import Ellipsis from "./ShapedNodes/EllipsisNode/Ellipsis";
import Rectangle from "./ShapedNodes/RectangleNode/Rectangle";
import Triangle from "./ShapedNodes/TriangleNode/Triangle";
import Parallelogram from "./ShapedNodes/ParallelogramNode/Parallelogram";

const nodeTypes = {
	ellipsis: Ellipsis,
	rectangle: Rectangle,
	arrow: ArrowBox,
	document: Document,
	triangle: Triangle,
	parallelogram: Parallelogram,
};

const initialNodes = [
	{
		id: "1",
		type: "rectangle",
		position: { x: 10, y: 10 },
		data: { label: "Node 1" },
		parentNode: "9",
	},
	{
		id: "2",
		type: "rectangle",
		position: { x: 10, y: 70 },
		data: { label: "Node 2" },
		parentNode: "9",
	},
	{
		id: "3",
		type: "ellipsis",
		position: { x: 180, y: 0 },
		data: { label: "Node 3" },
	},
	{
		id: "4",
		type: "rectangle",
		position: { x: 280, y: 0 },
		data: { label: "Node 4" },
	},
	{
		id: "5",
		type: "arrow",
		position: { x: 280, y: 100 },
		data: {
			label: "Node 5",
		},
	},
	{
		id: "6",
		type: "document",
		position: { x: -100, y: 150 },
		data: { label: "Node 6" },
	},
	{
		id: "7",
		type: "triangle",
		position: { x: 400, y: -100 },
		data: { label: "Node 7 (Chat GPT)" },
	},
	{
		id: "8",
		type: "parallelogram",
		position: { x: 50, y: 200 },
		data: { label: "Node 8" },
	},
	{
		id: "9",
		type: "group",
		data: { label: "Group A" },
		position: { x: -100, y: -10 },
		className: "light",
		style: {
			backgroundColor: "rgba(255,0,0,0.2)",
			width: 120,
			height: 120,
		},
	},
];
const initialEdges = [
	{
		id: "1-2",
		source: "1",
		target: "2",
		label: "test label",
		type: "step",
		markerEnd: { type: MarkerType.ArrowClosed, color: "#000" },
		style: { color: "#000" },
	},
	{
		id: "2-3",
		source: "2",
		target: "3",
		label: "test label",
		type: "step",
		markerEnd: { type: MarkerType.Arrow },
	},
];

const rfStyle = { backgroundColor: "#ffffff" };

export default function Dnd() {
	const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
	const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
	const onConnect = useCallback(
		(connection) => setEdges((eds) => addEdge(connection, eds)),
		[setEdges]
	);
	const [background, setBackground] = useState("lines");
	return (
		<div style={{ width: "100vw", height: "100vh" }}>
			<ReactFlow
				nodes={nodes}
				edges={edges}
				onNodesChange={onNodesChange}
				onEdgesChange={onEdgesChange}
				onConnect={onConnect}
				fitView
				nodeTypes={nodeTypes}
				style={rfStyle}
				connectionLineType="step"
			>
				<Controls />
				<Background color="#ccc" variant={background} />
				<Panel position="bottom-right">
					<div style={{ color: "#000" }}>Grid Style</div>
					<button onClick={() => setBackground("dots")}>dots</button>
					<button onClick={() => setBackground("lines")}>
						lines
					</button>
					<button onClick={() => setBackground("cross")}>
						cross
					</button>
				</Panel>
			</ReactFlow>
		</div>
	);
}
