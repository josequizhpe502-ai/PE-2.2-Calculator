import schema from '../src/tools/calculator.tools.json';

describe('Calculator Schema Validation', () => {

  test('schema tiene nombre y descripción', () => {
    expect(schema).toHaveProperty('name');
    expect(schema).toHaveProperty('description');
  });

  test('inputSchema existe y es objeto', () => {
    expect(schema).toHaveProperty('inputSchema');
    expect(typeof schema.inputSchema).toBe('object');
  });

  test('campos requeridos están definidos', () => {
    expect(schema.inputSchema.required).toEqual(
      expect.arrayContaining(['operation', 'a', 'b'])
    );
  });

  test('operation permite solo valores válidos', () => {
    expect(schema.inputSchema.properties.operation.enum).toEqual(
      expect.arrayContaining(['add', 'substract', 'multiply', 'divide'])
    );
  });

  test('no permite propiedades adicionales', () => {
    expect(schema.inputSchema.additionalProperties).toBe(false);
  });

  test('a y b son de tipo number', () => {
    expect(schema.inputSchema.properties.a.type).toBe('number');
    expect(schema.inputSchema.properties.b.type).toBe('number');
  });

});

