import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { ToastrIconClasses, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // @Input () usersFormHomeComponent:any;
  @Output () cancelRegister = new EventEmitter();
  model : any = {}
  constructor(private accountService:AccountService, private toastr:ToastrService) {
    
  }

  ngOnInit(): void {
    
  }

  register(){
    this.accountService.register(this.model).subscribe({
      next:() =>{
        //console.log(response);
        this.cancel();
      },
      error : error => this.toastr.error(error.error)
      
    })
  }

  cancel(){
    this.cancelRegister.emit(false);
  }
}
