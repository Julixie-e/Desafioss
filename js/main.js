
let titulo =document.getElementById ("titulo")
titulo.style.color = "red";
titulo.style.fontSize = "24px";

const productos = [ "Camisa", "Zapatillas", "Bufanda", "Gorra", "Pantalón" ];

for (const producto of productos) {    
const h2 = document.createElement ("h2")
h2.innerHTML = producto;
document.body.appendChild (h2)
}

