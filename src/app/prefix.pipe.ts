import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prefix'
})
export class PrefixPipe implements PipeTransform {

  transform( value: unknown ): unknown {
    return "Title: "+value;
  }

}
