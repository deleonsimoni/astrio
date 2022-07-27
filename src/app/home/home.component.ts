import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AniversariantesService } from '@app/shared/services/aniversariantes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  aniversariantes: any = [];
  mes: any = (new Date().getUTCMonth() + 1);
  dia: any = new Date().getDate();

  @ViewChild('scrollMe') private myScrollContainer: ElementRef;

  constructor(
    private aniversariantesService: AniversariantesService) { }

  ngOnInit(): void {
    /* this.aniversariantesService.getAniversariantes().subscribe((res: any) => {
       this.aniversariantes = res;
     }, err => {
       console.log('erro ao capturar aniversariantes ' + err);
     });*/
    //this.aniversariantes = ["aa", "bb"];
    this.aniversariantes = [{ "dia": 1, "nome": "MARIA DE FATIMA FERREIRA PRAZERES" }, { "dia": 1, "nome": "MARTA HELENA GOMES" }, { "dia": 2, "nome": "ALEANDRA ABREU DE OLIVEIRA" }, { "dia": 2, "nome": "MAURO LUIZ DE ASSIS FERNANDES" }, { "dia": 3, "nome": "ELIZABETH DE JESUS MATTA" }, { "dia": 3, "nome": "FABIO PASSIDOMO VIEIRA" }, { "dia": 3, "nome": "HUMBERTO FELBINGER COSSU DE VASCONCELOS" }, { "dia": 3, "nome": "JOÃO HAMILTON DE MEDEIROS CARVALHIDO" }, { "dia": 4, "nome": "GABRIELA FERREIRA DA SILVA MACHADO" }, { "dia": 5, "nome": "CARLOS ANTONIO SILVA DOS SANTOS" }, { "dia": 5, "nome": "PAULO CESAR PEREIRA DA SILVA" }, { "dia": 6, "nome": "CARLOS ROBERTO MILET CAVALCANTI JUNIOR" }, { "dia": 6, "nome": "IVONILDO POVOA VENEROTTI GUIMARÃES" }, { "dia": 6, "nome": "JORGE LUPERCIO LIGEIRO" }, { "dia": 6, "nome": "MARCIA DE JESUS OLIVEIRA" }, { "dia": 6, "nome": "MARIA CLAUDIA LAMEIRA GARCIA" }, { "dia": 6, "nome": "MARIA CLAUDIA LAMEIRA GARCIA" }, { "dia": 9, "nome": "CRISTIANE DE ALMEIDA DOMINGUES" }, { "dia": 10, "nome": "EDUARDO MARTINS DE MELLO JUNIOR" }, { "dia": 10, "nome": "MARIA HELENA BACHA" }, { "dia": 10, "nome": "NAIRETE MENEZES ALVES" }, { "dia": 10, "nome": "SEBASTIÃO LUSTOSA DOS SANTOS" }, { "dia": 11, "nome": "LUIZ ALBERTO FLORES DA CUNHA FILHO" }, { "dia": 11, "nome": "MARCUS VINICIUS BARROS DA SILVA" }, { "dia": 12, "nome": "ANTONIO CARLOS DE ALMEIDA ROCHA" }, { "dia": 12, "nome": "SERGIA ELIANA VIANA DE SOUZA" }, { "dia": 14, "nome": "CARLOS HENRIQUE BOM DE AQUINO" }, { "dia": 14, "nome": "FELIPE GUEDES MONTEIRO" }, { "dia": 14, "nome": "IVO HOCHLEITNER JUNIOR" }, { "dia": 14, "nome": "LUCI MARQUES THEODORO" }, { "dia": 14, "nome": "THIAGO RUAS RAMOS" }, { "dia": 15, "nome": "ADRIANA ARINELLI FERNANDES SALGADO" }, { "dia": 15, "nome": "MARCELO MORAES DE CARVALHO" }, { "dia": 15, "nome": "REGINA MARIA MENEZES M. DA SILVA" }, { "dia": 16, "nome": "FERNANDO REZENDE CUNHA JUNIOR" }, { "dia": 16, "nome": "GUILHERME PEREIRA TAVARES COUTINHO" }, { "dia": 16, "nome": "IVAN CANDIDO CARDOSO" }, { "dia": 16, "nome": "LUIS PAULO CARMO DE MELO" }, { "dia": 17, "nome": "HARRISON MENDONÇA DA SILVA" }, { "dia": 17, "nome": "MONICA FERNANDES ALBACETE DIAS LOPES" }, { "dia": 18, "nome": "ANTONIO RAYMUNDO DA MOTTA" }, { "dia": 18, "nome": "SARA JANE LEITE DE FARIAS" }, { "dia": 20, "nome": "AUREO FERNANDES ROCHA" }, { "dia": 20, "nome": "LUIZ FERNANDO DE ALBUQUERQUE" }, { "dia": 20, "nome": "MARIA JOSÉ DO NASCIMENTO TEODOSIO" }, { "dia": 21, "nome": "DALMIR JOSÉ DE SILVA OLIVEIRA" }, { "dia": 21, "nome": "UBIRACY RUFINO REZENDE" }, { "dia": 22, "nome": "JULIO CESAR MENDES DE CASTRO" }, { "dia": 22, "nome": "MARIA RAIMUNDA BORGES FRAGA" }, { "dia": 23, "nome": "ELIANE DOS SANTOS CARDIA" }, { "dia": 23, "nome": "RONALDO DE CARVALHO CYRINO" }, { "dia": 23, "nome": "VERONICA COELHO NETO DO NASCIMENTO" }, { "dia": 24, "nome": "FLAVIA FERREIRA DE OLIVEIRA" }, { "dia": 25, "nome": "LUIZ RICARDO ZDANOWSKI" }, { "dia": 25, "nome": "RICARDO TEIXEIRA" }, { "dia": 26, "nome": "DENISE GUEDES COOK SIQUEIRA SOARES" }, { "dia": 26, "nome": "MARCELO SANTOS CURTY" }, { "dia": 26, "nome": "RAFAEL CARVALHO DE FARIA" }, { "dia": 26, "nome": "THIAGO CORREIA DO NASCIMENTO" }, { "dia": 27, "nome": "ELDRI CARNEIRO CAVALCANTI" }, { "dia": 27, "nome": "JUSSARA TEIXEIRA PERES" }, { "dia": 28, "nome": "MARIA DA CONCEIÇÃO FERREIRA MESSIAS" }, { "dia": 28, "nome": "TADEU LUIZ DE PINHO BARBOSA" }, { "dia": 29, "nome": "GUILHERME HEUSI" }, { "dia": 29, "nome": "ISABELA HEUSI DE FREITAS" }, { "dia": 29, "nome": "MARIA BETHANIA VILLELA NAEF TADDEU" }, { "dia": 30, "nome": "MARIA TERESA ROCHA DE OLIVEIRA" }, { "dia": 30, "nome": "REGINA BRITO CARDOSO" }];

  }

  scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch (err) { }
  }



}
