const esCorreoElectronicoValido = require('./email.js'); 

describe('Pruebas para la función esCorreoElectronicoValido', () => {
  test('Debería devolver true para un correo electrónico válido', () => {
    expect(esCorreoElectronicoValido('usuario@example.com')).toBe(true);
  });

  test('Debería devolver true para un correo electrónico con caracteres especiales', () => {
    expect(esCorreoElectronicoValido('usuario-1@example.co.uk')).toBe(true);
  });

  test('Debería devolver false para un correo electrónico sin el símbolo "@"', () => {
    expect(esCorreoElectronicoValido('usuarioexample.com')).toBe(false);
  });

  test('Debería devolver false para un correo electrónico sin el dominio', () => {
    expect(esCorreoElectronicoValido('usuario@')).toBe(false);
  });

  test('Debería devolver false para un correo electrónico con un dominio inválido', () => {
    expect(esCorreoElectronicoValido('usuario@example.')).toBe(false);
  });
});
