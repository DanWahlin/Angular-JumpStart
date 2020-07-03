const customers = require('../data/customers.json');

module.exports = async function (context, req) {
    const { skip: skipVal, top: topVal } = context.bindingData;
    const skip = (isNaN(skipVal)) ? 0 : +skipVal;
    let top = (isNaN(topVal)) ? 10 : skip + (+topVal);

    if (top > customers.length) {
        top = skip + (customers.length - skip);
    }

    console.log(`Skip: ${skip} Top: ${top}`);

    var pagedCustomers = customers.slice(skip, top);
    
    context.res = {
        // status: 200, /* Defaults to 200 */
        headers : {
          'Content-Type': 'application/json',
            'X-InlineCount': customers.length  
        },
        body: pagedCustomers
    };
}