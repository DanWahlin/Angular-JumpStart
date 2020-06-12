import { Router, Response, Request } from 'https://deno.land/x/oak/mod.ts';
import { loadFile } from './loadfile.ts';

const   customers   = JSON.parse(loadFile('../data/customers.json')),
        states      = JSON.parse(loadFile('../data/states.json')),
        router = new Router();

router.get('/api/customers/page/:skip/:top', ({params,  response}: {params: {skip: string, top: string}, response: Response}) => {
    const topVal = +params.top,
          skipVal = +params.skip,
          skip = (isNaN(skipVal)) ? 0 : skipVal;  
    let top = (isNaN(topVal)) ? 10 : skip + (topVal);

    if (top > customers.length) {
        top = skip + (customers.length - skip);
    }

    console.log(`Skip: ${skip} Top: ${top}`);

    var pagedCustomers = customers.slice(skip, top);
    response.headers.set('X-InlineCount', customers.length);
    response.body = pagedCustomers;
});

router.get('/api/customers', ({response}) => {
    response.body = customers;
});

router.get('/api/customers/:id', ({params,  response}: {params: {id: string}, response: Response}) => {
    let customerId = +params.id;
    let selectedCustomer = null;
    for (let customer of customers) {
        if (customer.id === customerId) {
           // found customer to create one to send
           selectedCustomer = {};
           selectedCustomer = customer;
           break;
        }
    }  
    response.body = selectedCustomer;
});

router.post('/api/customers', ({request, response}: {request: Request, response: Response}) => {
    let postedCustomer = request.body as any;
    let maxId = Math.max.apply(Math,customers.map((cust: any) => cust.id));
    postedCustomer.id = ++maxId;
    postedCustomer.gender = (postedCustomer.id % 2 === 0) ? 'female' : 'male';
    customers.push(postedCustomer);
    response.body = postedCustomer;
});

router.put('/api/customers/:id', ({params, request, response}: {params: {id: string}, request: Request, response: Response}) => {
    let putCustomer = request.body as any;
    let id = +params.id;
    let status = false;

    //Ensure state name is in sync with state abbreviation 
    const filteredStates = states.filter((state: any) => state.abbreviation === putCustomer.state.abbreviation);
    if (filteredStates && filteredStates.length) {
        putCustomer.state.name = filteredStates[0].name;
        console.log('Updated putCustomer state to ' + putCustomer.state.name);
    }

    for (let i=0,len=customers.length;i<len;i++) {
        if (customers[i].id === id) {
            customers[i] = putCustomer;
            status = true;
            break;
        }
    }
    response.body = { status: status };
});

router.delete('/api/customers/:id', ({params,  response}: {params: {id: string}, response: Response}) => {
    let customerId = +params.id;
    for (let i=0,len=customers.length;i<len;i++) {
        if (customers[i].id === customerId) {
           customers.splice(i,1);
           break;
        }
    }  
    response.body = { status: true };
});

router.get('/api/orders/:id', ({params,  response}: {params: {id: string}, response: Response}) => {
    let customerId = +params.id;
    for (let cust of customers) {
        if (cust.customerId === customerId) {
            return response.body = cust;
        }
    }
    response.body = [];
});

router.get('/api/states', ({response}: {response: Response}) => {
    response.body = states;
});

router.post('/api/auth/login', ({request, response}: {request: Request, response: Response}) => {
    var userLogin = request.body;
    //Add "real" auth here. Simulating it by returning a simple boolean.
    response.body = true;
});

router.post('/api/auth/logout', ({response}: {response: Response}) => {
    response.body = true;
});

// router.all('/(.*)', (ctx) => {
//     ctx.response.type = '.html';
//     ctx.response.body = loadFile('../dist/index.html');
// });


export default router;