const toggleButton = document.getElementById('toggle-button');
const overlay = document.getElementById('overlay');
const menu = document.getElementById('menu');
const body = document.body;

toggleButton.addEventListener('click', function () {

    if (body.classList.contains('open')) {
        body.classList.remove('open');
    } else {
        body.classList.add('open');
    }
});

overlay.addEventListener('click', function () {
    body.classList.remove('open');
});


document.addEventListener('alpine:init', () => {
    Alpine.data('formValidation', formValidation);
});


function formValidation() {
    return {
        formData: {
            name: '',
            email: '',
            subject: '',
            message: ''
        },
        showAlert: false,
        validateForm() {
            if (!this.formData.name || !this.formData.email || !this.formData.subject || !this.formData.message) {
                this.showAlert = true;
            } else {
                this.showAlert = false;

                alert('Formulaire soumis avec succès !');
            }
        }
    }
}


