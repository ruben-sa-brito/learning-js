const form = document.getElementById("novoItem")
const lista = document.getElementById("lista")
const itens =  JSON.parse(localStorage.getItem("item")) || []


itens.forEach((item)=>{

    criaElemento(item)

})


form.addEventListener("submit", (evento)=> {
    evento.preventDefault()

    const nome = evento.target.elements['nome']
    const quantidade = evento.target.elements['quantidade']
    

    const itemAtual = {
        "nome":nome.value,
        "quantidade": quantidade.value
    }

    itens.push(itemAtual)
    localStorage.setItem("item", JSON.stringify(itens))

    criaElemento(itemAtual)

    nome.value = ""
    quantidade.value = ""
})


function criaElemento(itemAtual) {
    

    //<li class="item"><strong>7</strong>Camisas</li>
    const novoItem = document.createElement('li')
    novoItem.classList.add('item')

    const numeroItem = document.createElement('strong')
    numeroItem.innerHTML = itemAtual.quantidade

    novoItem.appendChild(numeroItem)
    novoItem.innerHTML += itemAtual.nome

    lista.appendChild(novoItem)

    


}