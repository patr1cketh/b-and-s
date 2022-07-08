import { Component } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { GoogleAuthProvider } from 'firebase/auth';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'b-and-s';

  constructor(
    public auth: Auth
  ) {
  }

  signInClicked(): void {
  //  this.auth.signInWithPopup(new GoogleAuthProvider());
  }

  signOutClicked(): void {
    this.auth.signOut();
  }
}
