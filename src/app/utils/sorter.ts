export class Sorter {

	property: string = null;
	direction: number = 1;

    sort(collection: any[], prop: any) {
        this.property = prop;
        this.direction = (this.property === prop) ? this.direction * -1 : 1;

        collection.sort((a: any,b: any) => {
            if(a[prop] === b[prop]){
                return 0;
            }
            else if (a[prop] > b[prop]){
                return this.direction * -1;
            }
            else {
                return this.direction * 1;
            }
        });
    }

}