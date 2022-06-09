const controle = document.querySelectorAll('[data-controle]');
const estatisticas = document.querySelectorAll('[data-estatistica]')
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}


controle.forEach( (elemento) =>{
    elemento.addEventListener('click', (evento) =>{
        defineOperacao(evento.target.textContent, evento.target.parentNode)
        atualizaEstatistica(elemento.dataset.peca);
    })
})


function defineOperacao (operacao, divControle)
{
    const labelContador = divControle.querySelector('[data-contador]') 

    if(operacao === '+')
    {
     labelContador.value = parseInt(labelContador.value) + 1;       
    }
    else
    {
        labelContador.value = parseInt(labelContador.value) - 1;
    }
}

function atualizaEstatistica(novaPeca)
{
    estatisticas.forEach(element => {
        var tipoNumero = element.dataset.estatistica;
        element.textContent = parseInt(element.textContent) + pecas[novaPeca][tipoNumero];
    });

}

const robotronImagem = document.querySelector('[data-robotron]');

robotronImagem.addEventListener('click', () =>{
    alteraCor(robotronImagem);
})


function alteraCor(url)
{
    let textoImagem = url.src.split('img/robotron');
    textoImagem = textoImagem[1].split('.png');
    let indice = parseInt(textoImagem[0]);
    if(indice === 6)
    {
        robotronImagem.src = 'img/robotron1.png';
    }
    else
    {
        robotronImagem.src = 'img/robotron'+(indice+1)+'.png';
    }
}