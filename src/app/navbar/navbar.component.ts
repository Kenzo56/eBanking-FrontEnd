import {Component, OnInit} from '@angular/core';
import {AuthService} from "../services/auth.service";
import {Router} from "express";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{

  constructor(public authService : AuthService, private router : Router) {
  }

  ngOnInit(): void {
  }

  handleLogout() {
    this.authService.logout();
  }

  protected readonly DataTransfer = DataTransfer;
}
