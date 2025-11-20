import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'newLabel' })
export class NewLabelPipe implements PipeTransform {
  transform(value: string): string {
    return ` ${value} (new!)`;
  }
}
