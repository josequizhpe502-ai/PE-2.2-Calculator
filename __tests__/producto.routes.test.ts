import Fastify from 'fastify';
import { calculatorRoutes } from '../src/routes/calculator.routes';

describe('Calculator Routes', () => {
  const fastify = Fastify();

  beforeAll(async () => {
    await fastify.register(calculatorRoutes);
  });

  afterAll(async () => {
    await fastify.close();
  });

  test('suma correctamente', async () => {
    const response = await fastify.inject({
      method: 'POST',
      url: '/tools/calculator',
      payload: { operation: 'add', a: 2, b: 3 }
    });

    expect(response.statusCode).toBe(200);
    expect(JSON.parse(response.body).result).toBe(5);
  });

  test('resta correctamente', async () => {
    const response = await fastify.inject({
      method: 'POST',
      url: '/tools/calculator',
      payload: { operation: 'substract', a: 5, b: 3 }
    });

    expect(JSON.parse(response.body).result).toBe(2);
  });

  test('multiplica correctamente', async () => {
    const response = await fastify.inject({
      method: 'POST',
      url: '/tools/calculator',
      payload: { operation: 'multiply', a: 2, b: 4 }
    });

    expect(JSON.parse(response.body).result).toBe(8);
  });

  test('divide correctamente', async () => {
    const response = await fastify.inject({
      method: 'POST',
      url: '/tools/calculator',
      payload: { operation: 'divide', a: 10, b: 2 }
    });

    expect(JSON.parse(response.body).result).toBe(5);
  });

  test('error al dividir por cero', async () => {
    const response = await fastify.inject({
      method: 'POST',
      url: '/tools/calculator',
      payload: { operation: 'divide', a: 10, b: 0 }
    });

    expect(response.statusCode).toBe(400);
  });
});
