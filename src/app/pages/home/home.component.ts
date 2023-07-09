import { Component } from '@angular/core';
import { Professional } from 'src/app/models/professional';
import { ProfessionalsService } from 'src/app/shared/professionals.service';
import { Response } from 'src/app/models/response';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  public pro:Professional;

  constructor(private proService:ProfessionalsService, public router: Router){
    this.pro = new Professional(null,null,null,null,null,null,null,null,null,null);
  }

  mostrarPros(name:string,lastname:string){
    if (name == '' || lastname == '') {
      this.proService.getAllPro().subscribe((data:Response)=>{
        this.proService.pros = data.result;
        this.router.navigateByUrl("/professionals");
      })
    }else{
      this.proService.getOnePro(name,lastname).subscribe((data:Response)=>{
        this.proService.pros = data.result;
        this.router.navigateByUrl("/professionals");
      })
    }
  }

  nuevoPro(name:string,lastname:string,age:number,weight:number,height:number,
    isRetired:boolean,nationality:string,oscarsNumber:number,profession:string,photo:string){
      let pro = new Professional(name,lastname,age,weight,height,isRetired,nationality,oscarsNumber,profession,photo);
      this.proService.newPro(pro).subscribe((data:Response)=>{
        console.log(data);
      })
  }

  modificarPro(name:string,lastname:string,age:number,weight:number,height:number,
    isRetired:boolean,nationality:string,oscarsNumber:number,profession:string,photo:string,id:string){
      console.log(typeof id);
      console.log(typeof name);
      console.log(typeof lastname);
      console.log(typeof age);
      console.log(typeof weight);
      console.log(typeof height);
      console.log(typeof isRetired);
      console.log(typeof nationality);
      console.log(typeof oscarsNumber);
      console.log(typeof profession);
      console.log(typeof photo);

      const body = {
        id: id,
        name: name,
        lastname: lastname,
        age: age,
        weight: weight,
        height: height,
        isRetired: isRetired,
        nationality: nationality,
        oscarsNumber: oscarsNumber,
        profession: profession,
        photo: photo
      }
      console.log(body);
      
      this.proService.modifyPro(body).subscribe((data:Response)=>{
        console.log(data);
      })
  }

  eliminarPro(id:string){
    this.proService.deletePro(id).subscribe((data:Response)=>{
      console.log(data);
    })
  }
}
