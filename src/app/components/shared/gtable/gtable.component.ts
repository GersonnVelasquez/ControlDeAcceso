import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-gtable',
  templateUrl: './gtable.component.html',
  styleUrls: ['./gtable.component.css']
})
export class GtableComponent implements OnChanges, OnInit {

  @Input() Data = [];
  @Input() Update = false;
  @Input() Delete = false;
  @Input() Customize = true;
  @Input() Ignore = [];
  @Input() ColumnasIn = [];
  @Input() ImgCol = [];
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

      if (!!this.ColumnasIn[0]) {

        this.Columnas = this.ColumnasIn;
        this.OrderColumn = this.Columnas[0].Value;
      } else {
        this.Columnas = [];
        for (const item of Object.getOwnPropertyNames(this.Data[0]).filter(col => !this.Ignore.includes(col))) {
          this.Columnas.push({
            'Nombre': item,
            'Value': item,
            'IsImg': this.ImgCol.includes(item)
          });
      }
        this.OrderColumn = this.Columnas[0].Value;
      }
    }
  }

  SetImage(image) {
    if (image != null) {
      return  'data:image/gif;base64,' + image._buffer;
    }
    return 'assets/img/na.jpg';
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
