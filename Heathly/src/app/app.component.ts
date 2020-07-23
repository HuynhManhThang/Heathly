import { Component } from '@angular/core';
declare let $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Heathly';

  ngAfterViewInit(){

    $('.owl-carousel').owlCarousel({
      loop:true,
      margin:10,
      responsiveClass:true,
      responsive:{
          0:{
              items:1,
              nav:true
          },
          600:{
              items:2,
              nav:false
          },
          808:{
            items:3,
            nav:false
          },
          1180:{
            items:4,
              nav:false
          },

          1515:{
            items:5,
            nav:true,
            loop:true
        }
      }

})
  }
}
