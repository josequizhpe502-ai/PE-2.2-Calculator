// Import the framework and instantiate it
import Fastify from 'fastify'
import { calculatorRoutes } from './routes/calculator.routes'
import swagger from '@fastify/swagger'
import swaggerUi from '@fastify/swagger-ui'

// inicializar mi fastify
const fastify = Fastify({
    logger: true
});

const PORT = 3000;


fastify.register(swagger, {
    openapi: {
        info: {
            title: 'servidor MCP para calcular operaciones basicas',
            description: 'Esta es una API para realizar operaciones básicas usando MCP',
            version: '1.0.0'
        },
        servers: [
            { 
                url: 'http://localhost:3000',
                description: 'Servidor local'
            }
        ],
        tags: [{ name: 'Calculator', description: 'Operaciones de calculadora usando MCP' }]
    }
});

fastify.register(swaggerUi, {
    routePrefix: '/docs',
    uiConfig: {
        docExpansion: 'list',
        deepLinking: false
    }
});

// Declare a route
fastify.get('/', async (request, reply) => {
  return { message: 'MCP server corriendo' }
});

fastify.register(calculatorRoutes);

const start = async () => {
    // Run the server!
    try {
        await fastify.listen({ port: PORT, host: '0.0.0.0' });
        console.log(`Server listening on http://localhost:${PORT}`);
        console.log(`Swagger docs available at http://localhost:${PORT}/docs`);     
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};
start();
