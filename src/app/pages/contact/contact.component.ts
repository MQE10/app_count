import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  formcontacto:formcontacto =
  {
    nombre: "",
    asunto: "",
    descripcion: ""
  }
  constructor() { }

  ngOnInit(): void {

  }
  guardar()
  {
    console.log(this.formcontacto)
  }
}

interface formcontacto
{
    nombre: string,
    asunto: string,
    descripcion: string
}

