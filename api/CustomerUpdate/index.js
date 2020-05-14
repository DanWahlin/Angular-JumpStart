const customers = require('../data/customers.json');
const states = require('../data/states.json');

module.exports = async function (context, req) {
    let putCustomer = req.body;
    let id = +req.params.id;
    let status = false;

    //Ensure state name is in sync with state abbreviation 
    const filteredStates = states.filter((state) => state.abbreviation === putCustomer.state.abbreviation);
    if (filteredStates && filteredStates.length) {
        putCustomer.state.name = filteredStates[0].name;
        console.log('Updated putCustomer state to ' + putCustomer.state.name);
    }

    for (let i = 0, len = customers.length; i < len; i++) {
        if (customers[i].id === id) {
            customers[i] = putCustomer;
            status = true;
            break;
        }
    }
    
    context.res = {
        headers : {
          'Content-Type': 'application/json'   
        },
        // status: 200, /* Defaults to 200 */
        body: {
            status: status
        }
    };
}