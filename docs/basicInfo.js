// información básica de la API

module.exports = {
  openapi: "3.0.0",
  info: {
    title: "Tasks API",
    version: "1.0.0",
    description: "CRUD de tareas con MongoDB y Mongoose",
  },
  servers: [
    {
      url: "http://localhost:8080",
      description: "Servidor local",
    },
  ],
};
