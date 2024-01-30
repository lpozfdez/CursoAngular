import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);

  public myForm: FormGroup = this.fb.group({
    email:['ana@google.com',[Validators.required, Validators.email]],
    password:['123456',[Validators.required, Validators.maxLength(6)]],
  });


  login(){
    this.authService.login(this.myForm.value['email'], this.myForm.value['password'])
                    .subscribe({
                      next: () => this.router.navigateByUrl('/dashboard'),
                      error: (e) =>{
                        Swal.fire('Error', e, 'error');
                      }
                    })
  }




}
