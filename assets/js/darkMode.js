const pageContent = document.getElementsByClassName("page-content")[0];
const dogToggle = document.getElementById("dogFriendly");

if (pageContent && dogToggle) {
	const checkboxArray = dogToggle.getElementsByClassName("checkbox");

	if (checkboxArray.length > 0) {
		const checkbox = checkboxArray[0];
		let darkMode = false;

		checkbox.onchange = () => {
			darkMode = !darkMode;

			if (darkMode) {
				pageContent.style.backgroundImage = `url("./assets/img/bone.png")`;
			} else {
				pageContent.style.backgroundImage = "none";
			}
		};
	}
}
