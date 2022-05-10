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
    nombre: "",
    costo:0,
    disponibilidad:0
  }
 paises:any[] = [];
  constructor(private paisess:PaisesService) {
    paisess.traer_paises().subscribe((resp: any)=>{
      this.paises=resp;
    console.log(this.paises);
    })
   }
  ngOnInit(): void {
    // this.save();
  }

  save(){
    this.paisess.crearPais(this.formcontacto).subscribe((resp: any) => {
      this.paisess.traer_paises().subscribe((resp: any)=>{
        this.paises=resp;
        console.log(this.paises);
      })
    });

    // this.paises.push(this.formcontacto);
    // console.log(this.formcontacto);
    
  }
  eliminar(){
    console.log(this.formcontacto)
    this.paisess.elminarpais(this.formcontacto).subscribe((resp: any) => {
      this.paisess.traer_paises().subscribe((resp: any)=>{
        this.paises=resp;
        console.log(this.paises);
      })
    });
  }
}

interface formcontacto
{
    id:number
    nombre: string
    costo: number
    disponibilidad: number
}

