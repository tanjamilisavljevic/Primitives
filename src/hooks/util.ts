import html2canvas from "html2canvas";
import useDownloadArt from "./useDownloadArt";

const saveArt = (elementId: string) => {
	const element = document.getElementById(elementId);
	element &&
		html2canvas(element).then((canvas) => {
			canvas.toBlob((blob) => {
				const formData = new FormData();
				blob && formData.append("image", blob, "art.png");

				useDownloadArt(formData);
			});
		});
};

export default saveArt;
