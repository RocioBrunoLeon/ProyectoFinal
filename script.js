let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
actualizarContadorCarrito();

document.addEventListener('DOMContentLoaded', () => {
  const botones = document.querySelectorAll('.carrito');
  botones.forEach(btn => {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      const contenedor = btn.closest('.producto');
      const nombre = contenedor.querySelector('span').innerText;
      const precio = contenedor.querySelector('h4').innerText;
      const imagen = contenedor.querySelector('img').src;
      agregarProductoAlCarrito(nombre, precio, imagen);
    });
  });

  const abrirCarritoBtn = document.getElementById('abrir-carrito');
  const cerrarCarritoBtn = document.getElementById('cerrar-carrito');
  const drawer = document.getElementById('carrito-drawer');

  if (abrirCarritoBtn && cerrarCarritoBtn && drawer) {
    abrirCarritoBtn.addEventListener('click', e => {
      e.preventDefault();
      drawer.classList.add('open');
      renderizarCarrito();
    });

    cerrarCarritoBtn.addEventListener('click', () => {
      drawer.classList.remove('open');
    });
  }

  const loginBtn = document.getElementById('abrir-login');
  const modal = document.getElementById('modal-login');
  const cerrarModal = document.getElementById('cerrar-modal');
  const form = document.getElementById('form-login');

  if (loginBtn && modal && cerrarModal) {
    loginBtn.addEventListener('click', e => {
      e.preventDefault();
      modal.style.display = 'block';
    });

    cerrarModal.addEventListener('click', () => {
      modal.style.display = 'none';
    });

    window.addEventListener('click', e => {
      if (e.target === modal) modal.style.display = 'none';
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const nombre = document.getElementById('nombre').value;
      const email = document.getElementById('email').value;
      localStorage.setItem('usuario', JSON.stringify({ nombre, email }));
      alert(`¡Bienvenido/a, ${nombre}!`);
      modal.style.display = 'none';
    });
  }
});

function agregarProductoAlCarrito(nombre, precio, imagen) {
  const existente = carrito.find(p => p.nombre === nombre);
  if (existente) {
    existente.cantidad += 1;
  } else {
    carrito.push({ nombre, precio, imagen, cantidad: 1 });
  }
  guardarCarrito();
}

function renderizarCarrito() {
  const contenido = document.getElementById('contenido-carrito');
  const totalEl = document.getElementById('total-carrito');
  const inputDescuento = document.getElementById('input-descuento');
  const descuento = inputDescuento && inputDescuento.value === "TRULALA10" ? 0.1 : 0;

  contenido.innerHTML = '';
  let total = 0;

  if (carrito.length === 0) {
    contenido.innerHTML = '<p>Tu carrito está vacío.</p>';
    totalEl.textContent = 'Total: $0';
    return;
  }

  carrito.forEach((producto, index) => {
    const precioNum = parseFloat(producto.precio.replace(/[^\d.-]/g, '')) * producto.cantidad;
    total += precioNum;

    const div = document.createElement('div');
    div.innerHTML = `
      <div style="margin-bottom: 12px;">
        <img src="${producto.imagen}" width="60" style="float:left; margin-right:10px;">
        <div style="overflow:hidden;">
          <strong>${producto.nombre}</strong><br>
          ${producto.precio} x ${producto.cantidad}<br>
          <button onclick="cambiarCantidad(${index}, -1)">−</button>
          <button onclick="cambiarCantidad(${index}, 1)">+</button>
          <button onclick="eliminarProducto(${index})">Eliminar</button>
        </div>
        <div style="clear:both;"></div>
      </div>
    `;
    contenido.appendChild(div);
  });

  const totalConDescuento = total * (1 - descuento);
  const mensaje = descuento > 0 ? `Descuento aplicado. ` : '';
  totalEl.textContent = `${mensaje}Total: $${totalConDescuento.toLocaleString()}`;
}

function cambiarCantidad(index, cambio) {
  carrito[index].cantidad += cambio;
  if (carrito[index].cantidad <= 0) carrito.splice(index, 1);
  guardarCarrito();
  renderizarCarrito();
}

function eliminarProducto(index) {
  carrito.splice(index, 1);
  guardarCarrito();
  renderizarCarrito();
}

function vaciarCarrito() {
  if (confirm("¿Vaciar el carrito?")) {
    carrito = [];
    guardarCarrito();
    renderizarCarrito();
  }
}

function finalizarCompra() {
  if (carrito.length === 0) return alert("Tu carrito está vacío.");
  alert("¡Gracias por tu compra!");
  carrito = [];
  guardarCarrito();
  renderizarCarrito();
}

function guardarCarrito() {
  localStorage.setItem('carrito', JSON.stringify(carrito));
  actualizarContadorCarrito();
}

function actualizarContadorCarrito() {
  const total = carrito.reduce((acc, item) => acc + item.cantidad, 0);
  const contador = document.getElementById('cart-count');
  if (contador) contador.textContent = total;
}

document.addEventListener('DOMContentLoaded', () => {
  const productos = document.querySelectorAll('.producto');
  const verMasBtn = document.getElementById('verMasBtn');
  let cantidadMostrada = 8;

  productos.forEach((producto, index) => {
    if (index >= cantidadMostrada) {
      producto.style.display = 'none';
    }
  });

  verMasBtn.addEventListener('click', () => {
    let mostradosAhora = 0;

    productos.forEach((producto, index) => {
      if (producto.style.display === 'none' && mostradosAhora < 8) {
        producto.style.display = 'block';
        mostradosAhora++;
      }
    });

    const quedanOcultos = Array.from(productos).some(p => p.style.display === 'none');
    if (!quedanOcultos) {
      verMasBtn.style.display = 'none';
    }
  });
});