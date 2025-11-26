  // Import the functions you need from the SDKs you need
   import FireBaseAuthService from './FirebaseAuthService.js';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAXI-PjsWDmwddmlt6DnfF4M4pC59XDS7o",
  authDomain: "aulapwahambuguermenu.firebaseapp.com",
  projectId: "aulapwahambuguermenu",
  storageBucket: "aulapwahambuguermenu.firebasestorage.app",
  messagingSenderId: "1056583419682",
  appId: "1:1056583419682:web:92b22388925334008dc77b",
  measurementId: "G-MNMPRFEDRT"
};

  window.fbApp = initializeApp(firebaseConfig);
  window.analytics = getAnalytics(window.fbApp);
  console.log(window.fbApp);


// codigo para linkar o formulario com o arquivo FirebaseAuthService
  document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.getElementById("cadastroForm");

  formulario.addEventListener("submit", (event) => {
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
  window.location.replace = "perfil.html"})}

});
});



const authService = new FireBaseAuthService(app);

