
  
const frm1 = document.querySelector("form")
const lista = document.querySelector("ol")
const clienteAtende = document.querySelector("#spanAtende")


const cliente = []

function mostracliente() {
  let resposta = ""

  for (let i = 0; i < cliente.length; i++) {
    resposta = resposta + "<li>" + cliente[i] + "</li>"
  }

  lista.innerHTML = resposta
}

frm1.addEventListener("submit", (e) => {
  e.preventDefault() 

  const nome = frm1.nome.value

  
  cliente.push(nome)

  mostracliente()

  frm1.reset()

  
  frm1.nome.focus()
})





frm1.btAtender.addEventListener("click", function()  {
    location.reload();



  

 

 
});
