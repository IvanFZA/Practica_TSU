document.addEventListener('DOMContentLoaded', () => {
    const formEditar = document.getElementById('formEditar');
    const modalEditar = document.getElementById("modalEditar");
    const btnCerrar = document.getElementById("cerrarEditar");
    const idEditar = document.getElementById('idEditar');
    const tituloEditar = document.getElementById('tituloEditar');
    const contenidoEditar = document.getElementById('contenidoEditar');
  
    // Mostrar modal desde otra función
    window.abrirModalEditar = function (nota) {
      idEditar.value = nota.id;
      tituloEditar.value = nota.titulo;
      contenidoEditar.value = nota.contenido;
      modalEditar.style.display = "block";
    };
  
    // Cerrar modal
    btnCerrar.addEventListener("click", () => {
      modalEditar.style.display = "none";
    });
  
    // Cerrar si se hace clic fuera
    window.addEventListener("click", (e) => {
      if (e.target === modalEditar) {
        modalEditar.style.display = "none";
      }
    });
  
    // Enviar actualización
    formEditar.addEventListener('submit', function (e) {
      e.preventDefault();
  
      const id = idEditar.value;
      const titulo = tituloEditar.value.trim();
      const contenido = contenidoEditar.value.trim();
  
      if (!titulo) {
        alert("El título es obligatorio.");
        return;
      }
  
      const payload = {
        titulo: titulo,
        contenido: contenido
      };
  
      fetch(`api/notes/index.php?id=${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      })
        .then(async res => {
          const data = await res.json();
  
          if (!res.ok) {
            throw new Error(data.mensaje || "Error al actualizar la nota.");
          }
  
          alert(data.mensaje || "Nota actualizada correctamente");
          modalEditar.style.display = "none";
          if (typeof cargarNotas === 'function') cargarNotas();
        })
        .catch(err => {
          alert("Error: " + err.message);
        });
    });
  });
  