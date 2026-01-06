  function filtrar(categoria) {
        const cards = document.querySelectorAll('.projeto-card-bento');
        const botoes = document.querySelectorAll('.filter-btn');

        botoes.forEach(btn => {
            btn.classList.remove('active');
            if (btn.innerText.toLowerCase() === categoria || (categoria === 'todos' && btn.innerText === 'Todos')) {
                btn.classList.add('active');
            }
        });

        cards.forEach(card => {
            const categoriaCard = card.getAttribute('data-category');
            
            if (categoria === 'todos' || categoriaCard === categoria) {
                card.style.display = 'block';
                card.style.opacity = '0';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transition = 'opacity 0.3s ease';
                }, 10);
            } else {
                card.style.display = 'none';
            }
        });
}
