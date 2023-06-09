import { useCallback, useRef, useState } from "react";
import ReactFlow, {
	useNodesState,
	useEdgesState,
	addEdge,
	Controls,
	Background,
	Panel,
	MarkerType,
	ReactFlowProvider,
} from "reactflow";
import "reactflow/dist/style.css";
import ArrowBox from "../../components/ShapedNodes/ArrowBoxNode/ArrowBox";
import Document from "../../components/ShapedNodes/DocumentNode/Document";
import Ellipsis from "../../components/ShapedNodes/EllipsisNode/Ellipsis";
import Rectangle from "../../components/ShapedNodes/RectangleNode/Rectangle";
import Triangle from "../../components/ShapedNodes/TriangleNode/Triangle";
import Parallelogram from "../../components/ShapedNodes/ParallelogramNode/Parallelogram";
import ShapesBar from "../../components/ShapesBar/ShapesBar";
import ArrowBoxSvg from "../../assets/svg/ArrowBoxSvg";

const nodeTypes = {
	ellipsis: Ellipsis,
	rectangle: Rectangle,
	arrow: ArrowBox,
	document: Document,
	triangle: Triangle,
	parallelogram: Parallelogram,
};

let id = 0;
function getId() {
	return `dndnode_${id++}`;
}

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
			height: 130,
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
	const [background, setBackground] = useState("lines");
	const reactFlowWrapper = useRef(null);
	const [reactFlowInstance, setReactFlowInstance] = useState(null);

	const onConnect = useCallback(
		(connection) => setEdges((eds) => addEdge(connection, eds)),
		[setEdges]
	);

	const onDragOver = useCallback((event) => {
		event.preventDefault();
		event.dataTransfer.dropEffect = "move";
	}, []);

	const onDrop = useCallback(
		(event) => {
			event.preventDefault();
			const reactFlowBounds =
				reactFlowWrapper.current.getBoundingClientRect();
			const type = event.dataTransfer.getData("application/reactflow");

			// is a valid react flow element?
			if (typeof type === "undefined" || !type) {
				return;
			}

			const position = reactFlowInstance.project({
				x: event.clientX - reactFlowBounds.left,
				y: event.clientY - reactFlowBounds.top,
			});
			console.log(position);

			const newNode = {
				id: getId(),
				type,
				position,
				data: { label: "" },
			};

			setNodes((nds) => nds.concat(newNode));
		},
		[reactFlowInstance]
	);
	return (
		<>
			{/* <ArrowBoxSvg width="130" height="50" color="#000" /> */}
			<ReactFlowProvider>
				<ShapesBar />
				<div
					style={{ width: "100vw", height: "90vh" }}
					className="reactflow-wrapper"
					ref={reactFlowWrapper}
				>
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
							<button onClick={() => setBackground("dots")}>
								dots
							</button>
							<button onClick={() => setBackground("lines")}>
								lines
							</button>
							<button onClick={() => setBackground("cross")}>
								cross
							</button>
						</Panel>
					</ReactFlow>
				</div>
			</ReactFlowProvider>
		</>
	);
}
