const env = process.env.NODE_ENV || 'development';

console.log('Running Webpack in ' + env + ' mode.');

if (env === 'development') {
    module.exports = require('./config/webpack.development');
} else {
    module.exports = require('./config/webpack.production');
}