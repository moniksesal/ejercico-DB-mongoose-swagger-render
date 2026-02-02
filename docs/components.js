// componentes reutilizables para la documentación
module.exports = {
  components: {
    schemas: {
      Task: {
        type: "object",
        properties: {
          _id: {
            type: "string",
            example: "6201064b0028de7866e2b2c4",
          },
          title: {
            type: "string",
            example: "Comprar leche",
          },
          completed: {
            type: "boolean",
            example: false,
          },
          createdAt: {
            type: "string",
            example: "2026-02-01T10:00:00Z",
          },
          updatedAt: {
            type: "string",
            example: "2026-02-01T10:00:00Z",
          },
        },
      },
    },
  },
};
