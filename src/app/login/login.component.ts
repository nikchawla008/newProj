import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup | undefined

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    })
  }
  
  onLogin(){
    console.log(this.loginForm?.value)
    if(this.loginForm?.valid){
      localStorage.setItem('user', JSON.stringify(this.loginForm.value))
      this.router.navigateByUrl('/home');
    }
    else{
      this.loginForm?.markAllAsTouched()
    }
  }

}
