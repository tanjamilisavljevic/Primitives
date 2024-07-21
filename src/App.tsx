import Rectangle from "./components/Rectangle";
import Triangle from "./components/Triangle";
import Circle from "./components/Circle";
import BeautyScore from "./components/BeautyScore";
import { useState } from "react";
import { Title, Wrapper, StyledApp } from "./styles";

const App = () => {
	// Would combine all these useStates.
	// Would add checks for the max size not to be over ex. 100.
	const [rectangleWidth, setRectangleWidth] = useState<number>(100);
	const [rectangleHeight, setRectangleHeight] = useState<number>(50);
	const [diameter, setDiameter] = useState<number>(100);
	const [base, setBase] = useState(100);
	const [triangleHeight, setTriangleHeight] = useState(100);

	return (
		<StyledApp>
			<Title>PrimitiveArt</Title>

			<Wrapper>
				<Rectangle
					width={rectangleWidth}
					setWidth={setRectangleWidth}
					height={rectangleHeight}
					setHeight={setRectangleHeight}
				/>
				<Triangle
					base={base}
					setBase={setBase}
					height={triangleHeight}
					setHeight={setTriangleHeight}
				/>
				<Circle diameter={diameter} setDiameter={setDiameter} />
			</Wrapper>
			<BeautyScore
				triangle={{ height: triangleHeight, base: base }}
				circle={{ diameter: diameter }}
				rectangle={{ height: rectangleHeight, width: rectangleWidth }}
			/>
		</StyledApp>
	);
};

export default App;
