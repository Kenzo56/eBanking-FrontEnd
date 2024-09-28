import { Component } from '@angular/core';
import {Customer} from "../model/customer.model";
import {ActivatedRoute} from "@angular/router";
import {Router} from "express";

@Component({
  selector: 'app-customer-accounts',
  templateUrl: './customer-accounts.component.html',
  styleUrl: './customer-accounts.component.css'
})
export class CustomerAccountsComponent {
  customrtId! : string;
  customer! : Customer;
  constructor(private route : ActivatedRoute,private router:Router) {
    this.customer=this.router.getCurrentNavigation()?.extras.state as Customer;
  }

  ngOnInit(){
    this.customrtId=this.route.snapshot.params['id'];
  }
}
