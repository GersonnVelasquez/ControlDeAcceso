import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl  } from '@angular/forms';
import { LoginService } from 'src/app/servicios/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;


  constructor(private login: LoginService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'usuario': new FormControl('' , [Validators.required]),
      'password': new FormControl('' , [Validators.required])
    });
  }

  Login(): void {
    if (this.loginForm.valid) {
      this.login.login();
      this.loginForm.reset();
    } else {
      alert('Ingrese todos los datos solicitados.');
    }
  }



}

