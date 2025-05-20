function mostrarMensagem(event) {
    event.preventDefault(); 

    const msg = document.getElementById('mensagem-sucesso');
    msg.style.display = 'block';

    
    setTimeout(() => {
        msg.style.display = 'none';
    }, 4000);

    
    const form = document.querySelector('.formulario');
    form.reset();
}



