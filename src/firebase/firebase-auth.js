
import {
    auth,
    onAuthStateChanged,
    // signOut,
    signInWithEmailAndPassword,
} from './config.js';

// Login de usuário com e-mail e senha
export const loginUsuario = (email, senha) => signInWithEmailAndPassword(auth, email, senha);

export const estadoAuthUsuario = (callback) => onAuthStateChanged(auth, callback);
