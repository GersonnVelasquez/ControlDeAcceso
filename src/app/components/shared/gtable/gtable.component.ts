import { Component, OnInit, Input , OnChanges, Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-gtable',
  templateUrl: './gtable.component.html',
  styleUrls: ['./gtable.component.css']
})
export class GtableComponent implements  OnChanges , OnInit  {

  @Input() Data = [];
  @Input() Update = false;
  @Input() Delete = false;
  @Input() Customize = true;
  @Input() Ignore = [];
  @Input() Titulo: string;
  @Output() OnDelete = new EventEmitter();


  Columnas = [];
  Asc = true;
  OrderColumn: string;
  page = 1;
  Ctd = 5;


  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges() {
    if (!!this.Data[0]) {
      this.Columnas = Object.getOwnPropertyNames(this.Data[0]).filter( col => !this.Ignore.includes(col));
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
    this.OnDelete.emit(Registro);
  }

  Modificar(Registro) {
    console.log(Registro);
  }

}
