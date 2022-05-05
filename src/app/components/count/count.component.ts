import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css']
})
export class CountComponent implements OnInit {
  contador:number =0;
  constructor() { }

  ngOnInit(): void {
  }
  suma()
  {
    this.contador ++;
  }
  resta()
  {
    this.contador--;
  }
  reset()
  {
    this.contador=0;
  }
}
