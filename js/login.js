import { hex_sha256 } from './sha256-min.mjs'

const senha_padrao = "f6c60e609dd82e4e510071b23f2cb1573bf11754fa4ef0e9657b39f4e144f0b1"

const input = document.getElementById('senha')
sessionStorage.setItem("logado", "N")

const botao = document.getElementById("entrar")
botao.addEventListener('click', () => {
    let senha_usuario = input.value
    let senha_usuario_hash = hex_sha256(senha_usuario)
    if (senha_usuario_hash === senha_padrao) {
        sessionStorage.setItem("logado", "S")

        window.location.href = "jogadores_page.html"
    } else {
        alert("Senha incorreta. Tente novamente.")
    }


})

