import { Handle, Position } from "reactflow";
import styled from "styled-components";

export default function Rectangle({ data, isConnectable }) {
	return (
		<RectangularDiv>
			<div>
				<label htmlFor="text">{data.innerText}</label>
			</div>
			<Handle
				type="target"
				position={Position.Left}
				id="a"
				isConnectable={isConnectable}
				style={{ color: "red" }}
			/>
			<Handle
				type="source"
				position={Position.Right}
				id="b"
				isConnectable={isConnectable}
			/>
		</RectangularDiv>
	);
}

const RectangularDiv = styled.div`
	height: 50px;
	width: 100px;
	border-radius: 5px;
	border: 1px solid #eee;
	padding: 5px;
	background: white;
	display: flex;
	align-items: center;
	justify-content: center;
	border-color: #000;

	label {
		display: flex;
		text-align: center;
		color: #000;
		font-size: 8px;
	}
`;
