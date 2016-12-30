import { Injectable } from '@angular/core';

import { propertyResolver } from '../../core/services/property-resolver';

@Injectable()
export class FilterService {
    
    constructor() { }

    filter<T>(items: T[], data: string, props: string[]) {
        return items.filter((item: T) => {
            let match = false;
            for (let prop of props) {
                if (prop.indexOf('.') > -1) {
                   var value = propertyResolver.resolve(prop, item);
                   if (value && value.toUpperCase().indexOf(data) > -1) {
                      match = true;
                      break;
                   }
                   continue;
                }
                
                if (item[prop].toString().toUpperCase().indexOf(data) > -1) {
                  match = true;
                  break;
                }
            };
            return match;
        });        
    }

}