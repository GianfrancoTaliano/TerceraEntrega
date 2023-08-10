class Producto {
    
    constructor(id, producto, marca, stock , precio){
        this.id = id
        this.producto= producto
        this.marca= marca
        this.stock= stock
        this.precio= precio
        this.cantidad = 0
    }
}

const paleta1 = new Producto (0 , "Paleta Super", "Wilson" , 5 , 10000 )
const paleta2 = new Producto (1 , "Paleta Increible", "Pepe" , 7 , 20000 )
const paleta3 = new Producto (2 , "Paleta Estelar", "Rock" , 4 , 4000 )
const paleta4 = new Producto (3 , "Paleta Maravilla", "Trazor" , 8 , 1200 )

let produc = [paleta1, paleta2, paleta3 , paleta4]

let carrito = [];
console.table(produc) ;

