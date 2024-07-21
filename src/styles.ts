import styled from "styled-components";

export const StyledApp = styled.div`
	width: 100vw;
	display: grid;
	grid-template-rows: 1fr 3fr 1fr;
	justify-items: center;
`;

export const Wrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
`;

export const Title = styled.h3`
	text-align: center;
	margin-bottom: 2rem;
`;

export const PrimitiveWrapper = styled.div`
	display: grid;
	grid-template-rows: 4fr 1fr 1fr;
	justify-items: center;
	gap: 0.5rem;

	> :first-child {
		margin-bottom: 1rem;
	}
`;

export const LabelAndInput = styled.div`
	display: grid;
	gap: 1rem;
	grid-template-columns: 1fr 2fr;
	height: 1rem;

	input {
		width: 7rem;
	}
`;

export const ScoreWrapper = styled.div`
	display: flex;
	align-items: center;
	p {
		margin-left: 0.5rem;
	}
`;
