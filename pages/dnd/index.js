import { useCallback, useState } from "react";
import ReactFlow, {
	useNodesState,
	useEdgesState,
	addEdge,
	MiniMap,
	Controls,
	Background,
	Panel,
} from "reactflow";
import "reactflow/dist/style.css";

const initialNodes = [
	{ id: "1", position: { x: 0, y: 0 }, data: { label: "Node 1" } },
	{ id: "2", position: { x: 0, y: 100 }, data: { label: "Node 2" } },
	{ id: "3", position: { x: 180, y: 0 }, data: { label: "Node 3" } },
];
const initialEdges = [
	{ id: "1-2", source: "1", target: "2", label: "test label", type: "step" },
];

export default function Dnd() {
	const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
	const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
	const onConnect = useCallback(
		(connection) => setEdges((eds) => addEdge(connection, eds)),
		[setEdges]
	);
	const [background, setBackground] = useState("dots");
	return (
		<div style={{ width: "100vw", height: "100vh" }}>
			<ReactFlow
				nodes={nodes}
				edges={edges}
				onNodesChange={onNodesChange}
				onEdgesChange={onEdgesChange}
				onConnect={onConnect}
				fitView
			>
				<MiniMap />
				<Controls />
				<Background color="#ccc" variant={background} />
				<Panel>
					<div>variant</div>
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
