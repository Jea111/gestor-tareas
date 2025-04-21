const parrafoCart = document.querySelector(".producto-cart");
const precioProductoCart = document.querySelector(".precio-cart");
const btnProducto = document.querySelectorAll(".btn-produc");
const carrito = document.querySelector(".cart-shopping");

const carritoProductos = [];

btnProducto.forEach((btn) => {
  btn.addEventListener("click", () => {
    const contenedor = btn.closest(".informacion");

    const descripcion =
      contenedor.querySelector(".descripcion-producto")?.textContent ||
      "Sin nombre";
    const precio = contenedor.querySelector(".precio")?.textContent || "$0";
    const seleccion =
      contenedor.querySelector(".select-menu")?.value || "Sin salsa";

    const producto = {
      nombre: descripcion,
      precio: precio,
      seleccion: seleccion,
      cantidad: 1,
    };

    carritoProductos.push(producto);
    // //alerta para finalizar compra
    // const btnFinalizarCompra = document.querySelector(".finalizarCompra");

    // btnFinalizarCompra.addEventListener("click", () => {
    //   alert(
    //     "producto agregado con éxito" + nombre + precio + "Total: $" + total
    //   );
    // });

    // Actualizar resumen de productos en el carrito
    renderizarCarrito();
  });
});

function renderizarCarrito() {
  // Mostrar productos en texto
  parrafoCart.innerHTML = ""; // Limpiar

  carritoProductos.forEach((prod, index) => {
    const item = document.createElement("h4");
    item.textContent = `${index + 1}. ${prod.nombre} - ${prod.seleccion} - ${
      prod.precio
    }`;
    parrafoCart.appendChild(item);
  });

  // Calcular total
  const total = carritoProductos.reduce((acc, prod) => {
    const num = Number(prod.precio.replace("$", ""));
    return acc + num;
  }, 0);

  precioProductoCart.textContent = "Total: $" + total;
}
