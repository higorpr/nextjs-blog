export default function GroupContainer({ id, width, height, children }) {
	const groupStyle = {
		position: "absolute",
		border: "2ps dashed #000",
		opacity: "0.1",
		width,
		height,
	};

	return (
		<div id={id} style={groupStyle}>
			{children}
		</div>
	);
}
