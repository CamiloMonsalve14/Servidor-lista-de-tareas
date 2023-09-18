
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/tareas', (req, res) => {
const tareas = [
    { id: 1, description: 'Hacer la compra', completed: true },
    { id: 2, description: 'Estudiar para el examen', completed: false },
    { id: 3, description: 'Ir al gimnasio', completed: true }
];

res.json(tareas);
});

app.listen(PORT, () => {
console.log(`Servidor en ejecución en el puerto ${PORT}`);
});
