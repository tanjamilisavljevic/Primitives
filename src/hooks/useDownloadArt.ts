const useDownloadArt = (formData: FormData) => {
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
};

export default useDownloadArt;
