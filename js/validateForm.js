import { getTranslation } from './lang.js';

document.getElementById('contactoForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const form = this;
  const nombre = form.nombre.value.trim();
  const email = form.email.value.trim();
  const mensaje = form.mensaje.value.trim();

  const nombreRegex = /^[A-Za-zÀ-ÿ\s]{1,30}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!nombreRegex.test(nombre)) {
    Swal.fire({
      icon: 'error',
      title: getTranslation('nombreInvalido'),
      text: getTranslation('nombreInvalido')
    });
    return;
  }

  if (!emailRegex.test(email)) {
    Swal.fire({
      icon: 'error',
      title: getTranslation('emailInvalido'),
      text: getTranslation('emailInvalido')
    });
    return;
  }

  if (mensaje.length < 10) {
    Swal.fire({
      icon: 'error',
      title: getTranslation('mensajeCorto'),
      text: getTranslation('mensajeCorto')
    });
    return;
  }

  Swal.fire({
    title: getTranslation('confirmarEnvio'),
    icon: 'question',
    showCancelButton: true,
    confirmButtonText: getTranslation('siEnviar'),
    cancelButtonText: getTranslation('cancelar')
  }).then((result) => {
    if (result.isConfirmed) {
      fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      })
        .then(response => {
          if (response.ok) {
            Swal.fire(getTranslation('gracias'), getTranslation('mensajeEnviado'), 'success');
            form.reset();
          } else {
            Swal.fire('Error', getTranslation('errorEnvio'), 'error');
          }
        })
        .catch(() => {
          Swal.fire('Error', getTranslation('errorConexion'), 'error');
        });
    }
  });
});