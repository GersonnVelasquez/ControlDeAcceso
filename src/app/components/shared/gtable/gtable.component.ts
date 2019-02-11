import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gtable',
  templateUrl: './gtable.component.html',
  styleUrls: ['./gtable.component.css']
})
export class GtableComponent implements OnInit {

  @Input() Data = [];
  @Input() Titulo: string;
  Columnas = [];
  Asc = true;
  OrderColumn: string;
  page = 1;
  Ctd = 10;


  constructor() {
  }

  ngOnInit() {
    if (!!this.Data[0]) {
      this.Columnas = Object.getOwnPropertyNames(this.Data[0]);
      this.OrderColumn = this.Columnas[0];
    }
  }

  SetOrder(OrderColumn: string) {
    if (OrderColumn === this.OrderColumn) {
      this.Asc = !this.Asc;
    } else {
      this.OrderColumn = OrderColumn;
      this.Asc = true;
    }
  }

  Eliminar(Registro) {
    console.log(Registro);
  }

  Modificar(Registro) {
    console.log(Registro);
  }

}
