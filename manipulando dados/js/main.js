const form = document.getElementById("novoItem")
const lista = document.getElementById("lista")
const itens =  JSON.parse(localStorage.getItem("item")) || []


itens.forEach((item)=>{
    
    const novoItem = document.createElement('li')
    novoItem.classList.add('item')

    const numeroItem = document.createElement('strong')
    numeroItem.innerHTML = item["quantidade"]

    novoItem.appendChild(numeroItem)
    novoItem.innerHTML += item["nome"]

    lista.appendChild(novoItem)
    

})


form.addEventListener("submit", (evento)=> {
    evento.preventDefault()

    const nome = evento.target.elements['nome']
    const quantidade = evento.target.elements['quantidade']

    criaElemento(nome.value, quantidade.value)

    nome.value = ""
    quantidade.value = ""
})


function criaElemento(nome, quantidade) {
    

    //<li class="item"><strong>7</strong>Camisas</li>
    const novoItem = document.createElement('li')
    novoItem.classList.add('item')

    const numeroItem = document.createElement('strong')
    numeroItem.innerHTML = quantidade

    novoItem.appendChild(numeroItem)
    novoItem.innerHTML += nome

    lista.appendChild(novoItem)

    const itemAtual = {
        "nome":nome,
        "quantidade": quantidade
    }

    itens.push(itemAtual)
    localStorage.setItem("item", JSON.stringify(itens))
    


}