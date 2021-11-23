import { Injectable } from '@angular/core';

import { PropertyResolver } from './property-resolver';

@Injectable({
    providedIn: 'root',
})
export class SorterService {

    property: string = '';
    direction = 1;

    sort(collection: any[], prop: any, reverseSort = true) {
        this.property = prop;
        if (reverseSort) {
            this.direction = (this.property === prop) ? this.direction * -1 : 1;
        }

        return collection.sort((a: any, b: any) => {
            let aVal: any;
            let bVal: any;

            // Handle resolving complex properties such as 'state.name' for prop value
            if (prop && prop.indexOf('.') > -1) {
                aVal = PropertyResolver.resolve(prop, a);
                bVal = PropertyResolver.resolve(prop, b);
            } else {
                aVal = a[prop];
                bVal = b[prop];
            }

            // Fix issues that spaces before/after string value can cause such as ' San Francisco'
            if (this.isString(aVal)) {
                aVal = aVal.trim().toUpperCase();
            }

            if (this.isString(bVal)) {
                bVal = bVal.trim().toUpperCase();
            }

            if (aVal === bVal) {
                return 0;
            } else if (aVal > bVal) {
                return this.direction * -1;
            } else {
                return this.direction * 1;
            }
        });
    }

    isString(val: any): boolean {
        return (val && (typeof val === 'string' || val instanceof String));
    }

}
