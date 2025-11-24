import {getAuth, createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/12.5.0/firebase-auth.js";

class FirebaseAuthService {
    #auth;
    constructor(app){
        this.#auth = getAuth(app);
    }

    criarUsuarioComEmailESenha(email,senha){
        createUserWithEmailAndPassword(this.#auth, email, senha)
            .then((credencialdoUsuario) => {
                console.log('Usuario criado com sucesso: ', credencialdoUsuario.user);
                return credencialdoUsuario.user;
      })
        .catch((erro) => {
            console.error("Erro ao criar o usuario: ", erro)
        });
    }

    async signIn(email, senha) {
        try {
        const credencialdoUsuario = await signInWithEmailAndPassword(this.#auth, email, senha);
        return credencialdoUsuario.user;
        } catch (error) {
        console.error("Erro em logar", error);
        }}

        async signOut () {
        try {

        await firebaseSignOut(this.#auth);
        } catch (error) {
        console.error("Error signing out:", error) ;
        throw error;
        }
    }
}

export default FirebaseAuthService;