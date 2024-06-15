

let jogadores = []
const container_jogadores = document.getElementById("container_jogadores")

const b_masculino = document.getElementById("masculino")
const b_feminino = document.getElementById("feminino")
const b_all = document.getElementById("all")

b_masculino.addEventListener("click", () => atualiza_jogadores("masculino"))
b_feminino.addEventListener("click", () => atualiza_jogadores("feminino"))
b_all.addEventListener("click", () => atualiza_jogadores("all"))

const b_sair = document.getElementById('sair')
b_sair.addEventListener('click', ()=>{
    window.location.href ="index.html"
})

const pesquisa = document.getElementById("pesquisa")

pesquisa.addEventListener("input", (e) => {
    const jogadores_filtrados = jogadores.filter((jogador) => {
        if (jogador.posicao.toLowerCase().includes(e.target.value.toLowerCase())) {
            return jogador
        }
    })
    cria_lista_jogadores(jogadores_filtrados)
})


async function atualiza_jogadores(tipo_elenco) {
    container_jogadores.innerHTML = "carregando.."
    jogadores = await fetchData(tipo_elenco);

    cria_lista_jogadores(jogadores)
}


async function fetchData(tipo_elenco) {
    const url = 'https://botafogo-atletas.mange.li/2024-1/' + tipo_elenco;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Erro na requisição: ' + response.statusText);
        }
        const data = await response.json();
        return data

    } catch (error) {
        console.error('Erro ao buscar dados:', error);
    }
}

function cria_card_jogador(jogador) {
    const card_jogador = document.createElement("div");
    card_jogador.className = "card_jogador";

    card_jogador.addEventListener('click', ()=>{

        window.location.href = `detalhes.html?id=${jogador.id}`
    })
    const img = document.createElement("img")
    img.src = jogador.imagem
    img.className = "img"

    card_jogador.appendChild(img)

    container_jogadores.appendChild(card_jogador)
}


function cria_lista_jogadores(jogadores) {
    container_jogadores.innerHTML = ""

    jogadores.forEach(jogador => {
        cria_card_jogador(jogador)
    });

}

atualiza_jogadores('all')

