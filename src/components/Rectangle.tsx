import { ChangeEvent, Dispatch, ReactElement, SetStateAction } from "react";
import { StyledRectangle } from "./styles";
import { LabelAndInput, PrimitiveWrapper } from "../styles";

type RectangleProps = {
	width: number;
	setWidth: Dispatch<SetStateAction<number>>;
	height: number;
	setHeight: Dispatch<SetStateAction<number>>;
	showInputs?: boolean;
};

const Rectangle = ({
	width,
	setWidth,
	height,
	setHeight,
	showInputs = true,
}: RectangleProps): ReactElement => {
	const handleWidthChange = (e: ChangeEvent<HTMLInputElement>) => {
		setWidth(+e.target.value);
	};

	const handleHeightChange = (e: ChangeEvent<HTMLInputElement>) => {
		setHeight(+e.target.value);
	};

	if (showInputs)
		return (
			<PrimitiveWrapper>
				<StyledRectangle width={width} height={height} />

				{showInputs && (
					<>
						<LabelAndInput>
							<label>Width:</label>
							<input
								type="number"
								value={width}
								onChange={handleWidthChange}
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
								placeholder="e.g., 100"
								min="0"
								max="100"
							/>
						</LabelAndInput>
					</>
				)}
			</PrimitiveWrapper>
		);
	else return <StyledRectangle width={width} height={height} />;
};

export default Rectangle;
