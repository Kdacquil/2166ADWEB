import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

//Using ngIf to toggle text display
showText: boolean = false;
toggleText() {
  this.showText = !this.showText;
}

showTable: boolean = false;
toggleTable() {
  this.showTable = !this.showTable;
}

staff = [ 
{ firstName: 'Cheena', lastName: 'Silva', email: 'chee.silva@test.com', role: 'User' },   
{ firstName: 'Alyssa', lastName: 'Evangelista', email: 'aly@test.com', role: 'Admin' }, 
{ firstName: 'Maria', lastName: 'David', email: 'ma.ria@test.com', role: 'Admin' }, 
{ firstName: 'Lianne', lastName: 'Reyes', email: 'lii.reyes@test.com', role: 'User' }, 
{ firstName: 'Mira', lastName: 'Mercado', email: 'mira.mercado@test.com', role: 'User' } 
];

products = [
  { imageUrl: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg', name: 'Fancy Product 1', price: '$40.00 - $80.00' },
  { imageUrl: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg', name: 'Fancy Product 2', price: '$50.00 - $90.00' },
  { imageUrl: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg', name: 'Fancy Product 3', price: '$60.00 - $100.00' },
  // Add more product items as needed
];

}
