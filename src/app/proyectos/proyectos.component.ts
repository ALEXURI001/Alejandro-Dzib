import { Component, ViewEncapsulation } from '@angular/core';
import SwiperCore, { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Autoplay, EffectCoverflow]);

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class ProyectosComponent {

  visible!: boolean;
  visible1!: boolean;
  visible2!: boolean;
  visible3!: boolean;
  visible4!: boolean;
  visible5!: boolean;
  visible6!: boolean;
  visible7!: boolean;


  swiperConfig: any = {
    effect: 'coverflow',
    autoplay: true,
    slidesPerView: 3,
    coverflowEffect: {
      slideShadows: false,
      rotate: 50,
      stretch: 0,
      modifier: 1
    },
    navigation: true,
    pagination: { clickable: true },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 1,
        spaceBetween: 30
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 2,
        spaceBetween: 40
      },
      940: {
        slidesPerView: 3,
        spaceBetween: 10
      }
    }
  }


  showDialog(){
    this.visible = true;
  }

  showDialog1(){
    this.visible1 = true;
  }

  showDialog2(){
    this.visible2 = true;
  }

  showDialog3(){
    this.visible3 = true;
  }

  showDialog4(){
    this.visible4 = true;
  }

  showDialog5(){
    this.visible5 = true;
  }

  showDialog6(){
    this.visible6 = true;
  }

  showDialog7(){
    this.visible7 = true;
  }

}
