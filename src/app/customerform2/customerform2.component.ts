import { Component } from '@angular/core';

@Component({
  selector: 'app-customerform2',
  templateUrl: './customerform2.component.html',
  styles: [`input.ng-invalid{border-left:5px solid red}
  input.ng-valid{border-left:5px solid green}`
]
})
export class Customerform2Component  {
  
  onSubmit(value:any){
    console.log(value);
  }


}
