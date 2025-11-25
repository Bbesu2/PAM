import {getAuth, createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/12.5.0/firebase-auth.js";
import { getAuth, validatePassword } from "firebase/auth";
import { getAuth, signOut } from "firebase/auth";

const status = await validatePassword(getAuth(), passwordFromUser);
if (!status.isValid) {
  // Password could not be validated. Use the status to show what
  // requirements are met and which are missing.
}

const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  })
  
  signOut(auth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });


class FirebaseAuthService {
    #auth;
    constructor(app){
        this.#auth = getAuth(app);
    }

    criarUsuarioComEmailESenha(email,senha){
        createUserWithEmailAndPassword(this.#auth, email, senha)
            .then((credencialdoUsuario) => {
                console.log('Usuario criado com sucesso: ', credencialdoUsuario.user);
                window.location.href = `perfil.html?email=${encodeURIComponent(email)}`;
      })
        .catch((erro) => {
            console.error("Erro ao criar o usuario: ", erro)
        }) 
}
}
export default FirebaseAuthService;