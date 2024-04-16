function esCorreoElectronicoValido(correo) {
  const patronCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return patronCorreo.test(correo);
}

module.exports = esCorreoElectronicoValido;
