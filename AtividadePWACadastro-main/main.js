import {app} from './firebase-config.js';
import FirebaseAuthService from './FirebaseAuthService';

// codigo para linkar o formulario com o arquivo FirebaseAuthService
document.addEventListener("DOMContentLoaded", () => {
   const formulario = document.getElementById("cadastroForm");
  
    formulario.addEventListener("submit", async (event) => {
      event.preventDefault();
  
      const email = document.getElementById("email").value;
      const senha = document.getElementById("senha").value;
    
      //mandando dados do form para o FireBase
      const FirebaseAuthService = new FireBaseAuthService(window.fbApp);
      FirebaseAuthService.criarUsuarioComEmailESenha(email, senha);

      //se o login ocorrer de forma correta ira levar o usuario a pagina de perfil
        if (FirebaseAuthService.criarUsuarioComEmailESenha(email, senha) = erro)
        {console.log("Erro")} else{
          document.getElementById("Enviar").addEventListener("click",() => {
   href="perfil.html"})}
  
  });
  });

const authService = new FirebaseAuthService(app);

