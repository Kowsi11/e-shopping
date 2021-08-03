import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/products/product';
import { CartService } from 'src/app/_Services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }




  ngOnInit(): void {
  }

}
