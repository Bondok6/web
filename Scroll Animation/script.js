let divEl = document.querySelectorAll(' div');
//console.log(divEl);

function isVisible(el) {
	const elementDiv = el.getBoundingClientRect();
	let distanceFromTop = -300;
	return elementDiv.top - window.innerHeight < distanceFromTop ? true : false;
}

function addScroll() {
	divEl.forEach((el) => {
		if (isVisible(el)) {
			el.classList.add('scroll');
		} else {
			el.classList.remove('scroll');
		}
	});
}

window.addEventListener('scroll', addScroll);
