document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    // Função para mostrar o conteúdo da aba
    function showTabContent(tabId) {
        // Remove a classe 'active' de todos os conteúdos
        tabContents.forEach(content => {
            content.classList.remove('active');
        });

        // Adiciona a classe 'active' ao conteúdo correspondente
        const activeContent = document.getElementById(tabId);
        if (activeContent) {
            activeContent.classList.add('active');
        }
    }

    // Função para alternar as abas
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove a classe 'active' de todos os botões
            tabButtons.forEach(btn => btn.classList.remove('active'));

            // Adiciona a classe 'active' ao botão clicado
            button.classList.add('active');

            // Pega o ID da aba e mostra o conteúdo
            const tabId = button.getAttribute('data-tab');
            showTabContent(tabId);
        });
    });

    // Inicializa mostrando a primeira aba (Informações) por padrão
    showTabContent('informacoes');
});