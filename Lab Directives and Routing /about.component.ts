import { Component } from '@angular/core';
import { concatWith } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  position = "Coach";
  work_experience = 10
  email = "Jkristine029@gmail";
  website = 'https://ac-coffee.com/';
  phone = '09193057801';

  imageUrl : string="assets/KJ.jpeg";
  imageW: number =110;
  imageH: number = 100;


  
}
