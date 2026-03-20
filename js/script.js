//como posso pegar o classe html no js

const container = document.getElementById('container')


function exibir() {
    const cardDiv = document.createElement('div')
    cardDiv.className = "divCard"
    container.appendChild(cardDiv)

    // const texto = document.createElement('p')
    // texto.textContent = "nilo"
    // texto.className = "textoImagem"
    // texto.id = " textoImagem"

    const div1 = document.createElement('div')
    // 
    const texto1 = document.createElement('h3')
    texto1.textContent = "Astronalta"
    // 
    const imagem1 = document.createElement('img')
    imagem1.src = '../img/image1.png'
    // 
    div1.appendChild(texto1)
    div1.appendChild(imagem1)

    const div2 = document.createElement('div')
    // 
    const texto2 = document.createElement('h3')
    texto2.textContent = "Jupter"
    // 
    const imagem2 = document.createElement('img')
    imagem2.src = '../img/image2.png'
    // 
    div2.appendChild(texto2)
    div2.appendChild(imagem2)

    const div3 = document.createElement('div')
    //  
    const texto3 = document.createElement('h3')
    texto3.textContent = "poeira cósmica"
    // 
    const imagem3 = document.createElement('img')
    imagem3.src = '../img/image3.png'
    // 
    div3.appendChild(texto3)
    div3.appendChild(imagem3)

    // const botao = document.createElement("button")
    // botao.textContent = 'enviar'
   // cardDiv.appendChild(botao)
    //cardDiv.appendChild(texto)
    cardDiv.appendChild(div1)
    cardDiv.appendChild(div2)
    cardDiv.appendChild(div3)

}
exibir()