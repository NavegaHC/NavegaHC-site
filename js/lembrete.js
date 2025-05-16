document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('frmlembrete');
    const modal = document.getElementById('modal-sucesso');
    const btnFechar = document.getElementById('fechar-modal');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // evita reload da página

        // mostra a modal
        modal.style.display = 'flex';

        // limpa o formulário
        form.reset();
    });

    // fecha modal ao clicar no botão fechar
    btnFechar.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // fecha modal ao clicar fora da caixa de conteúdo
    window.addEventListener('click', function(event) {
        if(event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
