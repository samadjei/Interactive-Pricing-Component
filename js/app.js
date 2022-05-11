const number = document.querySelectorAll('.feedback-number');
let selectedBtn = document.querySelector('.feedback-bg');
let feedbackSelected = document.querySelector('.feedback-selected');
const start = document.querySelector('.start');
const success = document.querySelector('.success');
const button = document.querySelector('.button');
const ratingNumber = document.querySelector('.rating-number');

let selected;

number.forEach((input) => {
	input.addEventListener('click', (e) => {
		selected = e.target.textContent;

		number.forEach((input) => {
			input.classList.remove('active');
		});
		input.classList.add('active');
	});
});

button.addEventListener('click', () => {
	ratingNumber.textContent = selected;
	start.style.display = 'none';
	success.style.display = 'block';
});
