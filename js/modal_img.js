const myModal = new HystModal({
	linkAttributeName: 'data-hystmodal',
});

const modalElements = document.querySelectorAll('[data-hystmodal]');
const modal = document.getElementById('myModal');

modalElements.forEach(el => {
	el.addEventListener('click', (e) => {
		let self = e.currentTarget;
		let id = self.dataset.id;

		let currentObj = null //setData[id - 1];

		if (currentObj) {
			modal.querySelector('.modal-img').setAttribute('src', currentObj.src);
			modal.querySelector('.autor-name').textContent = currentObj.autor;
		} else {
			//modal.querySelector('.modal-img').setAttribute('src', currentObj.src);
			modal.querySelector('.autor-name').textContent = 'Заглушка';
		}
	});
});