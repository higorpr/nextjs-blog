import { Handle, Position } from "reactflow";
import styled from "styled-components";

export default function Triangle({ data, isConnectable }) {
	return (
		<TriangleDiv>
			<div>
				<label htmlFor="text">
					<p>TestLabel</p>
				</label>
			</div>
			<Handle
				type="target"
				position={Position.Left}
				id="a"
				isConnectable={isConnectable}
				style={{ backgroundColor: "blue" }}
			/>
			<Handle
				type="source"
				position={Position.Right}
				id="b"
				isConnectable={isConnectable}
				style={{ backgroundColor: "blue" }}
			/>
		</TriangleDiv>
	);
}

const TriangleDiv = styled.div`
	width: 0;
	height: 0;
	border-top: 30px solid transparent;
	border-bottom: 30px solid transparent;
	border-left: 52px solid black;
	/* transform: rotate(45deg); */

	label {
		/* background-color: red; */
		display: flex;
		align-items: center;
		color: #000;
		font-size: 8px;
		position: absolute;
		top: 42%;
		left: 10%;

		p {
			color: white;
			font-size: 8px;
		}
	}
`;
