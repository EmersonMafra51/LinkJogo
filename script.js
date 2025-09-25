
  const button = document.getElementById('playButton');
  const container = document.getElementById('gameContainer');

  button.addEventListener('click', () => {
    // Cria o iframe do embed do itch.io
    const iframe = document.createElement('iframe');
    iframe.src = "https://itch.io/embed/2646330"; // link do embed, não da página do jogo
    iframe.frameBorder = "0";
    iframe.allowFullscreen = true;

    container.appendChild(iframe);

    // Mostra o container e esconde o botão
    container.style.display = 'block';
    button.style.display = 'none';
  });

