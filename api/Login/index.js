module.exports = async function (context, req) {
    const userLogin = req.body;

    context.res = {
        headers: {
            'Content-Type': 'application/json'    
        },
        // status: 200, /* Defaults to 200 */
        body: true
    };
}