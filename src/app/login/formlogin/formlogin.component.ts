import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Global } from '../../shared/Global';
import { MatSnackBar } from '@angular/material';
import { AlertService } from '../../services/alert.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { first } from 'rxjs/internal/operators/first';
import { AuthService } from '../../services/authService';
import { ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';


@Component({
  selector: 'app-formlogin',
  templateUrl: './formlogin.component.html',
  styleUrls: ['./formlogin.component.css']
})
export class FormloginComponent implements OnInit {

  @Output() usuarioLogado = new EventEmitter();


  formLogin: FormGroup;                    // {1}
  private formSubmitAttempt: boolean; // {2}
  loading = false;
  submitted = false;
  returnUrl: string;  
   
  feedBack(){
    console.log(this.f.userName.value);
  }
  constructor(
    private fb: FormBuilder,         // {3}
    private authService: AuthService,
    private route: ActivatedRoute,
    public snackBar: MatSnackBar,
    private alertService: AlertService,
    private router: Router
  ) {}

  ngOnInit() {
    this.formLogin = this.fb.group({     // {5}
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });

     // reset login status
     this.authService.logout();

     // get return url from route parameters or default to '/'
     this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/frmdasboard';
     
  }

  isFieldInvalid(field: string) { // {6}
    return (
      (!this.formLogin.get(field).valid && this.formLogin.get(field).touched) ||
      (this.formLogin.get(field).untouched && this.formSubmitAttempt)
    );
  }
  get f() { return this.formLogin.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.formLogin.invalid) {
        return;
    }

    this.loading = true;
    this.authService.login(this.f.userName.value, this.f.password.value)
        .pipe(first())
        .subscribe(
            data => {
                this.router.navigate([this.returnUrl]);
                // this.location.reload();
                this.usuarioLogado.emit({"logado":true});
            },
            error => {
                this.showMessage('Usuário ou senha inválido');
                this.loading = false;
            });

}

  showMessage(msg: string) {
    this.snackBar.open(msg, '', {
      duration: 3000
    });
  }
}
