import html2canvas from "html2canvas";

const saveArt = (elementId: string) => {
	const element = document.getElementById(elementId);
	element &&
		html2canvas(element).then((canvas) => {
			canvas.toBlob((blob) => {
				const formData = new FormData();
				blob && formData.append("image", blob, "art.png");

				fetch("http://localhost:5000/download-art", {
					method: "POST",
					body: formData,
				})
					.then((response) => response.json())
					.then((data) => {
						console.log("Success:", data);
					})
					.catch((error) => {
						console.error("Error:", error);
					});
			});
		});
};

export default saveArt;
