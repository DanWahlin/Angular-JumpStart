const customers = require('../data/customers.json');

module.exports = async function (context, req) {
    let postedCustomer = req.body;
    let maxId = Math.max.apply(Math, customers.map((cust) => cust.id));
    postedCustomer.id = ++maxId;
    postedCustomer.gender = (postedCustomer.id % 2 === 0) ? 'female' : 'male';
    customers.push(postedCustomer);

    context.res = {
        // status: 200, /* Defaults to 200 */
        headers: {
          'Content-Type': 'application/json'    
        },
        body: postedCustomer
    };
}