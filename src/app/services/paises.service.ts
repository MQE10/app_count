import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class PaisesService {
  
  constructor(private http:HttpClient    ) { }
  traer_paises()
  {
    return this.http.get(environment.endPoint+'Api');
  }
  crearPais(pais: any)
  {
    return this.http.post(environment.endPoint + "Api/saveDTO", pais);
  }
}


