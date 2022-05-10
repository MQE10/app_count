import { Component, OnInit } from '@angular/core';
import { PaisesService } from '../../services/paises.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  formcontacto:formcontacto =
  {
    id:0,
    nombre: ""
  }
 paises:any = [];
  constructor(private paisess:PaisesService) {
    paisess.traer_paises().subscribe(resp=>{
      this.paises=resp;
    console.log(this.paises);
    })
   }
  ngOnInit(): void {
    // this.save();
  }

  guardar()
  {
  }

  save(){
    this.paisess.crearPais(this.formcontacto).subscribe((resp: any) => {console.log(resp)});
  }
  eliminar(){
    console.log(this.formcontacto)
    this.paisess.elminarpais(this.formcontacto).subscribe((resp: any) => {console.log(resp)});
  }
}

interface formcontacto
{
  id:number,
    nombre: string
}

