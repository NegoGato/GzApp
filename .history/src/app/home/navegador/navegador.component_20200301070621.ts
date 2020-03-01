import { Usuario } from './../../models/usuario';
import { AuthService } from './../../services/authService';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { BreakpointState } from '@angular/cdk/layout';
import { Breakpoints } from '@angular/cdk/layout';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Global } from '../../shared/Global';
import { MatDialog } from '@angular/material';


@Component({
  selector: 'app-navegador',
  templateUrl: './navegador.component.html',
  styleUrls: ['./navegador.component.css']
})
export class NavegadorComponent implements OnInit {
  isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);
  constructor(private breakpointObserver: BreakpointObserver, private authService: AuthService,public dialog: MatDialog) {   
  }
  @Input() respotaUsuario;
  panelOpenState = false;
   currentUser = Global.currentUser;
   users: Usuario[] = [];
   nome: string;

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (this.currentUser) {
      this.nome = this.currentUser.user.name;
    }
      this.nome = this.respotaUsuario;
    if(this.nome == null) {
       this.nome = '';
    }
    // this.isLoggedIn$ = this.authService.isLoggedIn; // {2}
  }
  usuarioAutenticado(respostaLogin) {
    if (respostaLogin.logado === true) {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
      this.nome = this.currentUser.user.name;
    }
  }
  onLogout() {
    this.authService.logout();
    this.nome = null;
    this.currentUser = null;
                    // {3}
  }
}
