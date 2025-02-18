import {Component, OnInit} from '@angular/core';
import {Customer} from "../model/customer.model";
import {catchError, map, Observable, throwError} from "rxjs";
import {FormBuilder, FormGroup} from "@angular/forms";
import {CustomerService} from "../services/customer.service";
import {Router} from "express";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css'
})
export class CustomersComponent implements OnInit{

  customers! : Observable<Array<Customer>>;
  errorMessage! : string | undefined;
  searchFormGroup : FormGroup | undefined;

  constructor(private customerService : CustomerService, private fb : FormBuilder, private router : Router,public authService : AuthService) {
  }

  ngOnInit(): void {
    this.searchFormGroup = this.fb.group({
      keyword : this.fb.control("")
    });

    this.handleSearchCustomers();

    //   this.customers=this.customerService.getCustomers().pipe(
    //     catchError(err => {
    //       this.errorMessage = err.message;
    //       return throwError(err);
    //     })
    //   )

  }

  handleSearchCustomers() {
    let kw =this.searchFormGroup?.value.keyword;
    this.customers = this.customerService.searchCustomers(kw).pipe(
      catchError(err => {
        this.errorMessage=err.message;
        return throwError(err);
      })
    );
  }

  handleDeleteCustomer(c: Customer) {
    let conf = confirm("Are you sure ?")
    if (!conf) return;
    this.customerService.deleteCustomer(c.id).subscribe({
      next : (resp)=>{
        this.customers=this.customers.pipe(
          map(data=>{
            let index = data.indexOf(c);
            data.slice(index,1)
            return data;
          })
        );
      },
      error : err => {
        console.log(err);
      }
    })
  }

  handleCustomerAccounts(c: Customer) {
    this.router.navigateByUrl("/customer-accounts/" + c.id ,{state:c})
  }
}
