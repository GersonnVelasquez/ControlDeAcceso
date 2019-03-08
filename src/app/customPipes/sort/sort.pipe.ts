import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(array: any[], field: string, asc: boolean): any[] {

    array.sort(function (a, b) {
      if (asc === true) {
        if (isNaN(a[field]) || isNaN(b[field])) {
          return a[field] > b[field] ? 1 : -1;
        }
        return a[field] > b[field] ? 1 : -1;
      } else {
        if (isNaN(a[field]) || isNaN(b[field])) {
          return a[field] < b[field] ? 1 : -1;
        }
        return a[field] < b[field] ? 1 : -1;
      }
    });

    // array.sort((a: any, b: any) => {
    //     if (asc === true) {
    //       if (a[field] < b[field]) {
    //         return -1;
    //       } else if (a[field] > b[field]) {
    //         return 1;
    //       } else {
    //         return 0;
    //       }
    //     } else {
    //       if (a[field] > b[field]) {
    //         return -1;
    //       } else if (a[field] < b[field]) {
    //         return 1;
    //       } else {
    //         return 0;
    //       }
    //     }
    // });
    return array;
  }
}

