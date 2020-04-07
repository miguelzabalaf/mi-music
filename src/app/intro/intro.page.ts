import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; //PARA PODER NAVEGAR ENTRE LAS RUTAS
import { Storage } from '@ionic/storage'

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  slideOpts = {
    initialSlide: 0,
    slidesPerView: 1,
    centeredSlides: true,
    speed: 400,
  };


  // CREAMOS UN JSON PARA REUTILIZAR EL CÓDIGO DEL PRIMER SLIDE E INTRODUCIR LOS SIGUIENTES VALORES
  slides = [{
    name:"slide1",
    alt: "Logo de Miguel Zabala",
    title:"Escucha tu música",
    subtitle:"En cualquier lugar",
    icon:"outline-play"
  }, {
    name:"slide2",
    alt: "Logo de Miguel Zabala",
    title:"Apasionate",
    subtitle:"De los mejores ritmos.",
    icon:"musical-notes-outline"
  }, {
    name:"slide3",
    alt: "Logo de Miguel Zabala",
    title:"Anima y tranquiliza",
    subtitle:"Tu día.",
    icon:"play-back-outline"
  }]


  constructor( private router: Router, private storage: Storage) {}

  finishIntro() {
    this.storage.set('isIntroShowed', true);
    this.router.navigateByUrl("/home"); //PARA PODER NAVEGAR ENTRE LAS RUTAS
  }

  ngOnInit() {}

}
