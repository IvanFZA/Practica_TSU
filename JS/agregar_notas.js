document.addEventListener('DOMContentLoaded', () => {
    const formAgregar = document.getElementById('formAgregar');
    const titulo = document.getElementById('tituloAgregar');
    const contenido = document.getElementById('contenidoAgregar');
    const modal = document.getElementById("modalAgregar");
    const btnMostrar = document.getElementById("btnMostrarAgregar");
    const btnCerrar = document.getElementById("cerrarAgregar");
  
    // Mostrar modal
    btnMostrar.addEventListener("click", () => {
      modal.style.display = "block";
    });
  
    // Cerrar modal
    btnCerrar.addEventListener("click", () => {
      modal.style.display = "none";
    });
  
    // Cerrar si se hace clic fuera del contenido
    window.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  
    // Enviar nota
    formAgregar.addEventListener('submit', function (e) {
      e.preventDefault();
  
      const tituloTexto = titulo.value.trim();
      const contenidoTexto = contenido.value.trim();
  
      if (!tituloTexto) {
        alert("El título es obligatorio.");
        return;
      }
  
      const payload = {
        titulo: tituloTexto,
        contenido: contenidoTexto
      };
  
      fetch('api/notes/index.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      })
        .then(async res => {
          const data = await res.json();
  
          if (!res.ok) {
            throw new Error(data.mensaje || "Error desconocido al agregar la nota.");
          }
  
          alert(data.mensaje || "Nota agregada correctamente");
          formAgregar.reset();
          modal.style.display = 'none';
          if (typeof cargarNotas === 'function') cargarNotas();
        })
        .catch(err => {
          alert("Error: " + err.message);
        });
    });
  });
  