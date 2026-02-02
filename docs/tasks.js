// documentación de los diferentes endpoints

module.exports = {
  paths: {
    "/create": {
      post: {
        tags: ["Tasks"],
        summary: "Create a task",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  title: {
                    type: "string",
                    example: "Aprender Swagger",
                  },
                },
              },
            },
          },
        },
        responses: {
          201: {
            description: "Task created successfully",
          },
          500: {
            description: "Server error",
          },
        },
      },
    },

    "/": {
      get: {
        tags: ["Tasks"],
        summary: "Get all tasks",
        responses: {
          200: {
            description: "List of tasks",
          },
          500: {
            description: "Server error",
          },
        },
      },
    },

    "/id/{_id}": {
      put: {
        tags: ["Tasks"],
        summary: "Update task title",
        parameters: [
          {
            name: "_id",
            in: "path",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  title: {
                    type: "string",
                    example: "Nuevo título",
                  },
                },
              },
            },
          },
        },
        responses: {
          200: {
            description: "Task updated successfully",
          },
          500: {
            description: "Server error",
          },
        },
      },

      delete: {
        tags: ["Tasks"],
        summary: "Delete a task",
        parameters: [
          {
            name: "_id",
            in: "path",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        responses: {
          200: {
            description: "Task deleted successfully",
          },
          500: {
            description: "Server error",
          },
        },
      },
    },
  },
};

