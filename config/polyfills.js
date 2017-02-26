"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("core-js/es6");
require("core-js/es7/reflect");
require('zone.js/dist/zone');
if (process.env.ENV === 'production') {
    // production
}
else {
    // development
    Error.stackTraceLimit = Infinity;
    require('zone.js/dist/long-stack-trace-zone');
}
//# sourceMappingURL=polyfills.js.map