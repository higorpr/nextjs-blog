export default function RectSvg({ props }) {
	return (
		<svg width={props.width} height={props.height}>
			<rect
				x="0"
				y="0"
				rx="10"
				width={props.width}
				height={props.height}
				fill={props.color}
				// stroke-width="2"
				// stroke="#fff"
			></rect>
		</svg>
	);
}
