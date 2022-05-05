import { Component, OnInit } from '@angular/core';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  paises:any = [];

  constructor(private paisess:PaisesService) {
    paisess.traer_paises().subscribe(resp=>{
      this.paises=resp;
    console.log(this.paises);
    })
   }

  ngOnInit(): void {
  }

}
