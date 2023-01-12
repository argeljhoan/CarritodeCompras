// Carrito
// #1 BASE DE DATOS
const db = [
  {
    id: 1,
    nombre: 'Nike Doradas',
    descripcion: 'Dorado combinacion blanco y negro',
    precio: 260000.00,
    imagen: './assets/img/zapatilladoradaNike.webp',
    categoria: 'Nike',
    cantidad: 10
  },
  {
    id: 2,
    nombre: 'Nike Air Max 96',
    descripcion: 'Air Max Color Azul y Blanco',
    precio: 200000,
    imagen: './assets/img/nike-air-max-90-mujer-y-hombre-color-blanco-rojo.jpg',
    categoria: 'Nike',
    cantidad: 10
  },
  {
    id: 3,
    nombre: 'Nike Deportivo Casual',
    descripcion: 'Combinacion Negro y Hueso con franja Amarillo',
    precio:300000,
    imagen: './assets/img/deportivoCasual.jpg',
    categoria: 'Nike',
    cantidad: 13
  },
  {
    id: 4,
    nombre: 'Nike Jordan',
    descripcion: 'Azul Turquesa',
    precio: 150000,
    imagen: './assets/img/azulclaronike.jpg',
    categoria: 'Nike',
    cantidad: 16
  },
  {
    id: 5,
    nombre: 'Nike Botines',
    descripcion: 'Botines Combinacion Negro y Blanco',
    precio: 180000,
    imagen: './assets/img/botasNike.jpg',
    categoria: 'Nike',
    cantidad: 24
  },
  {
    id: 6,
    nombre: 'Vans',
    descripcion: 'Vans Tradicionales',
    precio: 210000,
    imagen: './assets/img/vans.webp',
    categoria: 'Vans',
    cantidad: 20
  },
  {
    id: 7,
    nombre: 'Adidas SUPERSTAR',
    descripcion: 'SUPERSTAR Tradicionales',
    precio: 180000,
    imagen: './assets/img/superstar.webp',
    categoria: 'Adidas',
    cantidad: 14
  },
  {
    id: 8,
    nombre: 'Adidas Sneaker',
    descripcion: 'Blanco con color Hueso',
    precio: 210000,
    imagen: './assets/img/sneakers.jpeg',
    categoria: 'Adidas',
    cantidad: 18
  },
  {
    id: 9,
    nombre: 'Puma COOL',
    descripcion: 'Negros con planta Blanca',
    precio:160000,
    imagen: './assets/img/coolpuma.jpg',
    categoria: 'Puma',
    cantidad: 15
  },
  {
    id: 9,
    nombre: 'Puma Platanitos',
    descripcion: 'Combinacion de Colores Geniales',
    precio:190000,
    imagen: './assets/img/platanitos.jpg',
    categoria: 'Puma',
    cantidad: 15
  }
]

// #2 Pintar los productos en el DOM
const productos = db

function pintarProductos() {
  for (let { id, nombre, precio, cantidad } of productos) {
    console.log(id, nombre, 'price', precio, 'qty:', cantidad)
  }
}

console.log('#1 pintando productos')
pintarProductos()

// #3 Carrito
let carrito = []

console.log('#Creando el carrito')

// #4 agregar al carrito
function agregarCarrito(id, cantidad = 1) {
  const productoEncontrado = productos.find((p) => p.id === id)

  if (productoEncontrado && productoEncontrado.cantidad > 0) {
    const articuloEncontrado = carrito.find((p) => p.id === id)

    if (articuloEncontrado) {
      if (checarStock(id, cantidad + articuloEncontrado.cantidad)) {
        articuloEncontrado.cantidad++
      } else {
        window.alert('No hay stock suficiente')
      }
    } else {
      carrito.push({ id: productoEncontrado.id, cantidad })
    }
  } else {
    window.alert('Producto agotado')
  }
}

console.log('Agregando productos')
agregarCarrito(5)
agregarCarrito(5)
agregarCarrito(5)
agregarCarrito(5)
agregarCarrito(5)
agregarCarrito(5)
agregarCarrito(2)
agregarCarrito(1)
agregarCarrito(1)
agregarCarrito(1)
agregarCarrito(1)
agregarCarrito(1)

function checarStock(id, cantidad) {
  const producto = productos.find((p) => p.id === id)

  return producto.cantidad - cantidad >= 0
}

// #5 remover articulos
function removerDelCarrito(id, cantidad = 1) {
  const articulo = carrito.find((p) => p.id === id)

  if (articulo && articulo.cantidad - cantidad > 0) {
    articulo.cantidad--
  } else {
    carrito = carrito.filter((p) => p.id !== id)
  }
}

console.log('Removiendo uno por uno del carrito')
removerDelCarrito(1)

// #6 Eliminar del carrito
function eliminarDelCarrito(id) {
  console.log(id)
  const articulo = carrito.find((p) => p.id === id)
  const findIndex = carrito.indexOf(articulo)

  carrito.splice(findIndex, 1)
}

console.log('Eliminando un producto del carrito')
eliminarDelCarrito(5)

// #7 Contar Articulos
function contadorDeArticulos() {
  let suma = 0

  for (let articulo of carrito) {
    suma += articulo.cantidad
  }

  return suma
}

// #8 El total
function obtenerTotal() {
  let suma = 0

  for (let articulo of carrito) {
    const producto = productos.find(p => p.id === articulo.id)

    suma += producto.precio * articulo.cantidad
  }

  return suma
}

// #9 Limpiar carrito
function limpiarCarrito() {
  carrito = []
}

// limpiarCarrito()

// #10 Comparar
function comprar() {
  for (let articulo of carrito) {
    const producto = productos.find(p => p.id === articulo.id)

    producto.cantidad -= articulo.cantidad
  }
  console.log('Productos actualizados')
  pintarProductos()
}


console.log('#Carrito:', carrito)
console.log('Total a pagar:', obtenerTotal())
console.log('Cantidad de articulos agregados al carrito:', contadorDeArticulos())

comprar()