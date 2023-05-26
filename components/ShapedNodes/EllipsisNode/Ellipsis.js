import { useCallback } from "react";
import { Handle, Position } from "reactflow";
import styled from "styled-components";

export default function Ellipsis({ data, isConnectable }) {
	// const onChange = useCallback((evt) => {
	// 	console.log(evt.target.value);
	// }, []);

	return (
		<CircularDiv>
			<div>
				<label htmlFor="text">
					<p>{data.label}</p>
				</label>
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
	border: 1px solid #000;
	padding: 5px;
	background-color: #000;
	display: flex;
	align-items: center;
	justify-content: center;

	label {
		display: flex;
		text-align: center;
		color: #000;
		font-size: 8px;

		p {
			color: #fff;
		}
	}
`;
