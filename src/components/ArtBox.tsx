import { ReactElement } from "react";
import { StyledArtBox } from "./ArtBoxStyles";

type ArtBoxProps = { children: any };

const ArtBox = ({ children }: ArtBoxProps): ReactElement => {
	return <StyledArtBox>{children}</StyledArtBox>;
};

export default ArtBox;
