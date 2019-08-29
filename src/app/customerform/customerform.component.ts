import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-customerform',
  templateUrl: './customerform.component.html',
  styles: [`input.ng-invalid{border-left:5px solid red}
  input.ng-valid{border-left:5px solid green}`
]
})
export class CustomerformComponent {
  
  userForm = new FormGroup({
    name: new FormControl("3456789", [Validators.required, Validators.minLength(5)]),
    contact: new FormControl("", [Validators.pattern('[0-9]{10}')]),
    email: new FormControl("",[Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}")]),
    address:new FormGroup({
      city:new FormControl("ongole",[Validators.required, Validators.pattern('[a-z]+')]),
      street:new FormControl(),
      postalcode:new FormControl("123456",[Validators.required, Validators.pattern('[0-9]{6}')]), 

    })
  });

  onsubmit(){
    console.log(this.userForm.value)
}
  }


