import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

   noticias =  [
    {
    imagem: "assets/img/news.jpg",
    titulo: "Noticia 01",
    descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
},
{
    imagem: "assets/img/news.jpg",
    titulo: "Noticia 02",
    descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
}, {
    imagem: "assets/img/news.jpg",
    titulo: "Noticia 03",
    descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
}, {
    imagem: "assets/img/news.jpg",
    titulo: "Noticia 04",
    descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
}, {
    imagem: "assets/img/news.jpg",
    titulo: "Noticia 05",
    descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
}, {
    imagem: "assets/img/news.jpg",
    titulo: "Noticia 06",
    descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
}];
listaClassificados = [{
  nome: "Jose",
  sobrenome: "Maria",
  handle: "@jmar"
}, {
  nome: "Maria",
  sobrenome: "Jose",
  handle: "@marj"
}, {
  nome: "Rick",
  sobrenome: "Martin",
  handle: "@rmart"
}, {
  nome: "Martin",
  sobrenome: "Rick",
  handle: "@maRick"
}, {
  nome: "Ninja",
  sobrenome: "Garden",
  handle: "@ningar"
}, {
  nome: "Rafael",
  sobrenome: "Nogueira",
  handle: "@rafnog"
}, {
  nome: "Vin",
  sobrenome: "Martin",
  handle: "@vinmart"
}, {
  nome: "José",
  sobrenome: "Antônio",
  handle: "@josan"
}]
  constructor() { }


  ngOnInit(): void { }  
 
}
