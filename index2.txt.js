const foto = document.querySelector("#foto")
const preco = document.querySelector("#preco")
const frm = document.querySelector("form")


let valor = 10
frm.mocrete.addEventListener("click", () => {
    valor = 90
    formataValor()
    foto.src = "mocrete.png"
    frm.barbecue.checked = false
    frm.maionese.checked = false
    frm.entrega.checked = false



})


frm.biruti.addEventListener("click", () => {
    valor = 10
    formataValor()
    foto.src = "dagos.png"
    frm.barbecue.checked = false
    frm.maionese.checked = false
    frm.entrega.checked = false



})

frm.floter.addEventListener("click", () => {
    valor = 45
    formataValor()
    foto.src = "floter.png"
    frm.barbecue.checked = false
    frm.maionese.checked = false
    frm.entrega.checked = false



})
frm.entrega.addEventListener("click", () => {
    if (frm.entrega.checked) {
        valor = valor + 10
    } else {
        valor = valor - 10
    }
    formataValor()
})
frm.maionese.addEventListener("click", () => {
    if (frm.maionese.checked) {
        valor = valor + 7
    } else {
        valor = valor - 7
    }
    formataValor()
})

frm.barbecue.addEventListener("click", () => {
    if (frm.barbecue.checked) {
        valor = valor + 5
    } else {
        valor = valor - 5
    }
    formataValor()
})

function formataValor() {
    preco.innerText = valor.toLocaleString("pt-br", { minimumFractionDigits: 2 })
}