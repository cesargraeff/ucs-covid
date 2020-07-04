import { Router } from '@angular/router';
import { UsuariosModel } from '../usuarios.model';
import { Component, OnInit } from '@angular/core';
import { DbService } from 'src/app/core/services/db.service';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
  host: {
    class: 'vertical-content'
  }
})
export class CadastroComponent implements OnInit {

  model: UsuariosModel = new UsuariosModel();

  constructor(
    private service: UsuariosService,
    private router: Router
  ) { }

  ngOnInit() {

  }

  save(){
    this.service.adicionar(this.model).then(() => {
      this.router.navigate(['/login']);
    }).catch(function(){
      
    });
  }

}
