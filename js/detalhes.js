
const url = window.location.href;

const urlObj = new URL(url);

// Use URLSearchParams para extrair parâmetros
const params = new URLSearchParams(urlObj.search);

const id = params.get('id');

const voltar = document.getElementById("voltar")
voltar.addEventListener('click'
    , () => {
        window.location.href = "/pages/jogadores_page.html";
    }
)


async function cria_detalhe() {
    const jogador = await fetchData(id)

    const img = document.getElementById("img")
    img.src = jogador.imagem

    const nome_atleta = document.getElementById("nome_atleta")
    const posicao_atleta = document.getElementById("posicao_atleta")
    const nascimento_atleta = document.getElementById("nascimento_atleta")
    const altura_atleta = document.getElementById("altura_atleta")
    const jogos_atleta = document.getElementById("jogos_atleta")
    const nacionalidade_atleta = document.getElementById("nacionalidade_atleta")
    const descricao_atleta = document.getElementById("descricao_atleta")

    nome_atleta.textContent = "Nome: " + jogador.nome;
    posicao_atleta.textContent = "Posição: " + jogador.posicao;
    nascimento_atleta.textContent = "Data de Nascimento: " + jogador.nascimento;
    altura_atleta.textContent = "Altura: " + jogador.altura;
    jogos_atleta.textContent = "Jogos: " + jogador.n_jogos;
    nacionalidade_atleta.textContent = "Nacionalidade: " + jogador.nacionalidade;
    descricao_atleta.textContent = "Descrição: " + jogador.detalhes;


}

cria_detalhe()


async function fetchData(id) {
    const url = 'https://botafogo-atletas.mange.li/2024-1/' + id;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Erro na requisição: ' + response.statusText);
        }
        const data = await response.json();
        console.log(data)
        return data

    } catch (error) {
        console.error('Erro ao buscar dados:', error);
    }
}
