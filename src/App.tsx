import Rectangle from "./components/Rectangle";
import Triangle from "./components/Triangle";
import Circle from "./components/Circle";
import BeautyScore from "./components/BeautyScore";
import { useState } from "react";
import { Title, Wrapper, StyledApp, Button } from "./styles";
import ArtBox from "./components/ArtBox";
import { Rnd } from "react-rnd";
import saveArt from "./hooks/saveArt";

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
			<ArtBox id="art">
				<Rnd
					default={{
						x: 20,
						y: 20,
						width: rectangleWidth,
						height: rectangleHeight,
					}}
				>
					<Rectangle
						width={rectangleWidth}
						setWidth={setRectangleWidth}
						height={rectangleHeight}
						setHeight={setRectangleHeight}
						showInputs={false}
					/>
				</Rnd>
				<Rnd
					default={{
						x: 50,
						y: 50,
						width: base,
						height: triangleHeight,
					}}
				>
					<Triangle
						base={base}
						setBase={setBase}
						height={triangleHeight}
						setHeight={setTriangleHeight}
						showInputs={false}
					/>
				</Rnd>
				<Rnd
					default={{
						x: 80,
						y: 80,
						width: diameter,
						height: diameter,
					}}
				>
					<Circle
						diameter={diameter}
						setDiameter={setDiameter}
						showInputs={false}
					/>
				</Rnd>
			</ArtBox>
			<Button onClick={() => saveArt("art")}>Save</Button>
		</StyledApp>
	);
};

export default App;
