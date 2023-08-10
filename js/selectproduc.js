let totalCarrito;
let cantidadSeleccionada;

function obtenerProductoSeleccionado(productosDisponibles) {
    let seguirAgregando = true;

    while (seguirAgregando) {
        let msgproctnames = "";
        produc.forEach((produc, i) => (msgproctnames += `${i} ${produc.marca}\n`));

        let eleccion = parseInt(prompt("Seleccione su paleta:\n" + msgproctnames));

        let existeEnElCarrito = carrito.find(producto => producto.id === eleccion);

        if (existeEnElCarrito) {
            cantidadSeleccionada = parseInt(prompt("Cuantas paletas quiere llevar"));
            existeEnElCarrito.cantidad += cantidadSeleccionada;
        } else {
            let productoSeleccionado = produc.find(producto => producto.id === eleccion);
            cantidadSeleccionada = parseInt(prompt("Cuantas paletas quiere llevar"));
            productoSeleccionado.cantidad = cantidadSeleccionada;
            carrito.push(productoSeleccionado);
        }

        totalCarrito = carrito.reduce((acc, producto) => acc + producto.precio * producto.cantidad, 0);
        console.log(totalCarrito);

        const agregarOtraPaleta = prompt("Deseas agregar otra paleta? (s/n)").toLowerCase();
        seguirAgregando = agregarOtraPaleta === "s";
    }

    console.table(carrito);
    totalCarrito = carrito.reduce((acc, producto) => acc + producto.precio * producto.cantidad, 0);
    console.log("Total Carrito: " + totalCarrito);
}

obtenerProductoSeleccionado(produc);