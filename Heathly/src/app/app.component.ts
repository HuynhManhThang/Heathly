import { Component } from '@angular/core';
declare let $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Heathly';

  ngAfterViewInit() {
    $('.owl-carousel').owlCarousel({
      loop: true,
      dots: false,
      autoplay: true,
      navText: ["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
      autoplayTimeout: 2000,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
          nav: false
        },
        810: {
          items: 3,
          nav: false
        },
        1180: {
          items: 4,
          nav: false,
          // loop:false

        },


      }

    })
    var owl = $('.owl-carousel');
    owl.owlCarousel();
    $('.pre').click(function () {
      owl.trigger('next.owl.carousel');
    });
    $('.next').click(function () {
      owl.trigger('prev.owl.carousel', [300]);
    });

  }
}
