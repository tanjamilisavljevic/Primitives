import styled from "styled-components";

type TriangleProps = {
	base: number;
	height: number;
};

type CircleProps = {
	diameter: number;
};

type RectangleProps = {
	width: number;
	height: number;
};

export const StyledTriangle = styled.div<TriangleProps>`
	width: 0;
	height: 0;
	border-left: ${(props) => props.base / 2}px solid transparent;
	border-right: ${(props) => props.base / 2}px solid transparent;
	border-bottom: ${(props) => props.height}px solid red;
`;

export const StyledCircle = styled.div<CircleProps>`
	width: ${(props) => props.diameter}px;
	height: ${(props) => props.diameter}px;
	border-radius: 50%;
	background-color: blue;
`;

export const StyledRectangle = styled.div<RectangleProps>`
	width: ${(props) => props.width}px;
	height: ${(props) => props.height}px;
	background-color: yellow;
`;
