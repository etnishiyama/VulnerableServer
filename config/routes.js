'use strict';

/* Master route table */
// Collection routes
var user = require('../app/route/UserRoute');

// Export master routes
module.exports = function(app) {
    app.use('/app/v1/user', user);
};