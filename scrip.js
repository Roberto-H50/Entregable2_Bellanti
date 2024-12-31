const carrito = [];
const productos = [
  { id: 1, nombre: "Producto 1", precio: 2500, stock: 1000 },
  { id: 2, nombre: "Producto 2", precio: 2800, stock: 35 },
  { id: 3, nombre: "Producto 3", precio: 7999, stock: 15 },
  { id: 4, nombre: "Producto 4", precio: 2500, stock: 45},
  { id: 5, nombre: "Producto 5", precio: 2999, stock: 15},
  { id: 6, nombre: "Producto 6", precio: 10390, stock: 25}
];

// Función para agregar un producto al carrito
function agregarAlCarrito(id) {
  const producto = productos.find((p) => (link unavailable) === id);
  if (producto && producto.stock > 0) {
    carrito.push({ id: (link unavailable), nombre: producto.nombre, precio: producto.precio, cantidad: 1 });
    producto.stock--;
    actualizarCarrito();
  } else {
    alert("No hay stock disponible");
  }
}

// Función para actualizar el carrito
function actualizarCarrito() {
  const carritoLista = document.getElementById("carrito-lista");
  carritoLista.innerHTML = "";
  let total = 0;
  carrito.forEach((producto) => {
    const item = document.createElement("li");
    item.textContent = `${producto.nombre} x ${producto.cantidad} = $${producto.precio * producto.cantidad}`;
    carritoLista.appendChild(item);
    total += producto.precio * producto.cantidad;
  });
  document.getElementById("total").textContent = `Total: $${total}`;
}

// Función para pagar
function pagar() {
  const medioPago = document.getElementById("medio-pago").value;
  let total = 0;
  carrito.forEach((producto) => {
    total += producto.precio * producto.cantidad;
  });
  if (medioPago === "efectivo") {
    total *= 0.9; // 10% de descuento
  } else if (medioPago === "tarjeta-credito") {
    total *= 1.1; // 10% de recargo
  }
  alert(`Gracias por su compra. El total es: $${total}`);
  carrito.length = 0; // Limpiar el carrito
  actualizarCarrito();
}

// Eventos
document.getElementById("comprar-1").addEventListener("click", () => agregarAlCarrito(1));
document.getElementById("comprar-2").addEventListener("click", () => agregarAlCarrito(2));
document.getElementById("comprar-3").addEventListener("click", () => agregarAlCarrito(3));
document.getElementById("pagar").addEventListener("click", pagar);