const menuBtn = document.querySelector('#menu-btn')
const navLinks = document.querySelector('.nav-links')

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('abierto')
})

const btnDesplegar = document.querySelector('#btn-desplegar-contacto')
const formularioContacto = document.querySelector('#form-contacto')

btnDesplegar.addEventListener('click', () => {
  formularioContacto.classList.toggle('mostrar')
})

const form = document.querySelector('#form-contacto')
const email = document.querySelector('#email')
const errorEmail = document.querySelector('#error-email')

form.addEventListener('submit', (evento) => {
  errorEmail.textContent = ''

  if (!email.value.includes('@')) {
      evento.preventDefault() 
      errorEmail.textContent = 'Escribe un email válido'
  }
})
