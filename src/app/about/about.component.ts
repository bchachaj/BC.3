
import { Component, OnInit, HostBinding,
         trigger, transition, animate,
         style, state } from '@angular/core';
@Component({
  selector: 'about',
  host: {
  	'[style.width]':"'100%'"
  },
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
   animations: [
    trigger('routeAnimation', [
      state('*',
        style({
          opacity: 1,
          transform: 'translateX(0)'
        })
      ),
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translateY(10%)'
        }),
        animate('1s ease-in-out')
      ]),
      transition(':leave', [
        animate('0.2s ease-in-out', style({
          opacity: 0,
          transform: 'translateY(10%)'
        }))
      ])
    ])
  ]
})
export class AboutComponent implements OnInit {
  @HostBinding('@routeAnimation') get routeAnimation() {
    return true;
  }

  @HostBinding('style.display') get display() {
    return 'block';
  }

  @HostBinding('style.position') get position() {
    return 'absolute';
  }

  

  constructor(
    private route: ActivatedRoute,
    private router: Router
    
  ) 

  ngOnInit() {
   
  }

  
}

