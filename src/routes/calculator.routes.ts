import { FastifyInstance } from "fastify";
import calculatorTool from '../tools/calculator.tools.json';

interface CalculatorRequest {
    operation: 'add' | 'substract' | 'multiply' | 'divide';
    a: number;
    b: number;
}

export async function calculatorRoutes(fastify: FastifyInstance) {
    fastify.post<{ Body: CalculatorRequest }>(
        '/tools/calculator', //Especificar ruta
 
        {
            schema: {
                description: "Realiza operaciones de calculadora básicas usando MCP",
                tags: ['Calculator'],
                body: calculatorTool.inputSchema,
                response: {
                    200: {
                        type: 'object',
                        properties: {
                            result: { type: 'number' },
                            operation: { type: 'string' }
                        }
                    },
                    400: {
                        type: 'object',
                        properties: {
                            error: { type: 'string' },
                        }
                    }
                }
            }
        },
        async (request, reply) => {
            const{ operation, a, b } = request.body

            let result: number;

            switch (operation) {
                case 'add':
                    result = a + b
                    break;
                
                case 'substract':
                    result = a - b
                    break;
                
                case 'multiply':
                    result = a * b
                    break;
                
                case 'divide':
                    if (b === 0) {
                        return reply.status(400).send({ 
                            error: 'Division by zero is not allowed.'
                        });
                    }
                    result = a / b
                    break;
                default:
                    return reply.status(400).send({ 
                        error: 'Operador invalido.'
                    });
            }

            return { result, operation };
        }

    )

}