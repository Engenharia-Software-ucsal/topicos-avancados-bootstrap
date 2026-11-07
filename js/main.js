// DevTech Academy - Interactive scripts

document.addEventListener('DOMContentLoaded', () => {
  // Bootstrap Form Validation (needs-validation)
  const forms = document.querySelectorAll('.needs-validation');

  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      } else {
        event.preventDefault();
        // Feedback de sucesso simulado
        const successAlert = document.getElementById('formSuccessAlert');
        if (successAlert) {
          successAlert.classList.remove('d-none');
          form.reset();
          form.classList.remove('was-validated');
          return;
        }
      }
      form.classList.add('was-validated');
    }, false);
  });
});
