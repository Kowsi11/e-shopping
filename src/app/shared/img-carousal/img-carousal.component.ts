import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-img-carousal',
  templateUrl: './img-carousal.component.html',
  styleUrls: ['./img-carousal.component.css']
})
export class ImgCarousalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  pauseOnFocus = true;
}
