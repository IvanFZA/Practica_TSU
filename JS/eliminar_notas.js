
document.addEventListener('DOMContentLoaded', () => {
    window.eliminarNota = function(id) {
        if (!confirm('¿Estás seguro de que deseas eliminar esta nota?')) {
            return;
        }

        fetch(`api/notes?id=${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            alert(data.mensaje);
            if (typeof cargarNotas === "function") {
                cargarNotas();
            }
        })
        .catch(err => {
            console.error("Error al eliminar la nota:", err);
            alert("Hubo un error al eliminar la nota.");
        });
    };
});
