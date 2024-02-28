export default function cargarContenido(url, containerId, templateFunction) {
    
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                
                return response.json();

            })
            .then(data => {
                
                const container = document.getElementById(containerId);
                // console.log(container);
                if (container && templateFunction) {
                    container.innerHTML = templateFunction(data);
                    resolve(); // Resolvemos la promesa aquí
                } else {
                    console.error('El contenedor o la función de plantilla no están definidos');
                    reject('El contenedor o la función de plantilla no están definidos'); // Rechazamos la promesa en caso de error
                }
            })
            .catch(error => {
                console.error('Error al cargar el contenido:', error);
                reject(error); // Rechazamos la promesa en caso de error
            });
    });
}
