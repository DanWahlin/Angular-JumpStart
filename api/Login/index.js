module.exports = async function (context, req) {
    const userLogin = req.body;

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: true
    };
}