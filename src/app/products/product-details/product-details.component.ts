import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/_Services/cart.service';
import { Product, products } from '../product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;

  constructor(private route: ActivatedRoute,
    private cartService: CartService) { }

  ngOnInit() {
    const routeparams = this.route.snapshot.paramMap;
    const productIdFormRoute = Number(routeparams.get('productId'));
    this.product = products.find(product => product.p_id === productIdFormRoute);
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('your product has added to the cart');
  }
}
