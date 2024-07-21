import { ReactElement } from "react";
import { StyledArtBox } from "./ArtBoxStyles";

type ArtBoxProps = { children: any; id: string };

const ArtBox = ({ children, id }: ArtBoxProps): ReactElement => {
	return <StyledArtBox id={id}>{children}</StyledArtBox>;
};

export default ArtBox;
