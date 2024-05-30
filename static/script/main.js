const checkBox = document.getElementById('toggle-theme-checkbox')
const formContainer = document.querySelector('.form-container')
const container = document.querySelector('.container')
const socialButtons = document.querySelector('.social-buttons')
const formHeader = document.querySelector('.form-header')
const passEye = document.getElementById('pass-toggle-icon')

checkBox.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    formContainer.classList.toggle('dark');
    socialButtons.classList.toggle('dark');
    formHeader.classList.toggle('dark');
    passEye.classList.toggle('dark')
    container.classList.remove('scale');
    void container.offsetWidth; 
    container.classList.add('scale'); 
})


const passInput = document.getElementById('password');

passEye.addEventListener('click', () => {
    if (passInput.type === 'password') {
        passInput.type = 'text';
        passEye.classList.remove('fa-eye');
        passEye.classList.add('fa-eye-slash');
    } else {
        passInput.type = 'password';
        passEye.classList.remove('fa-eye-slash');
        passEye.classList.add('fa-eye');
    }
})

