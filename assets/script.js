// Função para copiar exemplos
document.querySelectorAll('.example-item').forEach(item => {
    item.addEventListener('click', () => {
        const textarea = document.getElementById('mensagem');
        textarea.value = item.textContent;
        textarea.focus();
        
        // Feedback visual
        const originalText = item.textContent;
        item.textContent = 'Copiado!';
        item.style.backgroundColor = '#e6ffed';
        
        setTimeout(() => {
            item.textContent = originalText;
            item.style.backgroundColor = '';
        }, 1000);
    });
});

// Enter dentro do textarea também envia (sem quebra de linha)
document.getElementById('mensagem').addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        e.preventDefault(); // Impede quebra de linha
        document.getElementById('feedbackForm').requestSubmit(); // Envia o formulário
    }
});

// Análise de sentimento
document.getElementById('feedbackForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const mensagem = document.getElementById('mensagem').value.trim();
    const resultadoDiv = document.getElementById('resultado');
    const button = document.querySelector('button');
    
    if (!mensagem) {
        resultadoDiv.className = '';
        resultadoDiv.textContent = 'Por favor, digite uma mensagem.';
        return;
    }

    button.disabled = true;
    button.textContent = 'Analisando...';
    
    try {
        // Limpa classes anteriores e adiciona a nova
        resultadoDiv.className = '';
        
        const response = await fetch('http://localhost:8000/predict', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ mensagem })
        });

        const data = await response.json();

        resultadoDiv.classList.add(data.sentimento.toLowerCase());
        
        resultadoDiv.textContent = `Sentimento: ${data.sentimento}`;
        
    } catch (error) {
        resultadoDiv.className = '';
        resultadoDiv.textContent = 'Erro na análise. Tente novamente.';
        console.error('Erro:', error);
    } finally {
        button.disabled = false;
        button.textContent = 'Analisar';
    }
});
