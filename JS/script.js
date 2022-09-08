const inputSenha = document.querySelector('#senha');
const btnMostrarSenhaEocultarSenha = document.querySelector('#show-hide');

let show = false;

btnMostrarSenhaEocultarSenha.addEventListener('click', (e) => {

    if (!show) {
        inputSenha.setAttribute('type', 'text');
        btnMostrarSenhaEocultarSenha.style.backgroundImage = "url('../assets/images/eye.svg')"
        show = true
    } else {
        inputSenha.setAttribute('type', 'password');
        btnMostrarSenhaEocultarSenha.style.backgroundImage = "url('../assets/images/close-eye.svg')"
        
        show = false
    }
})