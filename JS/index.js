// index.js
function agregarAlCarrito(nombre, precio) {
	// Obtener el carrito almacenado en localStorage
	let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  
	// Agregar el nuevo producto al carrito
	carrito.push({ nombre, precio });
  
	// Actualizar el carrito en localStorage
	localStorage.setItem('carrito', JSON.stringify(carrito));
  
	// Mostrar el total actualizado
	mostrarTotal();
  
	// Opcional: Mostrar un mensaje de éxito o realizar otras acciones
	alert('Producto agregado al carrito');
}
  
// index.js
document.addEventListener('DOMContentLoaded', function () {
	// Llamar a la función al cargar la página para mostrar la cantidad actual
	actualizarCantidadCarrito();
	mostrarCarrito();
  });
  
  function actualizarCantidadCarrito() {
	// Obtener el carrito almacenado en localStorage
	let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  
	// Obtener el elemento donde se mostrará la cantidad
	let cantidadCarrito = document.getElementById('cantidad-carrito');
  
	// Actualizar la cantidad en el ícono del carrito
	cantidadCarrito.textContent = carrito.length.toString();
  
}

//cambios
function mostrarCarrito() {
	let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
	let carritoContainer = document.getElementById('carrito-container');
	let totalContainer = document.getElementById('total-container');
	let total = 0;
  
	carritoContainer.innerHTML = '';
  
	carrito.forEach(function(producto, index) {
	  let productoDiv = document.createElement('div');
	  productoDiv.classList.add('producto-carrito');
	  productoDiv.innerHTML = `
		<img src="./Image/${index + 1}.jpg" alt="Producto">
		<div>
		  <p>Nombre: ${producto.nombre}</p>
		  <p>Precio: Q.${producto.precio.toFixed(2)}</p>
		  <button onclick="eliminarDelCarrito(${index})" id="boton-eliminar">Eliminar</button>
		</div>
	  `;
	  total += producto.precio;
	  carritoContainer.appendChild(productoDiv);
	});
  
	// Almacenar el total en localStorage
	localStorage.setItem('total', total.toFixed(2));
  
	// Mostrar el total
	totalContainer.textContent = `Total: Q.${total.toFixed(2)}`;
  }























