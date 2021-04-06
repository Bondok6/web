'use strict';

const btnModel = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModel = document.querySelector('.close-modal');

const openModal = () => {
	modal.classList.remove('hidden');
	overlay.classList.remove('hidden');
};

const closeModal = () => {
	modal.classList.add('hidden');
	overlay.classList.add('hidden');
};

btnModel.forEach((btn) => {
	btn.addEventListener('click', openModal);
});

btnCloseModel.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', (e) => {
	if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
		closeModal();
	}
});
