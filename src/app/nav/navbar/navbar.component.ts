import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'events-app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }
  ngOnInit(): void {
  }
logOut(){
  this.router.navigate(['/login']);
  alert('Are you sure you logout')
}
}
