export const modoInicioSecao = {

  dadosInvalidos: () => {
    const emailOuSenhaInvalidosMsg = `
        <div class= "exibicaoError" id="exibicaoDadosInvalidos">
          <p>Você digitou um e-mail ou senha inválidos</p>
        </div>
      `;
    return emailOuSenhaInvalidosMsg;
  },

  usuarioInvalido: () => {
    const userInvalidoMsg = `
        <div class= "exibicaoError" id="exibicaoUsuarioInvalido">
          <p>Você não tem um registro</p>
        </div>
      `;
    return userInvalidoMsg;
  },
};