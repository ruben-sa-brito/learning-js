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
    const existe = itens.find(elemento => elemento.nome === nome.value)
    

    if (existe) {
        const index = itens.indexOf(existe)
        
        itens[index].quantidade = parseInt(quantidade.value) + parseInt(itens[index].quantidade)
        
        const elements = document.querySelectorAll('.item')
        const numeroItem = document.createElement('strong')
        numeroItem.innerHTML = itens[index].quantidade
        elements[index].innerHTML = ''
        elements[index].appendChild(numeroItem)
        elements[index].innerHTML += itens[index].nome  

        localStorage.setItem("item", JSON.stringify(itens))

    } else {
        const itemAtual = {
            "nome":nome.value,
            "quantidade": quantidade.value
        }
    
        itens.push(itemAtual)
        localStorage.setItem("item", JSON.stringify(itens))
    
        criaElemento(itemAtual)
    }
    
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