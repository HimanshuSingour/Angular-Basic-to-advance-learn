import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cutomeOne'
})
export class CutomeOnePipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    return "City Name -->" + value;
  }

}
