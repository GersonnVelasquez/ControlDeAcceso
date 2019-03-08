import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl  } from '@angular/forms';
import { LoginService } from 'src/app/servicios/shared/login.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;


  constructor(private login: LoginService, private Message: ToastrService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'usuario': new FormControl('' , [Validators.required]),
      'password': new FormControl('' , [Validators.required])
    });
  }

  Login(): void {
    if (this.loginForm.valid) {
      this.login.login(this.loginForm.controls['usuario'].value, this.loginForm.controls['password'].value);
      this.loginForm.reset();
    } else {
      this.Message.error('Datos Imcompletos', 'Error');
    }
  }



}

