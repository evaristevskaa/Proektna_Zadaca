const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Rybakina Career Tracker API",
      version: "1.0.0",
      description: "REST API documentation for Rybakina Career Tracker"
    },
     components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT"
      }
    }
  }
}
    ,servers: [
      {
        url: "http://localhost:3000"
      }
    ]
  }
  apis: ["./routes/*.js"]


const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;