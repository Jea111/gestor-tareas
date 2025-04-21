const botonesCompra = document.querySelectorAll(".btn-produc");
const carrito = [];
const contenedorCarrito = document.getElementById("productoCarrito");
const totalElemento = document.getElementById("toatlPrecio");

function agregarAlCarrito() {
  botonesCompra.forEach((boton) => {
    boton.addEventListener("click", (e) => {
      const producto = e.target.closest(".informacion");
      const nombre = producto.querySelector(
        ".descripcion-producto"
      ).textContent;
      const precioTexto = producto.querySelector(".precio").textContent;
      const precio = parseInt(precioTexto.replace("$", "").trim()); // parsear número
      const salsa = producto.querySelector(".select-menu").value;

      const productoCarrito = {
        nombre,
        precio,
        salsa,
      };

      carrito.push(productoCarrito);

      const divItems = document.createElement("li");
      divItems.innerHTML = `
        <h4>${nombre}</h4>
        <p>Salsa: ${salsa}</p>
        <p>Precio: $${precio}</p>
      `;

      contenedorCarrito.appendChild(divItems);

      // actualizar total
      const total = carrito.reduce((sum, item) => sum + item.precio, 0);
      totalElemento.textContent = total;

      swal("Producto agregado", `${nombre} - $${precio}`, "success");
    });
  });
}

agregarAlCarrito();
