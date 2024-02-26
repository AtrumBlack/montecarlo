export default function cargarContenido  (url, containerId, templateFunction) {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById(containerId);
            if (container) {
                container.innerHTML = templateFunction(data);
            }
        })
        .catch(error => console.error('Error al cargar el contenido:', error));
};