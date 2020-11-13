const cipher = {
  encode: function (desloca, nome) {

    if (typeof desloca != "number" || typeof nome != "string") {
      throw new TypeError()

    } else {
      let nomeUsuario = " ";
      let tamanhoAlfabeto = 26;
      let inicioAsc = 65;
      for (let i = 0; i < nome.length; i++) {
        const gCodigo = nome.charCodeAt(i);
        let codificado = ((gCodigo - inicioAsc + desloca) % tamanhoAlfabeto) + inicioAsc;
        if (gCodigo <= 64 || gCodigo >= 91) {
          codificado = gCodigo;
        }
        nomeUsuario += String.fromCharCode(codificado);

      }
      return nomeUsuario

    }

  },
  decode: function (volta, decodifica) {
    if (typeof volta != "number" || typeof decodifica != "string") {
      throw new TypeError()

    } else {
      let codigoIn = " ";
      let tamanhoAlfabeto = 26;
      let inicioAsc = 65;
      for (let i = 0; i < decodifica.length; i++) {
        const bCodigo = decodifica.charCodeAt(i);
        let recodificado = ((bCodigo - inicioAsc - (volta % tamanhoAlfabeto) + tamanhoAlfabeto) % tamanhoAlfabeto + inicioAsc);
        if (bCodigo <= 64 || bCodigo >= 91) {
          recodificado = bCodigo;
        }
        codigoIn += String.fromCharCode(recodificado);

      }
      return codigoIn

    }
  }
};

export default cipher;
