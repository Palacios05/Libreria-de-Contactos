# 📇 Lista de Contactos

Aplicación web dinámica desarrollada con *HTML, CSS y JavaScript, que permite **gestionar una lista de contactos* de forma totalmente local utilizando *localStorage* como base de datos del navegador.

---

## 🚀 Características principales

✅ *Agregar contactos* con nombre, teléfono, correo, sexo y una descripción opcional.  
✅ *Editar contactos existentes* directamente desde la lista.  
✅ *Eliminar contactos* con confirmación antes de borrarlos.  
✅ *Persistencia de datos:* los contactos se guardan en localStorage y se mantienen después de recargar la página.  
✅ *Diseño limpio y moderno*, con disposición vertical y tarjetas para cada contacto.  

---

## ⚙ Tecnologías utilizadas

| Tecnología | Uso |
|-------------|-----|
| *HTML5* | Estructura del contenido |
| *CSS3* | Estilos, diseño responsivo y organización visual |
| *JavaScript* | Lógica del CRUD y manejo del DOM |
| *localStorage* | Persistencia de los datos en el navegador |

---

## 🧩 Funcionalidades del sistema

| Acción | Descripción |
|--------|--------------|
| ➕ *Agregar* | Permite crear un nuevo contacto con los campos requeridos. |
| ✏ *Editar* | Carga los datos del contacto en el formulario para modificarlos. |
| ❌ *Eliminar* | Elimina el contacto con una confirmación previa. |
| 💾 *Persistencia* | Guarda todos los datos en localStorage para mantenerlos tras recargar la página. |

---

## 🖼 Interfaz de usuario

- Los campos del formulario (nombre, teléfono, correo, sexo, descripción) se muestran *en vertical*.  
- Cada contacto se visualiza como una *tarjeta* con:
  - Nombre  
  - Teléfono  
  - Correo  
  - Sexo (con ícono)  
  - Descripción opcional  
  - Botones *Editar* (naranja) y *Eliminar* (rojo)

---

## 💾 Cómo funciona

1. El usuario completa el formulario con los datos del contacto.  
2. Al presionar *“Agregar contacto”*, los datos se guardan en localStorage.  
3. Todos los contactos se muestran automáticamente en una lista bajo el formulario.  
4. Si se edita un contacto, el botón cambia a *“Actualizar contacto”*.  
5. Al eliminar, se muestra una confirmación antes de borrar el contacto.  
6. La información se mantiene al recargar o cerrar el navegador.  

---

## 🧰 Instalación y uso

1. *Clonar el repositorio:*
   ```bash
   git clone https://github.com/Palacios05/Libreria-de-Contactos.git
