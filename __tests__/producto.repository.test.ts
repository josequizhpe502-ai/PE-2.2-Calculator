import schema from '../src/tools/calculator.tools.json';

describe('Calculator Repository Logic', () => {

  test('nombre del servicio es calculator', () => {
    expect(schema.name).toBe('calculator');
  });

  test('tiene definición de operaciones', () => {
    expect(schema.inputSchema.properties.operation).toBeDefined();
  });

  test('operación suma existe', () => {
    expect(schema.inputSchema.properties.operation.enum)
      .toContain('add');
  });

  test('operación resta existe', () => {
    expect(schema.inputSchema.properties.operation.enum)
      .toContain('substract');
  });

  test('operación multiplicar existe', () => {
    expect(schema.inputSchema.properties.operation.enum)
      .toContain('multiply');
  });

  test('operación dividir existe', () => {
    expect(schema.inputSchema.properties.operation.enum)
      .toContain('divide');
  });

  test('define exactamente 4 operaciones', () => {
    expect(schema.inputSchema.properties.operation.enum.length).toBe(4);
  });

  test('no permite propiedades extra en el input', () => {
    expect(schema.inputSchema.additionalProperties).toBe(false);
  });

});
