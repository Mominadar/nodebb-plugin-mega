(function(module) {
    "use strict";

    var Plugin = {};

    Plugin.check = function(data, callback) {
        console.log("custom function is called...")
        data.routes.push({
            route: 'customHP',
            name: 'Custom Homepage'
        });
        callback(null, data);
    };

    Plugin.auth = function(user, callback) {
        console.log("user: ", user);
        callback(null, areas);
    };

    module.exports = Plugin;
}(module));