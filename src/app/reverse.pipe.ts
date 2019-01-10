import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  	transform(value: any): string {
  		let str = "";
  		for(var i=value.length-1;i>=0;i--){
  			str += value.charAt(i);
  		}
    	return str;
  	}

}
