import { Component } from '@angular/core';
import { Professional } from 'src/app/models/professional';
import { ProfessionalsService } from 'src/app/shared/professionals.service';
import { Response } from 'src/app/models/response';

@Component({
  selector: 'app-professionals',
  templateUrl: './professionals.component.html',
  styleUrls: ['./professionals.component.css']
})
export class ProfessionalsComponent {

  public pros:Professional[];

  constructor(private proService: ProfessionalsService){
    this.pros = this.proService.pros;
  }
}
