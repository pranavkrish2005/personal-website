// creating a typewriting aniamtion for discribing myself


function typeWriter() {
	const descriptionArr = ["Full Stack Developer", "AI/ML enthusiast", "Software Engineer", "Web Developer", "Mobile Developer", "Software Architect"];
	let i = 0;
	let j = 0;
	let isDeleting = false;
	let currentText = '';
	let speed = 100;

	function type() {
		if (i === descriptionArr.length) {
			i = 0;
		}
		const text = descriptionArr[i];
		if (isDeleting) {
			currentText = text.substring(0, j - 1);
			j--;
			speed = 75; // faster delete speed
		} else {
			currentText = text.substring(0, j + 1);
			j++;
			speed = 85; // normal typing speed
		}
		document.getElementById("skills").innerHTML = currentText;
		if (!isDeleting && j === text.length) {
			isDeleting = true;
			speed = 2000; // stop for 5 seconds
		} else if (isDeleting && j === 0) {
			isDeleting = false;
			i++;
			speed = 85; // normal typing speed
		}
		setTimeout(type, speed);
	}

	type();
}

typeWriter();



