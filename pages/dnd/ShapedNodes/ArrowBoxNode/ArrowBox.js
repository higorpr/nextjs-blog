import { Handle, Position } from "reactflow";
import styled from "styled-components";

export default function ArrowBox({ data, isConnectable }) {
	return (
		<ArrowBoxDiv>
			<UpperPart></UpperPart>
			<div>
				<label htmlFor="text">{data.innerText}</label>
			</div>
			<LowerPart></LowerPart>
			<Handle
				type="target"
				position={Position.Left}
				id="a"
				isConnectable={isConnectable}
				style={{ left: 1 }}
			/>
			<Handle
				type="source"
				position={Position.Right}
				id="b"
				isConnectable={isConnectable}
				style={{ left: 102 }}
			/>
		</ArrowBoxDiv>
	);
}

const ArrowBoxDiv = styled.div`
	background: white;

	label {
		display: flex;
		text-align: center;
		color: #000;
		font-size: 8px;
	}
`;

const UpperPart = styled.div`
	height: 25px;
	width: 100px;
	border: 1px solid #000;
	border-bottom: none;
	transform: skew(20deg);
`;

const LowerPart = styled.div`
	height: 25px;
	width: 100px;
	border: 1px solid #000;
	border-top: none;
	transform: skew(-20deg);
`;
