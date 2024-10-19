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

function formValidation() {
    return {
        formData: {
            name: '',
            email: '',
            subject: '',
            message: ''
        },
        showAlert: false,
        alertMessage: '',

        validateForm() {

            if (!this.formData.name || !this.formData.email || !this.formData.subject || !this.formData.message) {
                this.alertMessage = "Tous les champs sont obligatoires.";
                this.showAlert = true; 
            } else {
                this.alertMessage = "Formulaire envoyé avec succès.";
                this.showAlert = true;
            }
            console.log('showAlert:', this.showAlert);
        },

        closeAlert() {
            console.log("Close button clicked!");  
            this.showAlert = false;  
        }
    }
}
document.addEventListener('alpine:init', () => {
    Alpine.data('formValidation', formValidation);
});
