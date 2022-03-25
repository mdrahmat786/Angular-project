import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dollervalue'
})
export class FirstpipePipe implements PipeTransform {

  transform(amount: number) {
    return amount*75;
  }
}

