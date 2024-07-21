import { ChangeEvent, Dispatch, ReactElement, SetStateAction } from "react";
import { StyledTriangle } from "./styles";
import { LabelAndInput, PrimitiveWrapper } from "../styles";

type TriangleProps = {
	base: number;
	setBase: Dispatch<SetStateAction<number>>;
	height: number;
	setHeight: Dispatch<SetStateAction<number>>;
	showInputs?: boolean;
};

const Triangle = ({
	base,
	setBase,
	height,
	setHeight,
	showInputs = true,
}: TriangleProps): ReactElement => {
	const handleBaseChange = (e: ChangeEvent<HTMLInputElement>) => {
		setBase(+e.target.value);
	};

	const handleHeightChange = (e: ChangeEvent<HTMLInputElement>) => {
		setHeight(+e.target.value);
	};

	if (showInputs) {
		return (
			<PrimitiveWrapper>
				<StyledTriangle base={base} height={height}></StyledTriangle>

				<LabelAndInput>
					<label>Base:</label>
					<input
						type="number"
						value={base}
						onChange={handleBaseChange}
						placeholder="e.g., 150"
						min="0"
						max="100"
					/>
				</LabelAndInput>

				<LabelAndInput>
					<label>Height:</label>
					<input
						type="number"
						value={height}
						onChange={handleHeightChange}
						placeholder="e.g., 150"
						min="0"
						max="100"
					/>
				</LabelAndInput>
			</PrimitiveWrapper>
		);
	} else return <StyledTriangle base={base} height={height}></StyledTriangle>;
};

export default Triangle;
