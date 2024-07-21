import { ChangeEvent, Dispatch, ReactElement, SetStateAction } from "react";
import { StyledCircle } from "./styles";
import { LabelAndInput, PrimitiveWrapper } from "../styles";

type CircleProps = {
	diameter: number;
	setDiameter: Dispatch<SetStateAction<number>>;
	showInputs?: boolean;
};

const Circle = ({
	diameter,
	setDiameter,
	showInputs = true,
}: CircleProps): ReactElement => {
	const handleDiameterChange = (e: ChangeEvent<HTMLInputElement>) => {
		setDiameter(+e.target.value);
	};

	if (showInputs) {
		return (
			<PrimitiveWrapper>
				<StyledCircle diameter={diameter} />

				{/* Would make these into a reusable component. */}
				<LabelAndInput>
					<label>Diameter:</label>
					<input
						type="number"
						value={diameter}
						onChange={handleDiameterChange}
						placeholder="e.g., 150"
						min="0"
						max="100"
					/>
				</LabelAndInput>
			</PrimitiveWrapper>
		);
	} else return <StyledCircle diameter={diameter} />;
};

export default Circle;
