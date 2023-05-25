import { useCallback } from "react";
import { Handle, Position } from "reactflow";
import styled from "styled-components";

export default function Circle({ data, isConnectable }) {
	// const onChange = useCallback((evt) => {
	// 	console.log(evt.target.value);
	// }, []);

	return (
		<CircularDiv>
			<div>
				<label htmlFor="text">Global Memory "X"</label>
			</div>
			<Handle
				type="target"
				position={Position.Left}
				id="a"
				isConnectable={isConnectable}
			/>
			<Handle
				type="source"
				position={Position.Right}
				id="b"
				isConnectable={isConnectable}
			/>
		</CircularDiv>
	);
}

const CircularDiv = styled.div`
	height: 50px;
	width: 80px;
	border-radius: 50%;
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
