import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: Auth) {}

  login(email: string, senha: string) {
    return signWithEmailAndPassword(this.auth, email, senha);
  }

  register(email: string, senha: string) {
    return createUserWithEmailandPassword(this.auth, email, senha);
  }

  logon() {
    return signOut(this.auth);
  }

  loginWithGoogle(){
    const provider = new GoogleAuthProvider();
    return signInWithPopup(this.auth, provider);
  } 
}