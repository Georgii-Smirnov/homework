const modal = document.querySelector('.modal');
const openBtn = document.querySelector('.btn-open');
const closeBtn = document.querySelector('.modal__close-btn');
const body = document.body

const openModal = () => {
  modal.classList.add('modal--open');
  body.classList.add('body--fixed')
}
const closeModal = () => {
  modal.classList.remove('modal--open');
  body.classList.remove('body--fixed')
}

openBtn.addEventListener('click', openModal)
closeBtn.addEventListener('click', closeModal)

window.onclick = (event) => {
  if (event.target === modal) {
    closeModal()
  }
};
document.addEventListener('keydown', event => {
  if (event.code == 'Escape' && modal.classList.contains('modal--open')) {
    modal.classList.toggle('modal--open')
  }
})