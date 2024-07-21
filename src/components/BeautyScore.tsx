import { ReactElement } from "react";
import { ScoreWrapper } from "../styles";

type BeautyScoreProps = {
	triangle: Record<"base" | "height", number>;
	circle: Record<"diameter", number>;
	rectangle: Record<"width" | "height", number>;
};

const BeautyScore = ({
	triangle,
	circle,
	rectangle,
}: BeautyScoreProps): ReactElement => {
	// I'd make this whole thing into separate util functions and add tests for the functions.

	const triangleArea = (1 / 2) * triangle.base * triangle.height;
	const circleArea = Math.PI * Math.pow(circle.diameter / 2, 2);
	const rectangleArea = rectangle.width * rectangle.height;

	const areas = [triangleArea, circleArea, rectangleArea];
	const totalArea = areas.reduce((accumulator, area) => accumulator + area, 0);

	const perfectProportion = 1 / 3;
	const proportions = areas.map((area) => area / totalArea);

	const beautyScores = proportions.map((proportion) => {
		const discrepancy =
			(Math.abs(proportion - perfectProportion) / perfectProportion) * 100;
		return 100 - discrepancy;
	});

	const beautyScore =
		beautyScores.reduce((accumulator, score) => accumulator + score, 0) /
		beautyScores.length;

	return (
		<ScoreWrapper>
			<h3>Beauty score:</h3>
			<p>{Math.round(beautyScore)}%</p>
		</ScoreWrapper>
	);
};

export default BeautyScore;
