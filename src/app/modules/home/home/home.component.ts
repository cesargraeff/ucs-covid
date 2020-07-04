import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  host: {
    class : 'vertical-content'
  }
})
export class HomeComponent implements OnInit {

  resultado: string = null;

  sintomas: any = {
    febre: 0,
    tosse: 0,
    coriza: 0,
    cansaco: 0,
    cabeca: 0,
    respirar: 0,
  };

  constructor(
  ) {}

  ngOnInit(){

  }

  diagnostico(){
    var soma = parseInt(this.sintomas.febre) + parseInt(this.sintomas.tosse) + parseInt(this.sintomas.coriza) + parseInt(this.sintomas.cansaco) + parseInt(this.sintomas.cabeca) + parseInt(this.sintomas.respirar);
    if(parseInt(this.sintomas.respirar)){
      this.resultado = 'Você está com sintomas graves, procure um médico!';
    }else if(soma > 0){
      this.resultado = 'Você está com sintomas leves. Fique em casa e matenha o isolamento social.';
    } else{
      this.resultado = 'Você não apresenta sintomas do Covid-19';
    }
  }

  refazer(){
    this.resultado = null;
    this.sintomas = {
      febre: 0,
      tosse: 0,
      coriza: 0,
      cansaco: 0,
      cabeca: 0,
      respirar: 0,
    };
  }

}
