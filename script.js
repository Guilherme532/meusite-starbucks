const copo = document.querySelector('.copo');
const botoesMenu = document.querySelectorAll('.botao-menu');
const circulo = document.querySelector('.circulo');

// Array com os caminhos das novas imagens que você deseja mostrar
const imagensGrandes = [
    'img/img1.png', // Imagem correspondente ao botão 1
    'img/img2.png', // Imagem correspondente ao botão 2
    'img/img3.png'  // Imagem correspondente ao botão 3
];

// Define as cores correspondentes para cada imagem
const cores = ['#017143', '#ffc4d8', '#ff00ff']; // Ajuste as cores conforme necessário

botoesMenu.forEach((botao, index) => {
    botao.addEventListener('mouseenter', function() {
        // Troca a imagem principal usando a nova imagem do array
        copo.src = imagensGrandes[index]; // Muda para a imagem correspondente

        // Altera a cor do círculo
        circulo.style.backgroundColor = cores[index]; // Muda a cor com base no índice
    });
});
