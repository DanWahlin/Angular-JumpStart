"use strict";
require("core-js/es6");
require("core-js/es7/reflect");
require('zone.js/dist/zone');
if (process.env.ENV === 'production') {
}
else {
    // development
    Error.stackTraceLimit = Infinity;
    require('zone.js/dist/long-stack-trace-zone');
}
//# sourceMappingURL=polyfills.js.map