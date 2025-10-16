// script.js - Lista de Contactos (CRUD) usando localStorage
// ---------------------------------------------------------
// Estructura de datos: cada contacto es un objeto { nombre, telefono, email }
// Los contactos se almacenan en localStorage bajo la clave 'contactos' como JSON.

// Referencias a elementos del DOM
const nombreInput = document.getElementById('nombre');
const telefonoInput = document.getElementById('telefono');
const emailInput = document.getElementById('email');
const sexoInput = document.getElementById('sexo');
const descripcionInput = document.getElementById('descripcion');
const guardarBtn = document.getElementById('guardar');
const listaContactos = document.getElementById('listaContactos');

// Estado de la aplicación
let contactos = JSON.parse(localStorage.getItem('contactos')) || [];
let editIndex = null; // índice del contacto que se está editando (null si ninguno)

// Guardar lista completa en localStorage
function guardarLocal() {
  localStorage.setItem('contactos', JSON.stringify(contactos));
}

// Mostrar contactos en el DOM
function mostrarContactos() {
  // Limpiar la lista antes de renderizar
  listaContactos.innerHTML = '';

  if (contactos.length === 0) {
    // Mensaje cuando no hay contactos
    const p = document.createElement('p');
    p.textContent = 'No hay contactos guardados.';
    p.classList.add('empty');
    listaContactos.appendChild(p);
    return;
  }

  // Crear una tarjeta (li) por cada contacto
  contactos.forEach((contacto, index) => {
    const li = document.createElement('li');
    li.classList.add('contacto');

    // Contenedor de datos del contacto
    const datosDiv = document.createElement('div');
    datosDiv.classList.add('datos');

    // Título con numeración: Contacto 1, Contacto 2, ...
    const titulo = document.createElement('div');
    titulo.classList.add('titulo-contacto');
    titulo.textContent = `Contacto ${index + 1}`;

    // Badge de sexo con icono + texto (si existe)
    const sexoBadge = document.createElement('span');
    sexoBadge.classList.add('sexo-badge');
    if (contacto.sexo === 'hombre') {
      sexoBadge.textContent = '♂ Hombre';
    } else if (contacto.sexo === 'mujer') {
      sexoBadge.textContent = '♀ Mujer';
    } else {
      sexoBadge.textContent = '';
    }

    datosDiv.innerHTML = `
      <div class="encabezado-datos">
        <span class="nombre-dato"><strong>Nombre:</strong> ${contacto.nombre}</span>
      </div>
      <span><strong>Teléfono:</strong> ${contacto.telefono}</span>
      <span><strong>Correo:</strong> ${contacto.email}</span>
      ${contacto.descripcion ? `<div class="descripcion"><strong>Descripción:</strong> ${contacto.descripcion}</div>` : ''}
    `;

    // Insertamos el título y, si aplica, el badge de sexo al inicio del contenedor de datos
    datosDiv.insertBefore(titulo, datosDiv.firstChild);
    if (sexoBadge.textContent) {
      datosDiv.insertBefore(sexoBadge, titulo.nextSibling);
    }

    // Contenedor de botones (Editar / Eliminar)
    const divBotones = document.createElement('div');
    divBotones.classList.add('botones');

    // Botón Editar
    const btnEditar = document.createElement('button');
    btnEditar.textContent = 'Editar';
    btnEditar.classList.add('editar');
    btnEditar.addEventListener('click', () => editarContacto(index));

    // Botón Eliminar
    const btnEliminar = document.createElement('button');
    btnEliminar.textContent = 'Eliminar';
    btnEliminar.classList.add('eliminar');
    btnEliminar.addEventListener('click', () => eliminarContacto(index));

  // Añadir botones al contenedor y contenedor al li
  divBotones.appendChild(btnEditar);
  divBotones.appendChild(btnEliminar);
  li.appendChild(datosDiv);
  li.appendChild(divBotones);

    // Finalmente, añadir la tarjeta a la lista
    listaContactos.appendChild(li);
  });
}

// Crear o actualizar contacto al pulsar el botón
guardarBtn.addEventListener('click', () => {
  const nombre = nombreInput.value.trim();
  const telefono = telefonoInput.value.trim();
  const email = emailInput.value.trim();
  const sexo = sexoInput.value;
  const descripcion = descripcionInput.value.trim();

  // Validación básica de campos (descripcion es opcional, sexo opcional)
  if (!nombre || !telefono || !email) {
    alert('Por favor, complete todos los campos.');
    return;
  }

  const nuevoContacto = { nombre, telefono, email, sexo, descripcion };

  if (editIndex !== null) {
    // Actualizar contacto existente
    contactos[editIndex] = nuevoContacto;
    editIndex = null;
    guardarBtn.textContent = 'Agregar contacto';
  } else {
    // Agregar nuevo contacto
    contactos.push(nuevoContacto);
  }

  // Persistir y refrescar vista
  guardarLocal();
  mostrarContactos();

  // Limpiar formulario
  nombreInput.value = '';
  telefonoInput.value = '';
  emailInput.value = '';
  sexoInput.value = '';
  descripcionInput.value = '';
});

// Cargar datos del contacto en el formulario para editar
function editarContacto(index) {
  const contacto = contactos[index];
  nombreInput.value = contacto.nombre;
  telefonoInput.value = contacto.telefono;
  emailInput.value = contacto.email;
  sexoInput.value = contacto.sexo || '';
  descripcionInput.value = contacto.descripcion || '';

  guardarBtn.textContent = 'Actualizar contacto';
  editIndex = index;
}

// Eliminar contacto (con confirmación)
function eliminarContacto(index) {
  const confirmar = confirm('¿Desea eliminar este contacto?');
  if (!confirmar) return;

  contactos.splice(index, 1);
  guardarLocal();
  mostrarContactos();
}

// Inicializar: cargar y mostrar contactos guardados al inicio
mostrarContactos();
