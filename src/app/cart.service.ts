import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root' //define where the service is available
  //root means, its available in the whole project, see it as a singleton :)
})
export class CartService {
  items = [];

  constructor(
    private http: HttpClient,
  ) {}
  addToCart(product) {
    this.items.push(product);
  }
  getItems(){
    return this.items;
  }
  clearCart(){
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }

  /*
  async getShippingPrices(): Promise<any> {
    return await this.http.get('/assets/shipping.json');
  }
  async test() {
   let x = await this.getShippingPrices();
   return x;
  }
  */
 
}