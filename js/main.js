
let titulo =document.getElementById ("titulo")
titulo.style.color = "red";
titulo.style.fontSize = "24px";

const productos = [ "Camisa", "Zapatillas", "Bufanda", "Gorra", "Pantalón" ];

for (const producto of productos) {  
    
const contenedorProducto = document.createElement ("div")
const h2 = document.createElement ("h2")

h2.innerHTML = producto;
document.body.appendChild (h2)



let boton = document.createElement("button");

boton.innerHTML = "Agregar al carrito";

boton.id = "boton-" + producto.toLowerCase().replace(" ", "-");


boton.addEventListener ("click",function() {

    boton.innerHTML = "agregado";
    
    let mensaje = document.createElement ( "h3")
    mensaje.textContent = " Agregado";

    contenedorProducto.appendChild (mensaje)

}

)
contenedorProducto.appendChild (boton);

document.body.appendChild(contenedorProducto)

}




