document.addEventListener('DOMContentLoaded', function () {
    const tablaNotas = document.querySelector('#notasTabla tbody');

    window.cargarNotas = function () {
        fetch('api/notes')
            .then(res => res.json())
            .then(data => {
                tablaNotas.innerHTML = '';
                data.forEach(nota => {
                    const fila = document.createElement('tr');

                    const tituloEscapado = nota.titulo.replace(/"/g, '&quot;');
                    const contenidoEscapado = (nota.contenido || '').replace(/`/g, '\\`').replace(/\$/g, '\\$');

                    fila.innerHTML = `
                        <td>${nota.id}</td>
                        <td>${nota.titulo}</td>
                        <td>${nota.contenido}</td>
                        <td>${nota.fecha}</td>
                        <td>
                            <button onclick="abrirModalEditar({ 
                                id: ${nota.id}, 
                                titulo: \`${tituloEscapado}\`, 
                                contenido: \`${contenidoEscapado}\`
                            })">Editar</button>
                            <button onclick="eliminarNota(${nota.id})">Eliminar</button>
                        </td>
                    `;
                    tablaNotas.appendChild(fila);
                });
            })
            .catch(err => {
                console.error('Error al cargar notas:', err);
            });
    };

    cargarNotas();
});
